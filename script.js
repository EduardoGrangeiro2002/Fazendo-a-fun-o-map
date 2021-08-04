function novoAluno(nome, idade){
  return {nome, idade}
}

let Turma = [
  novoAluno("Jose", 19),
  novoAluno("Marcos", 19),
  novoAluno("Heitor", 18),
  novoAluno("Clecio",19)
]

 
let mapa = (callback, transform)=>{

   let Alunosmapeados = [];

   for(let i = 0; i < callback.length; i++)
    
    Alunosmapeados.push(transform(callback[i]))
  return Alunosmapeados;
}
function nomeEidade(aluno){
  return aluno.nome + " tem " + aluno.idade + " anos";
}
console.log(mapa(Turma, nomeEidade));


