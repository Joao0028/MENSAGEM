var agora = new Date()
var hora = agora.getHours()
var mensagem = document.querySelector(".mensagem")

var dia = document.querySelector(".dia")
var tarde = document.querySelector(".tarde")
var noite = document.querySelector(".noite")

if(hora >= 6 && hora < 12){
    mensagem.innerHTML = `Agora são ${hora} horas, bom dia!`
    dia.style.display = "block"
    noite.style.display = "none"
    tarde.style.display = "none"
}else if(hora >= 12 && hora < 18){
    mensagem.innerHTML = `Agora são ${hora} horas, boa tarde!`
    dia.style.display = "none"
    noite.style.display = "none"
    tarde.style.display = "block"
}else if(hora >= 6 && hora < 24){
    mensagem.innerHTML = `Agora são ${hora} horas, boa tarde!`
    dia.style.display = "none"
    tarde.style.display = "none"
    noite.style.display = "block"
}else{
    mensagem.innerHTML = `Agora são ${hora} horas, vai dormir!`
    dia.style.display = "none"
    tarde.style.display = "none"
    noite.style.display = "block"
}