# git-info
> Get git infomation.

## installation
```shell
npm i @jswork/git-info
```

## usage
```js
var branch = require('@jswork/git-info').branch;

//exec('git branch | grep \\\*')
//branch();
```

## get current brach
```bash
# git rev-parse --abbrev-ref HEAD
# git branch | grep '*'
```

## resources
+ https://github.com/pirelenito/git-revision-webpack-plugin
