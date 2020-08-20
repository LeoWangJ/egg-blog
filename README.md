# blog

### Development
1. 執行專安前請先安裝依賴

```bash
$ npm i
```

2. 需要先開啟mysql & redis (請先安裝docker & docker-compose)

```bash
$ npm run docker-up
```
3. 打開專案

```bash
$ npm run dev
```

4. 執行migration(可選)
```bash
$ npm run db:mi
```
5. 添加假資料(可選)
```bash
$ npm run db:seed
```


## API

## 註冊

```json
POST {{host}}/register
```
#### reqeust
```json
  user_name: 'leowang'
  password: 'aa1111'
  nickname: 'leowang'
  picture: null
  city : '台中'
```

## 登入

```json
POST {{host}}/login
```
#### reqeust
```json
  user_name: 'leowang'
  password: 'aa1111'
```

## 測試token

```json
GET {{host}}/test
```

#### header 
```json
  Authorization: {{token}}
```


## 查看blog

```json
GET {{host}}/blog/list?user_id=X
```
#### query 
```
user_id (可選)

```

### response
```json
{
  "status": 0,
  "msg": null,
  "data": [
    {
      "id": 1,
      "user_id": 14,
      "title": "妳好",
      "content": "大家好",
      "updated_at": "2020-08-20T09:09:05.000Z",
      "created_at": "2020-08-20T09:09:05.000Z"
    },
  ]
}
```

## 新增blog

```json
POST {{host}}/blog/create
```

#### header 
```json
  Authorization: {{token}}
```

#### request
```json
{
    "title": "你好",
    "content":  "內容123123123"
}
```


## 更新blog

```json
POST {{host}}/blog/update
```

#### header 
```json
  Authorization: {{token}}
```

#### request
```json
{
    "id":9, //blog_id
    "title":"我有改變標題",
    "content":"我有改變內容"
}
```


