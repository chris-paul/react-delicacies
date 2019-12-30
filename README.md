<!--
 * @Description: zhongshu React PC
 * @Author: 廉恒凯
 * @Date: 2019-08-24 10:38:04
 * @LastEditTime : 2019-12-30 10:31:15
 * @LastEditors  : Please set LastEditors
 -->

### 文档维护

+  **开发前阅读doc目录下README.md,并阅读开发文档**

### 预览地址

+ 测试库: localhost:3333

### 本地环境依赖

+ node: v10.0.0以上版本

+ npm: 6.2.0以上版本

### 编辑器插件安装(推荐Vscode)

+ Beautify

+ Beautify css/sass/scss/less

+ EditorConfig

+ Beautify css/sass/scss/less

+ ESLint

+ stylelint

+ Bracket Pair Colorizer(颜色识别匹配括号)

+ Document This(注释)

+ koroFileHeader(头文件注释)

+ Markdown

+ JavaScript (ES6) code snippets(es6代码片段)

+ ES7 React/Redux/GraphQL/React-Native snippets

+ React-Native/React/Redux snippets for es6/es7(React代码片段)

+ vscode-icons

+ Local History (查看历史记录)

+ EditorConfig 配置

+ Monokai Pro/One Dark Pro(个人非常喜欢的一个主题)

+ Prettier - Code formatter(代码格式化)

```javascript

root = true
[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

```

+ jsconfig.json配置

```javascript
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
+ Prettier(修改 eslint setting.json 自动保存)

```javascript
// 编辑器配置加这一行
"editor.formatOnSave": true
```

### 编码规范(继承自airbnb)

+ 强烈建议打开eslint代码检测

### 项目运行

```javascript

$ git clone

$ cd react-delicacies

$ npm install

/*  项目启动 */
$ npm start

/*  项目打包 */
$ npm run build

/*  项目测试用例 */
$ npm run jest

/*  项目测试覆盖率查看 */
$ npm run coverage

/* 打包分布图 */
$ npm run report

```
