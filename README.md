# URL Shortener 縮址網
使用Node.js + Express 打造的縮址網站，簡單操作 輕鬆縮址

## 專案畫面
index:
![image](https://github.com/deamo771003/URLShortener/blob/master/index1.jpg)
show:
![image](https://github.com/deamo771003/URLShortener/blob/master/show1.jpg)

## Features 功能
1. 填入網址送出後，以不重複亂數產出縮址
2. 搭配mongoDB建立Data前check是否已有相關資訊，避免重複

## Environment SetUp 環境建置
1. Node.js
2. CSS
3. Handlebars

## Installing 安裝流程
1. Clone 此專案至本機電腦，打開你的 terminal  
```
git clone https://github.com/deamo771003/URLShortener.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾  
```
cd URLShortener
```

3. 安裝 npm 套件
```
npm init -y
```

4. 安裝 nodemon 套件並設定
```
npm install -g nodemon
```

5. 安裝 express 套件並設定
```
npm i express
```

6. 安裝 express-handlebars 套件並設定
```
npm i express-handlebars@3.0.2
```

7. 安裝 handlebars 套件並設定
```
npm i express handlebars
```

8. 安裝 mongoose 套件並設定
```
npm i express mongoose
```

8. MONGODB資料庫
```
// 建立MONGODB資料庫，新增.env檔案並輸入以下代碼載入路徑
MONGODB_URI=<MONGODB資料庫路徑>
```

9. 啟動伺服器，執行 app.js 檔案  
```
npm run dev
```

10. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結  
```
Express is listening on localhost:3000
```

11. 現在，你可開啟任一瀏覽器瀏覽器輸入以下網址開始使用我的餐廳清單囉！  
```
http://localhost:3500
```

## Contributor 開發人員
[JimmyLin](https://github.com/deamo771003)
