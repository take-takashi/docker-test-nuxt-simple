export default function (req, res) {
  const fs = require('fs')
  const path = './api' + req.url + '.json'
  let data = ''

  if (fs.existsSync(path)) {
    data = fs.readFileSync(path, 'utf-8')
  }

  res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
  res.write(data);
  res.end();
}