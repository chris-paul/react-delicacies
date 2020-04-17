export const isString = str => {
    if (Object.prototype.toString.call(str) === '[object String]') return true;
    return false;
};

export const isDate = date => {
    if (Object.prototype.toString.call(date) === '[object Date]') return true;
    return false;
};

export const isUndefined = val => {
    if (Object.prototype.toString.call(val) === '[object Undefined]') return true;
    return false;
};

export const isNull = val => {
    if (Object.prototype.toString.call(val) === '[object Null]') return true;
    return false;
};

export const isNumber = num => {
    if (Object.prototype.toString.call(num) === '[object Number]') return true;
    return false;
};

export const isObject = obj => {
    if (Object.prototype.toString.call(obj) === '[object Object]') return true;
    return false;
};

export const isArray = ary => {
    if (Object.prototype.toString.call(ary) === '[object Array]') return true;
    return false;
};

export const isBoolean = obj => {
    if (Object.prototype.toString.call(obj) === '[object Boolean]') return true;
    return false;
};

export const isFunction = fn => {
    if (
        Object.prototype.toString.call(fn) === '[object Function]' ||
        Object.prototype.toString.call(fn) === '[object AsyncFunction]'
    )
        return true;
    return false;
};

/**
 * @description: 获取数据类型，返回结果为 Number、String、Object、Array等
 * @param {type}
 * @return:
 */
export const getRawType = value => {
    return Object.prototype.toString.call(value).slice(8, -1);
};

/**
 *
 * 检查 value 是否为有效的类数组长度
 * @static
 * @author lhk
 * @returns
 * @memberof ToolLib
 */
export const isLength = value => {
    return (
        typeof value === 'number' &&
        value > -1 &&
        value % 1 === 0 &&
        value <= Number.MAX_SAFE_INTEGER
    );
};

/**
 * @description:  查看数组是不是类数组
 * @param {type}
 * @return:
 */
export const isArrayLike = value => {
    return value != null && isLength(value.length) && !isFunction(value);
};

/**
 * @description: 检查value是否为空
 * @param {type}
 * @return:
 */
export const isEmpty = value => {
    if (this.isString(value)) {
        /* 去掉空格 */
        const replaceStr = value.replace(/(^\s*)|(\s*$)/g, '');
        if (
            replaceStr === '' ||
            replaceStr === null ||
            replaceStr === 'null' ||
            replaceStr === undefined ||
            replaceStr === 'undefined'
        ) {
            return true;
        }
        return false;
    }
    if (this.isNumber(value)) {
        return this.isNaN(value);
    }
    if (this.isBoolean(value)) {
        return false;
    }
    if (this.isUndefined(value) || this.isNull(value)) {
        return true;
    }
    if (this.isArrayLike(value)) {
        return !value.length;
    }
    if (this.isObject(value)) {
        return Object.keys(value).length === 0;
    }
    return false;
};

/**
 * @description: action命名空间
 * @param {type}
 * @return:
 */
export const nameSpace = name => v => `${name}_${v}`;
