redcrypto
=========

cli-coinbase-wws-crypto

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/redcrypto.svg)](https://npmjs.org/package/redcrypto)
[![Downloads/week](https://img.shields.io/npm/dw/redcrypto.svg)](https://npmjs.org/package/redcrypto)
[![License](https://img.shields.io/npm/l/redcrypto.svg)](https://github.com/redharp/redcrypto/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g redcrypto
$ redcrypto COMMAND
running command...
$ redcrypto (-v|--version|version)
redcrypto/0.0.0 darwin-x64 node-v12.14.1
$ redcrypto --help [COMMAND]
USAGE
  $ redcrypto COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`redcrypto config`](#redcrypto-config)
* [`redcrypto creds`](#redcrypto-creds)
* [`redcrypto help [COMMAND]`](#redcrypto-help-command)

## `redcrypto config`

coinbase.pro api configuration

```
USAGE
  $ redcrypto config

OPTIONS
  --list=all|apikey|secret|passphrase  print envParams
  --set=apikey|secret|passphrase       overwrite envParam
```

_See code: [src/commands/config.ts](https://github.com/redharp/redcrypto/blob/v0.0.0/src/commands/config.ts)_

## `redcrypto creds`

set coinbase creds

```
USAGE
  $ redcrypto creds

OPTIONS
  -p, --passphrase=passphrase
  -s, --secret=secret
  --apikey=apikey
  --env=dev|prod               [default: dev]
  --file=file                  optionally supply path to .env file
  --save                       save config
```

_See code: [src/commands/creds.ts](https://github.com/redharp/redcrypto/blob/v0.0.0/src/commands/creds.ts)_

## `redcrypto help [COMMAND]`

display help for redcrypto

```
USAGE
  $ redcrypto help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
