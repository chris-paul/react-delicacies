### babel 常见的工具包

#### 核心包

-   babel-core：把 js 代码分析成 ast (抽象语法树, 是源代码的抽象语法结构的树状表现形式)，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 ast，再通过语法转换器分析其语法后转为低版本 js

    -   babylon：js 的词法解析器

    -   babel-traverse：用于对 AST（抽象语法树，想了解的请自行查询编译原理）的遍历，主要给 plugin 用

    -   babel-generator：根据 AST 生成代码

#### 功能包

-   babel-types：用于检验、构建和改变 AST 树的节点

-   babel-template：辅助函数，用于从字符串形式的代码来构建 AST 树节点 babel-helpers：一系列预制的 babel-template 函数，用于提供给一些 plugins 使用

-   babel-code-frames：用于生成错误信息，打印出错误点源代码帧以及指出出错位置

-   babel-plugin-xxx：babel 转译过程中使用到的插件，其中 babel-plugin-transform-xxx 是 transform 步骤使用的

-   babel-preset-xxx：transform 阶段使用到的一系列的 plugin

-   babel-polyfill：JS 标准新增的原生对象和 API 的 shim，实现上仅仅是 core-js 和 regenerator-runtime 两个包的封装

-   babel-runtime：功能类似 babel-polyfill，一般用于 library 或 plugin 中，因为它不会污染全局作用域

#### 工具包

-   babel-cli：babel 的命令行工具，通过命令行对 js 代码进行转译

-   babel-register：通过绑定 node.js 的 require 来自动转译 require 引用的 js 代码文件

### babel 工作原理

-   babel 是一个转译器,他可以将同种语言的高版本转换为同种语言的低版本代码,babel 的转译过程也分为三个阶段：parsing、transforming、generating，以 ES6 代码转译为 ES5 代码为例:

    -   ES6 代码输入

    -   babylon 进行解析得到 AST

    -   plugin 用 babel-traverse 对 AST 树进行遍历转译得到新的 AST 树

    -   用 babel-generator 通过 AST 树生成 ES5 代码

-   babel 只是转译新标准引入的语法，比如 ES6 的箭头函数转译成 ES5 的函数；而新标准引入的新的原生对象，部分原生对象新增的原型方法，新增的 API 等（如 Proxy、Set 等），这些 babel 是不会转译的。需要用户自行引入 polyfill 来解决

### babel 的插件的配置

-   光有 babel-core 是不行的,因为他必须使用很多其他的工具包进行 AST 的转换，所以必须使用.babelrc 配置

    -   env：指定在不同环境下使用的配置。比如 production 和 development 两个环境使用不同的配置，就可以通过这个字段来配置。env 字段的从 process.env.BABEL_ENV 获取，如果 BABEL_ENV 不存在，则从 process.env.NODE_ENV 获取，如果 NODE_ENV 还是不存在，则取默认值"development"

    -   plugins：插件应用于 babel 的转译过程，尤其是第二个阶段 transforming，如果这个阶段不使用任何插件，那么 babel 会原样输出代码，plugin 列表按从头到尾的顺序运行

    -   presets：如果要自行配置转译过程中使用的各类插件，那太痛苦了，所以 babel 官方帮我们做了一些预设的插件集，称之为 preset，这样我们只需要使用对应的 preset 就可以了，presets 列表的 preset 按从尾到头的逆序运行

### 参考文章

-   https://www.jianshu.com/p/e9b94b2d52e2
