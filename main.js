let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Digite seu nome por favor!");
}

if(nomeUsuário == null){
    elemento.textContent = 'xxxxxx ';
}else{
    elemento.textContent = nomeUsuário;
}