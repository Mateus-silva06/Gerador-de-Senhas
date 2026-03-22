let slide = document.getElementById("slider")
let botao = document.getElementById("botao")

let sizesenha = document.getElementById("valor")
let senha = document.getElementById("senha")

let container_senha = document.getElementById("container-senha")

let  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*/.@$%&!"
let senhanova = ""

sizesenha.innerHTML = slide.value;

slide.oninput = function(){
    sizesenha.innerHTML = this.value;
};

function geradorsenha(){
    let pass = "";

    for (let i = 0; i < slide.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    container_senha.classList.remove("hide");
    senha.innerHTML = pass;
    senhanova = pass;  
}

function copiasenha(){
    alert("Senha copiada!");
    navigator.clipboard.writeText(senhanova);
}