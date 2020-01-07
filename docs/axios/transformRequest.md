### transformRequest 在向服务器发送前，修改请求数据

```javascript

+ transformRequest允许在向服务器发送前，修改请求数据只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
let http = axios.create({
    transformRequest: [function (data) {
      data.sex = 'man';
      /* 在这里自动设置了POST的请求头 application/x-www-form-urlencoded */
      return qs.stringify(data)
    }],
    headers: {'content-type': 'application/x-www-form-urlencoded'},
});
/* 因此network中查看的结果是：name=xiaoming&age=12&sex=man */
http.post('bb', {
    'name': 'xiaoming',
    'age': 12
})
```