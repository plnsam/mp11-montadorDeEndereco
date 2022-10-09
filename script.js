// Forma utilizando o loop "FOR...IN"

  const endereco = {
  cidade: 'Recife',
  rua: 'Centro',
  cep: 12345-678
};

function exibirEndereco(endereco){
  for(let chave in endereco){
    console.log(chave,endereco[chave])
  }
}
console.log(endereco)

// Forma utilizando CONSTRUCTOR FUNCTION

// function endereco(cidade, rua, CEP){
//   this.cidade = cidade;
  // this.rua = rua;
  // this.CEP = CEP
// }
// 
// const exibirEndereco = new endereco('Recife', 'Centro', '12345-678')
// console.log(exibirEndereco)
