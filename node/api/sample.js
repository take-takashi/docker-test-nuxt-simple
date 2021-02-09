export default function (req, res) {
    // req は Node.js の HTTPリクエストオブジェクトです
    console.log(req.url)
   
    // res は Node.js の HTTPレスポンスオブジェクトです
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain' });
    res.write('SAMPLEs');
    res.end();
   
    // next は 次のミドルウェアを呼び出すための関数です。
    // あなたのミドルウェアが最後でない場合、関数の最後で next を呼び出すのを忘れないでください！
    // next();
  }