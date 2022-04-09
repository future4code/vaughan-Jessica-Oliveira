//Exercício 3

const listaDeTarefas = ["Varrer a casa", "Lavar louça", "Comprar banana"];

const novaTarefa = process.argv[2];

const novaListaDeTarefas = listaDeTarefas.push(novaTarefa);

console.table(novaListaDeTarefas);
