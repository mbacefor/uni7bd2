
var fs = require('fs');
var data = fs.readFileSync('database.json', 'utf8');
var jsonBD = JSON.parse(data);
var bancoDados = new Map();

bancoDados.set("A", jsonBD.A);
bancoDados.set("B", jsonBD.B);
bancoDados.set("C", jsonBD.C);
bancoDados.set("D", jsonBD.D);



//for (var chave of bancoDados.keys()) { console.log(chave);}

//for (var valor of bancoDados.values()) { console.log(valor); }
//Exibe todos os valores
function exidadosBD() {
    for (var entrada of bancoDados.entries()) {
        console.log(entrada); // um dois três
    }
}

function read(chave) { let valor = bancoDados.get(chave); console.log(valor); return valor; }

function write(chave, valor) {
    bancoDados.set(chave, valor);
    switch (chave ){
        case "A" : jsonBD.A = valor;
        break;
        case "B" : jsonBD.B = valor;
        break;
        case "C" : jsonBD.C = valor;
        break;
        case "D" : jsonBD.D = valor;
        break;
    }
    
    fs.writeFile('database.json', JSON.stringify(jsonBD), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

module.exports =
{
    Read: read,
    Write: write,
    ExibeBD: exidadosBD
}  