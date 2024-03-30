let nome_usurário = "";
let elemento = document.querySelector("#nome-usuário");

while(nome_usurário == ""){
    nome_usurário = prompt("Qual o seu nome?");
}

if(nome_usurário == null){
    elemento.textContent = "seja muito bem-vindo!"
}else{
    elemento.textContent = nome_usurário;
}

