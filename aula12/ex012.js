var agora = new Date()
var hora_atual = agora.getHours()

console.log(`Agora são exatamente ${hora_atual} horas.`)

if(hora_atual < 12){
    console.log("Bom dia!")
}
else if(hora <= 18){
    console.log("Boa tarde!")
}
else{
    console.log("Boa noite!")
}