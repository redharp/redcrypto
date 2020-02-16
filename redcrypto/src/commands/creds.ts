import {Command, flags} from '@oclif/command'
import {config} from 'dotenv'

const readEnv = (path: string) => config({
  path,
})

const envVars = {
  apikey: 'API_KEY',
  passphrase: 'PASS_PHRASE',
  secret: 'SECRET',
  env: 'ENV',
}
const coinbase = { ...envVars}
export default class Creds extends Command {
  static flags = {
    // can pass either --force or -f
    env: flags.string({
      default: 'dev',
      required: false,
      options: ['dev', 'prod'],
    }),
    passphrase: flags.string({char: 'p'}),
    apikey: flags.string(),
    secret: flags.string({char: 's'}),
    save: flags.boolean({
      description: 'save config',
      default: false,
    }),
    file: flags.string({
      description: 'optionally supply path to .env file',
      required: false,
    }),
  }

  static description = 'set coinbase creds'

  async run() {
    const {flags} = this.parse(Creds)
    if (flags.file) {
      readEnv(flags.file)
      flags.apikey = process.env[envVars.apikey]
      flags.passphrase = process.env[envVars.passphrase]
      flags.secret = process.env[envVars.secret]
      flags.env = process.env[envVars.env] || 'dev'
    }
    if (flags.apikey) coinbase.apikey = flags.apikey
    if (flags.passphrase) coinbase.passphrase = flags.passphrase
    if (flags.env) coinbase.env = flags.env
    if (flags.secret) coinbase.env = flags.secret
    this.log(`Built coinbase config: ${JSON.stringify(coinbase)}`)
  }
}
