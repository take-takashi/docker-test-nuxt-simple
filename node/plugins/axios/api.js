/*
$authの代わりに$apiを提供するプラグイン
nuxt.config.jsに以下の設定を行う。
auth: {
  plugins: [
    '~/plugins/axios/api' // ここは本プラグインを配置したパスを指定
  ]
}

通常の$axiosに常にAuthorizationヘッダーを付与することもできるが、
常に付けてしまうと他サイトへのアクセスに影響が出ると思ったので$apiとして新しく用意した。

*/
export default function ({ $axios, store }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  // リクエスト時に自動で$authからAuthorizationヘッダーを付与する
  api.onRequest((config) => {
    config.headers.Authorization = store.$auth.getToken('auth0')
    return config
  })

  // Set baseURL to something different
  //api.setBaseURL('https://my_api.com')

  // Inject to context as $api
  inject('api', api)
}