### babel常见的工具包

#### 核心包

  + babel-core：把 js 代码分析成 ast (抽象语法树, 是源代码的抽象语法结构的树状表现形式)，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 ast，再通过语法转换器分析其语法后转为低版本js

    + babylon：js的词法解析器

    + babel-traverse：用于对AST（抽象语法树，想了解的请自行查询编译原理）的遍历，主要给plugin用

    + babel-generator：根据AST生成代码

#### 功能包

  + babel-types：用于检验、构建和改变AST树的节点

  + babel-template：辅助函数，用于从字符串形式的代码来构建AST树节点
  babel-helpers：一系列预制的babel-template函数，用于提供给一些plugins使用

  + babel-code-frames：用于生成错误信息，打印出错误点源代码帧以及指出出错位置

  + babel-plugin-xxx：babel转译过程中使用到的插件，其中babel-plugin-transform-xxx是transform步骤使用的

  + babel-preset-xxx：transform阶段使用到的一系列的plugin

  + babel-polyfill：JS标准新增的原生对象和API的shim，实现上仅仅是core-js和regenerator-runtime两个包的封装

  + babel-runtime：功能类似babel-polyfill，一般用于library或plugin中，因为它不会污染全局作用域

#### 工具包

+ babel-cli：babel的命令行工具，通过命令行对js代码进行转译

+ babel-register：通过绑定node.js的require来自动转译require引用的js代码文件

### babel工作原理

+ babel是一个转译器,他可以将同种语言的高版本转换为同种语言的低版本代码,babel的转译过程也分为三个阶段：parsing、transforming、generating，以ES6代码转译为ES5代码为例:

  + ES6代码输入

  + babylon进行解析得到AST

  + plugin用babel-traverse对AST树进行遍历转译得到新的AST树

  + 用babel-generator通过AST树生成ES5代码

+ babel只是转译新标准引入的语法，比如ES6的箭头函数转译成ES5的函数；而新标准引入的新的原生对象，部分原生对象新增的原型方法，新增的API等（如Proxy、Set等），这些babel是不会转译的。需要用户自行引入polyfill来解决

### babel的插件的配置

+ 光有babel-core是不行的,因为他必须使用很多其他的工具包进行AST的转换，所以必须使用.babelrc配置

  + env：指定在不同环境下使用的配置。比如production和development两个环境使用不同的配置，就可以通过这个字段来配置。env字段的从process.env.BABEL_ENV获取，如果BABEL_ENV不存在，则从process.env.NODE_ENV获取，如果NODE_ENV还是不存在，则取默认值"development"

  + plugins：插件应用于babel的转译过程，尤其是第二个阶段transforming，如果这个阶段不使用任何插件，那么babel会原样输出代码，plugin列表按从头到尾的顺序运行

  + presets：如果要自行配置转译过程中使用的各类插件，那太痛苦了，所以babel官方帮我们做了一些预设的插件集，称之为preset，这样我们只需要使用对应的preset就可以了，presets列表的preset按从尾到头的逆序运行

### 参考文章

+ https://www.jianshu.com/p/e9b94b2d52e2
