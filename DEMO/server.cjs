const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
  let target;
  try { target = path.resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname)); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if(target===root) target=path.join(root,'index.html');
  if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
  fs.readFile(target,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('KooKid demo: http://127.0.0.1:4173'));
