let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Digite seu nome por favor!");
}

if(nomeUsuário == null){
    elemento.textContent = 'Seja Muito Bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}