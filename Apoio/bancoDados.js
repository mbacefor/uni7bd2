var bancoDados = new Map();

bancoDados.set("A", 10);
bancoDados.set("B", 20);
bancoDados.set("C", 30);
bancoDados.set("D", 40);

//for (var chave of bancoDados.keys()) { console.log(chave);}

//for (var valor of bancoDados.values()) { console.log(valor); }

for (var entrada of bancoDados.entries()) {
    console.log(entrada); // um dois três
}

function read(chave) { let valor = bancoDados.get(chave); console.log(valor); return valor; }

function write(chave, valor) { bancoDados.set(chave, valor); }

export { read, write};