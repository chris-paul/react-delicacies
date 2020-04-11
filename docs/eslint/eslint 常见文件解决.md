<!--
 * @Author: 廉恒凯
 * @Date: 2019-12-29 12:52:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-11 15:41:52
 * @Description: eslint常见报错总结
 -->

-   eslint 报错 Missing file extension for "“,基本所有的路径都不能识别

```javascript
/* 之前的项目,使用这个处理别名,完全没有问题 */

 "import/resolver": {
    "alias": {
        "map": [
            ["components", "./src/components"]
        ]
    }
},
```

### 解决方案

npm install eslint-import-resolver-webpack
