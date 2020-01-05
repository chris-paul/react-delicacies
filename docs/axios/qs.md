### 下载

```javascript
npm install qs --save
```

### qs.parse()将 URL 解析成对象的形式

```javascript
import { parse } from 'qs';
let url =
    'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
console.log(parse(url));
```

### qs.stringify()将对象 序列化成 URL 的形式，以&进行拼接

```javascript
import { stringify } from 'qs';
let obj = {
    method: 'query_sql_dataset_data',
    projectId: '85',
    appToken: '7d22e38e-5717-11e7-907b-a6006ad3dba0',
    datasetId: ' 12564701',
};
console.log(stringify(obj));
```

### 如果需要传递

```javascript
import qs from 'qs';
/* 默认给出明确的索引 'a[0]=b&a[1]=c&a[2]=d' */
qs.stringify({ a: ['b', 'c', 'd'] });
/* 设置没有索引 'a=b&a=c&a=d' */
qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false });
/* arrayFormat a[0]=b&a[1]=c' */
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' });
/* arrayFormat 'a[]=b&a[]=c' */
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' });
/* arrayFormat 'a=b&a=c' */
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' });
```

### 区别 JSON.stringify

```javascript
/* JSON.stringify */
{"uid":"cs11","pwd":"000000als","username":"cs11","password":"000000als"}
/* stringify */
uid=cs11&pwd=000000als&username=cs11&password=000000als
```
