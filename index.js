// Classificador de Nível de Herói

var nomeHeroi = "Kratos"
var pontosXP = 6550

if (pontosXP <= 1000) {
    console.log(`O herói ${nomeHeroi} está no nivel Ferro`)
} else if (pontosXP >= 1001 && pontosXP <= 2000) {
    console.log(`O herói ${nomeHeroi} está no nivel Bronze`)
} else if (pontosXP >= 2001 && pontosXP <= 5000) {
    console.log(`O herói ${nomeHeroi} está no nivel Prata`)
} else if (pontosXP >= 6001 && pontosXP <= 7000) {
    console.log(`O herói ${nomeHeroi} está no nivel Ouro`)
} else if (pontosXP >= 7001 && pontosXP <= 8000) {
    console.log(`O herói ${nomeHeroi} está no nivel Platina`)
} else if (pontosXP >= 8001 && pontosXP <= 9000) {
    console.log(`O herói ${nomeHeroi} está no nivel Ascendente`)
} else if (pontosXP >= 9001 && pontosXP <= 10000) {
    console.log(`O herói ${nomeHeroi} está no nivel Imortal`)
} else if(pontosXP >= 10001){
    console.log(`O herói ${nomeHeroi} está no nivel Radiante`)
}