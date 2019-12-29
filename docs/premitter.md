### 安装依赖

```javascript
npm install --save-dev prettier
npm install --save-dev prettier-eslint prettier-eslint-cli
```

### 常见配置

```javascsript
module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准，// 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行，如果都不想换，可以添加 "proseWrap": "never"
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf'
};

// antd design的配置
{
    "tabWidth": 4,
    "useTabs": false,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100,
    "proseWrap": "never",
    "overrides": [
        {
            "files": ".prettierrc",
            "options": {
                "parser": "json"
            }
        }
    ]
}

```

### eslint 和 Prettier 会有冲突

-   解决冲突的主要思路主要是在 eslint 的规则配置文件上做文章，安装特定的 plugin，把其配置到规则的尾部，实现 prettier 规则对 eslint 规则的覆盖

-   安装依赖

```javascript
npm install --save-dev eslint-config-prettier

```

-   在 .eslintrc.\* 文件里面的 extends 字段添加：

```javascript
{
  "extends": [
    ...,
    "已经配置的规则",
   "prettier",
   "prettier/@typescript-eslint"
  ]
}

// 如果你想覆盖掉更多的规则
{
  "extends": [
    ...,
    "已经配置的规则",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
    "prettier/vue"
  ]
}
```

### 编辑器自动保存

-   修改 eslint setting.json 自动保存

```javascript
{
    "workbench.colorTheme": "One Dark Pro",
    "workbench.iconTheme": "vscode-icons",
    "powermode.enabled": true,
    "powermode.shakeIntensity": 0,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "prettier.bracketSpacing": true,
    "editor.formatOnSave": true
}
```

### 参考文献

https://zhuanlan.zhihu.com/p/68026905

https://juejin.im/post/5cf5dfe2f265da1bd522baaa
