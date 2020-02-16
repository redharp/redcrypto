import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as path from 'path'
import * as inquirer from 'inquirer'
import {promisify} from 'util'

const CONFIG_PATH = path.resolve('.config', 'config.json')

const questions: inquirer.QuestionCollection = [
  {
    name: 'env',
    message: 'select environment',
    type: 'list',
    choices: ['dev', 'prod'],
  },
  {
    name: 'apikey',
    message: 'input coinbase.pro apikey',
    type: 'input',
  },
  {
    name: 'passphrase',
    message: 'input coinbase.pro passphrase',
    type: 'password',
    transformer: (input: string) => `passphrase ending in ${input.substr(input.length - 4, 4)}`,
  },
  {
    name: 'secret',
    message: 'configuring coinbase.pro secret',
    type: 'input',
  },
]

const getConfig = async () => {
  const readFileAsync = promisify(fs.readFile)
  const j = await readFileAsync(CONFIG_PATH, {encoding: 'utf8'})
  // eslint-disable-next-line no-console
  return JSON.parse(j)
}

const setConfig = async ({env, apikey, passphrase, secret}: { [x: string]: string}) => {
  const conf = await getConfig()
  conf.env = env
  conf.coinbase.apikey = apikey
  conf.coinbase.passphrase = passphrase
  conf.coinbase.secret = secret
  const writeFileAsync = promisify(fs.writeFile)
  await writeFileAsync(CONFIG_PATH, JSON.stringify(conf), {encoding: 'utf8'})
  const updated = await getConfig()
  console.log(updated)
}

export default class Config extends Command {
  static description = 'coinbase.pro api configuration'

  static flags = {
    set: flags.string({
      description: 'overwrite envParam',
      options: ['apikey', 'secret', 'passphrase'],
    }),
    list: flags.string({
      description: 'print envParams',
      options: ['all', 'apikey', 'secret', 'passphrase'],
    }),
  }

  async run() {
    const existing = await getConfig()
    if (existing.coinbase.apikey.length > 0) {
      const conff = {
        env: existing.env,
        apikey: existing.coinbase.apikey,
        passphrase: existing.coinbase.passphrase,
        secret: existing.coinbase.secret,
        ws: existing.coinbase.ws.sandbox,
        rest: existing.coinbase.rest.sandbox,
      }
      this.warn(`Found existing config: ${JSON.stringify(conff, undefined, 2)}`)
      inquirer.prompt({
        name: 'existing.config',
        type: 'confirm',
      }).then(async a => {
          this.log(a["existing.config"])
        if (a['existing.config'] === 'Yes') {
          const {
            env,
            apikey,
            passphrase,
            secret,
          } = await inquirer.prompt(questions)
          this.log(`env in existing: $`)
          await setConfig({env, apikey, passphrase, secret})

    }
      })
    } else {
      const {
        env: a,
        apikey: b,
        passphrase: c,
        secret: d,
      } = await inquirer.prompt(questions)
      await setConfig({env: a, apikey: b, passphrase: c, secret: d})
    }
  }
}

