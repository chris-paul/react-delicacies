<!--
 * @Author: your name
 * @Date: 2020-01-03 11:29:24
 * @LastEditTime : 2020-01-03 11:42:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\docs\bable\lodash优化.md
 -->
### babel-loader & babel-plugin-lodash


+ 可以使用babel-loader在对*.js文件进行解析，然后借助于babel-plugin-lodash插件对引用的lodash进行类似tree shaking的操作，这样就可以去除未使用的lodash代码片段

```javascript
npm install @babel/preset-env babel-plugin-lodash --dev
// 配置.babelrc
{
  "plugins": ["lodash"],
  "presets": [["@babel/env", { "targets": { "node": 6 } }]]
}
//
```

+ 根据babel-plugin-lodash参考文档介绍，使用lodash-webpack-plugin可以进一步压缩lodash

```javascript
npm install lodash-webpack-plugin --dev
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
...
plugins: [
    new LodashModuleReplacementPlugin,
]
```

