<!--
 * @Author: your name
 * @Date: 2020-01-03 14:05:23
 * @LastEditTime : 2020-01-03 14:06:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\docs\bable\coreJs优化.md
 -->
+ @baebl/polyfill按需加载

    + 我们可以使用useBuiltIns这个属性，这个属性是babel7新增的，我们需要这样配置,在.babelrc配置了"useBuiltIns": "usage"后，
    Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。按我的理解按需引入
    ```javascript
    presets:[
    [
        '@babel/preset-env',
        {
            "targets": {
                "browsers": [
                    "ie >=9",
                    "last 2 version",
                    "> 5%",
                    "not dead"
                ]
            },
            "useBuiltIns":"usage"
        }
    ],
    '@babel/preset-react'
],

```
