<!--
 * @Author: 廉恒凯
 * @Date: 2020-01-03 14:05:23
 * @LastEditTime: 2020-04-11 15:40:32
 * @LastEditors: 廉恒凯
 * @Description: bable按需加载
 * @FilePath: \react-delicacies\docs\bable\coreJs优化.md
 -->

### @baebl/polyfill 按需加载

-   我们可以使用 useBuiltIns 这个属性，这个属性是 babel7 新增的，我们需要这样配置,在.babelrc 配置了"useBuiltIns": "usage"后， Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。按我的理解按需引入

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
