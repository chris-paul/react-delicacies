
/*
* 对css文件做特殊处理,根绝文档所写如果moduleNameMapper
* 已经无法满足需求 那么使用transform进行自定义的转义 这里处理css文件
* 前端的测试没必要对css做解析所以这里对css进行处理用来忽略css
*/
module.exports = {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
        // The output is always the same.
        return 'cssTransform';
    },
};
