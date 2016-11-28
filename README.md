# react-omni
React framework for that works for both react and react-native
Reactive Design Components

## Benefits
- Uses only components supplied by [react-native-web](https://github.com/necolas/react-native-web) so all components in this library are compatible in both react-native and react

## Build Status

[![npm version](https://badge.fury.io/js/react-omni.svg)](https://badge.fury.io/js/react-omni)<br />
[![Build Status](https://travis-ci.org/brianneisler/react-omni.svg)](https://travis-ci.org/brianneisler/react-omni)<br />
[![NPM](https://nodei.co/npm/react-omni.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-omni/)

## Install

```bash
npm install --save react-omni
```

## Install for web
- requires additional use of the [react-omni-webpack-plugin](https://github.com/brianneisler/react-omni-webpack-plugin)
```bash
npm install --save react-omni-webpack-plugin
```
- Then in your webpack config add the plugin
```js
...
import ReactOmniPlugin from 'react-omni-webpack-plugin'

export default {
  ...,
  plugins: [
    ...,
    new ReactOmniPlugin()
  ]
}
```

## Usage

```js
import { Icon, Text, View } from 'react-omni'

```
## Recompose helpers for styles

- withStyles

## Components
* Alerts
* Icons
* Typography
