console.log("Ano novo está chegando!!")

let cantora = "Mariah Carey"
let idade = 54
let anoAtual = 2023
let anoNascimento = 2023 - 54
console.log(`A cantora Mariah Carey, nascida em ${anoNascimento}, no ano atual ${anoAtual}, está com ${idade} anos de idade.`)

let quartaFeira = true
console.log(`A variável 'quartaFeira' é do tipo ${typeof quartaFeira}, ou seja é ${quartaFeira}. Então o dia do show é HOJE!!!`)

let age = 18

if(age >= 18) 
{
    console.log(`Você tem ${age} e é maior de idade, então poderá curtir o show do Roberto Carlos com participação especial da Mariah Carey.`)
}else if( age < 18)
{
    console.log(`Você tem ${age}, é menor de idade então, sinto muito, mas assistirá da tv globo`)
}

let mes = "Agost"
if(mes === "Agosto" || mes === "Dezembro" || mes === "Junho") 
{
    console.log(`Uma ou mais opções estão corretas, o seu mês de nascimento é ${mes}.`)
}else
{
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${mes}.`)
}
