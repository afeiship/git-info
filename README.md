# git-info
> Get git infomation.


## usage:
```js
var branch = require('@feizheng/git-info').branch;

//exec('git branch | grep \\\*')
//branch();
```

## get current brach:
```bash
# git rev-parse --abbrev-ref HEAD
# git branch | grep '*'
```

## resources:
+ https://github.com/pirelenito/git-revision-webpack-plugin
