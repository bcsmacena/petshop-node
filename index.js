const http = require('http');
const url = require('url');
const petshop = require('./petshop');


let server = http.createServer((req,res) => {
    
    let urlCompleta = url.parse(req.url, true)

    let httpCode200 = res.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});
    let httpCode401 = res.writeHead(401, {"Content-type":"text/plain; charset=utf-8"});
    let httpCode404 = res.writeHead(404, {"Content-type":"text/plain; charset=utf-8"});

    switch(urlCompleta.pathname){
        case "/":
            httpCode200;
            res.write("Você está na página inicial");
            break;
        case "/home":
            httpCode200;
            res.write("Você está na página do Petshop")
            break;
        case "/pet/adicionar":
            if(petshop.adicionarPet(urlCompleta.query.nome)){
                httpCode200;
                res.write("O pet " + urlCompleta.query.nome + " foi cadastrado com sucesso");
            } else {
                httpCode401;
                res.write("Ops! Erro ao cadastrar o Pet!");
            }
            break;
        default:
            httpCode404;
            res.write("Página não encontrada");
            break;
    }

    res.end();
})

server.listen(3000, 'localhost');