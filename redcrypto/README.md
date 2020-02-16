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
* [`redcrypto hello [FILE]`](#redcrypto-hello-file)
* [`redcrypto help [COMMAND]`](#redcrypto-help-command)

## `redcrypto hello [FILE]`

describe the command here

```
USAGE
  $ redcrypto hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ redcrypto hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/redharp/redcrypto/blob/v0.0.0/src/commands/hello.ts)_

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
