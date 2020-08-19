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

### 測試token

```json
GET {{host}}/test
```

#### header 
```json
  Authorization: {{token}}
```

