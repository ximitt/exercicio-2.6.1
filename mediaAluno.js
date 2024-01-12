const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    }
  ]
  
  alunos.forEach(aluno => {
    let somaNotas = 0;
    aluno.notas.forEach(nota => {
      somaNotas += nota.nota;
    });
    aluno.mediaGeral = somaNotas / aluno.notas.length;
  });
  
  console.log(alunos);
