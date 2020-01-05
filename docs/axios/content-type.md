### Http 请求中的 Content-Type

-   Accept 代表发送端（客户端）希望接受的数据类型比如：Accept：text/xml; 代表客户端希望接受的数据类型是 xml 类型

*   Content-Type 代表发送端（客户端|服务器）发送的实体数据的数据类型。比如：Content-Type：text/html; 代表发送端发送的数据格式是 html

-   二者合起来， Accept:text/xml； Content-Type:text/html 即代表希望接受的数据类型是 xml 格式，本次请求发送的数据的数据格式是 html

### content-type 类型

-   常见的媒体格式类型如下

```javascript
text/html ： HTML格式
text/plain ：纯文本格式
text/xml ：  XML格式
image/gif ：gif图片格式
image/jpeg ：jpg图片格式
image/png：png图片格式
```

-   以 application 开头的媒体格式类型

```javascript
application/xhtml+xml ：XHTML格式
application/xml     ： XML数据格式
application/atom+xml  ：Atom XML聚合格式
application/json    ： JSON数据格式
application/pdf       ：pdf格式
application/msword  ： Word文档格式
application/octet-stream ： 二进制流数据（如常见的文件下载）
application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
```

-   以 audio 开头的常见媒体格式文件

````javascript
'audio/x-wav' : wav文件
'audio/x-ms-wma' : wma 文件
'audio/mp3' : mp3文件
```
-  以video开头的常见媒体格式文件

```javascript
'video/x-ms-wmv' : wmv文件
'video/mpeg4' : mp4文件
'video/avi' : avi文件
````

-   另外一种常见的媒体格式是上传文件之时使用的

```javascript
multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式
```

### application/x-www-form-urlencoded

-   这应该是最常见的 POST 提交数据的方式了。浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据

```javascript
/* 提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码 */
POST http://www.example.com HTTP/1.1
Content-Type: application/x-www-form-urlencoded;charset=utf-8
title=test&sub%5B%5D=1&sub%5B%5D=2&sub%5B%5D=3
```

### multipart/form-data

-   首先生成了一个 boundary 用于分割不同的字段,消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 –boundary 开始，紧接着内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 –boundary– 标示结束。

```javascript
<form action="url" enctype="multipart/form-data" method="post"></form>

POST http://www.example.com HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="text"
title
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png
PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--

```

### application/json

-   Google 的 AngularJS 中的 Ajax 功能，默认就是提交 JSON 字符串

```javascript
var data = {'title':'test', 'sub' : [1,2,3]};
$http.post(url, data).success(function(result) {
    ...
});

POST http://www.example.com HTTP/1.1
Content-Type: application/json;charset=utf-8
{"title":"test","sub":[1,2,3]}
```

### text/xml

-   它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范。典型的 XML-RPC 请求是这样的

```javascript
POST http://www.example.com HTTP/1.1
Content-Type: text/xml
<?xml version="1.0"?>
<methodCall>

<methodName>examples.getStateName</methodName>
<params>
    <param>
        <value><i4>41</i4></value>
    </param>
</params>
</methodCall>
```

### axios 中的 content-type

-   get 请求不存在设置 content-type。只有 post 和 put 用到 content-type，常用的 post 方式，所以这里着重说 postpost 的 content-type 三种类型

    -   Content-Type: application/json

        对于 axios，post 的时候 axios.post(url,{a:1,b:2})，第二个参数是对象的时候，默认是这个类型

    -   Content-Type: application/x-www-form-urlencoded

        对于 axios，post 的时候 let data = {a:1,b:2}; axios.post(url,qs.stringify({ data }))，第二个参数是字符串的时候，默认是这个类型

    -   Content-Type: multipart/form-data

        对于 axios，post 的时候 let data = new FormData(); data.append('a',1'); data.append('b',2); axios.post(url,data)，参数是 formData 类型的时候，默认是这个类型，如果用 form 自带的 action 提交，默认是这个类型

*   content-type 会根据参数的类型会自动有对应的值我想传对象，但实际服务器需要的的是 application/x-www-form-urlencoded，此时需要只需要统一设置请求前将参数变成字符串即可 transformRequest: [ function (data) { return Qs.stringify(data) } ]

### 参考文章

-   https://juejin.im/post/5d64f919f265da0390053da4
