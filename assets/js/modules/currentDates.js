// function minhaIdade() {
//   let data = new Date()
//   let ano = data.getFullYear()
//   let nascimento = 2001;
//   let idade = ano - nascimento
//   document.getElementById('anos').innerHTML = idade
// }
// minhaIdade()

function verificarIdade(mesAtual, mesNasc, idade, diaNasc){
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    return --idade
  } 
  //Se estiver no mes do nascimento, verificar o dia
  if (mesAtual === mesNasc) {
    if (new Date().getDate() < diaNasc) {
      //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
      return --idade
    }
  }
}

export function currentAge(dataNasc) {
  // Pegando uma data nova
  let dataAtual = new Date()
  // Pegando o ano atual
  let anoAtual = dataAtual.getFullYear()
  // Pegando a data de nascimento e criando um vetor de tres indices(dia, mes e ano)
  let anoNascParts = dataNasc.split('/')
  // Capturando a data de nascimento em cada variavel
  let diaNasc = anoNascParts[0]
  let mesNasc = anoNascParts[1]
  let anoNasc = anoNascParts[2]
  // Idade da pessoa
  let idade = anoAtual - anoNasc
  // A gente pega o mes + 1 porque o date pega mes anterior ao atual
  let mesAtual = dataAtual.getMonth() + 1
  const idadeAtual = verificarIdade(mesAtual, mesNasc, idade, diaNasc)
  document.getElementById('anos').innerHTML = idadeAtual;
}

export function currentYear() {
  let data = new Date()
  document.getElementById('anoAtual').innerHTML = data.getFullYear()
}
