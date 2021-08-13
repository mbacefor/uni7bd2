var fs = require('fs');
var data = fs.readFileSync('/home/70459568353/workspaces/github/uni7bd2/Apoio/database.json', 'utf8');
var jsonBD=JSON.parse(data);
//var bodyparser=require('body-parser');
var bancoDados = new Map();

bancoDados.set("A", 10);
bancoDados.set("B", 20);
bancoDados.set("C", 30);
bancoDados.set("D", 40);

//Exibe todos os valores
function exidadosBD() {
    console.log(jsonBD.banco);
}

function read(chave) { let valor = jsonBD.get(chave); console.log(valor); return valor; }
console.log(read("A"));

function write(chave, valor) { bancoDados.set(chave, valor); 
    fs.writeFile('/home/70459568353/workspaces/github/uni7bd2/Apoio/database.json', JSON.stringify(jsonBD), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });}

module.exports =
{
    Read: read,
    Write: write,
    ExibeBD: exidadosBD
}  