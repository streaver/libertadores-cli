libertadores-cli
================

<div align="center">
  <p align="center">A simple CLI to get information about "Copa Libertadores" right in your terminal!</p>
  <img src="https://user-images.githubusercontent.com/7522836/56518337-8d3fd480-6515-11e9-8abf-da6ee9b33f84.png" />

  <p align="center">
    <a href="https://npmjs.org/package/libertadores-cli">
      <img src="https://img.shields.io/npm/v/libertadores-cli.svg" />
    </a>
    <a href="https://oclif.io">
      <img src="https://img.shields.io/badge/cli-oclif-brightgreen.svg" />
    </a>
    <a href="https://circleci.com/gh/streaver/libertadores-cli/tree/master">
      <img src="https://circleci.com/gh/streaver/libertadores-cli/tree/master.svg?style=shield" />
    </a>
    <a href="https://codeclimate.com/github/streaver/libertadores-cli/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/06419a751b601e5afb4d/maintainability" />
    </a>
    <a href="https://codeclimate.com/github/streaver/libertadores-cli/test_coverage">
      <img src="https://api.codeclimate.com/v1/badges/06419a751b601e5afb4d/test_coverage" />
    </a>
    <a href="https://github.com/streaver/libertadores-cli/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/streaver/libertadores-cli.svg" />
    </a>
  </p>
</div>

In South America, where we are from, soccer is a passion and everyone goes crazy when the "Copa Libertadores" is going on so we built this CLI to get some information about it! Checkout our article about building awesome CLIs: [Building awesome CLIs with JavaScript and Oclif](https://www.streaver.com/blog/posts/building-CLIs-with-javascript-and-oclif.html)

## Preview

<div align="center">
  <img height="300px" src="https://user-images.githubusercontent.com/7522836/56519247-f9bbd300-6517-11e9-88ce-6cf98232be53.gif" />
</div>


## Table of Content

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
libertadores-cli/1.0.0 darwin-x64 node-v11.13.0
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

_See code: [src/commands/games/all.js](https://github.com/streaver/libertadores-cli/blob/v1.0.0/src/commands/games/all.js)_

## `libertadores games:past`

Retrieves all the past games for the "Copa Libertadores"

```
USAGE
  $ libertadores games:past

OPTIONS
  -s, --game-site  Whether or not to show a link to the game site
```

_See code: [src/commands/games/past.js](https://github.com/streaver/libertadores-cli/blob/v1.0.0/src/commands/games/past.js)_

## `libertadores games:upcoming`

Retrieves all the upcoming games for the "Copa Libertadores"

```
USAGE
  $ libertadores games:upcoming
```

_See code: [src/commands/games/upcoming.js](https://github.com/streaver/libertadores-cli/blob/v1.0.0/src/commands/games/upcoming.js)_

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

## Contributing

All contributions or issue reporting are welcomed. If you are filing a bug please include information to help debug it!

If you plan to contribute, please make sure you test the code.
