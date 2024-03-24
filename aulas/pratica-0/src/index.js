let nome = "Thiago Miguel - 1637";
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "!");
}
saudacaoPersonalizada(nome);

let modulo = require('./module.js');
modulo.saudacao();