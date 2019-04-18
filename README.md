libertadores-cli
================

A simple CLI to get information about &#34;Copa Libertadores&#34; right in your terminal

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/libertadores-cli.svg)](https://npmjs.org/package/libertadores-cli)
[![CircleCI](https://circleci.com/gh/streaver/libertadores-cli/tree/master.svg?style=shield)](https://circleci.com/gh/streaver/libertadores-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/libertadores-cli.svg)](https://npmjs.org/package/libertadores-cli)
[![License](https://img.shields.io/npm/l/libertadores-cli.svg)](https://github.com/streaver/libertadores-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g libertadores-cli
$ libertadores COMMAND
running command...
$ libertadores (-v|--version|version)
libertadores-cli/0.0.0 darwin-x64 node-v11.13.0
$ libertadores --help [COMMAND]
USAGE
  $ libertadores COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`libertadores games:all`](#libertadores-gamesall)
* [`libertadores games:past`](#libertadores-gamespast)
* [`libertadores games:upcoming`](#libertadores-gamesupcoming)
* [`libertadores help [COMMAND]`](#libertadores-help-command)

## `libertadores games:all`

Retrieves all the games for the "Copa Libertadores"

```
USAGE
  $ libertadores games:all

OPTIONS
  -s, --game-site  Whether or not to show a link to the game site

DESCRIPTION
  Color coding:

  - green means it has already been played
  - red means it is a future game
```

_See code: [src/commands/games/all.js](https://github.com/streaver/libertadores-cli/blob/v0.0.0/src/commands/games/all.js)_

## `libertadores games:past`

Retrieves all the past games for the "Copa Libertadores"

```
USAGE
  $ libertadores games:past

OPTIONS
  -s, --game-site  Whether or not to show a link to the game site
```

_See code: [src/commands/games/past.js](https://github.com/streaver/libertadores-cli/blob/v0.0.0/src/commands/games/past.js)_

## `libertadores games:upcoming`

Describe the command here

```
USAGE
  $ libertadores games:upcoming

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/games/upcoming.js](https://github.com/streaver/libertadores-cli/blob/v0.0.0/src/commands/games/upcoming.js)_

## `libertadores help [COMMAND]`

display help for libertadores

```
USAGE
  $ libertadores help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
