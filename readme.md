# 初期設定
```
# docker-compose run --rm node /bin/bash
# npm init nuxt-app

create-nuxt-app v3.5.2
✨  Generating Nuxt.js project in .
? Project name: app
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Vuetify.js
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/JAMStack hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? What is your GitHub username? 
? Version control system: None

# exit
```

# 初期設定（２）
```
nuxt.config.jsの最後の設定項目の後（buildとか）に以下を追加する。
これを追加しないとlocalhost:3000でデバッグできない。

// For localhost debug
  server: {
    host: '0.0.0.0',
  }
```

# 起動方法
```
# docker-compose up -d
# docker-compose exec node bash
```

# 終了方法
```
# docker-compose down
```

## dev起動方法
```
# docker-compose up -d
# docker-compose exec node bash
# npm run dev
```

## auth0を使う
```
# npm install @nuxtjs/auth
# npm install nanoid@2.1.11

※nanoid@2.1.11はバグ潰しため

nuxt.config.jsを編集
modulesに'@nuxtjs/auth'を追加

$auth.getToken('auth0') でtokenを取得できる

```

## server(apiのテスト用)の設定
```
# docker-compose run --rm server /bin/bash
# npm init
# npm install express express-jwt express-jwt-authz jwks-rsa cors dotenv
# npm install --save-dev nodemon
```

## Nuxtで擬似APIの設定（上記の別にExpressを立てた方が良いかも）
```
// nuxt.config.js
// For api
serverMiddleware: [
  { path: '/api/sample', handler: '~/api/sample.js' },
],
```

## メモ
```
・keep-aliveの影響下では、mountedではなく、activatedを使うとページ遷移時に発動する関数が利用できる
・Middlewareはページ表示時に実行することができる（認証に使える）
・設定は全てstoreにて管理する
・nuxt.config.jsでVuetifyのテーマ設定しないとデフォルトでdarkテーマになっている
・componentsはパスカルケース命名規則で作成すること
　そうすると自動で読み込まれるし、VSCODEでも綺麗に表示される
・componentsで「v-bind="$attrs"」,「v-on="$listeners"」を指定するとpropやeventを継承できる！ラッパーComponentに便利
・loginとかcallbackとかはデフォルトレイアウトを使わないページにする
```

## TODO
```
・Auth0が繋がったので、不要な設定やapp、apiを削除していきたい
・ページ遷移時にタブのアクティブ制御したい
・APIからページ構造化データを取得する（実際は辞書くらいしかできなそう）
・Auth0のScopeを調べたい
・mongoDB面白そう（Docker）便利なのだが・・・
・ValidationがDBと同期できれば
・auth0のログイン時、「Default app」が許可を求めてくるので、ちゃんとしたアプリ名にする必要がありそう
・ログイン前に発生する「GET https://kaerunrun.jp.auth0.com/userinfo 401」エラーをなんとかしたい
・console.logのワーニングを消したい
```

### 完了済みTODO
```
・試しにAPI作ってみるか？？？（ServerMiddlewareでできた）
・Keep-aliveの制御をうまくしたい
・全API通信時にAuthenticationヘッダーを入れるべきか　⇨　api通信時は$axiosインスタンスから$apiを新規作成して利用するようにした
```