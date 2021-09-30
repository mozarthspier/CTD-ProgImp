let alunos = require('./alunos');

let curso = {
    
    nomeDoCurso: 'CTD - Digital House',
    notaDeAprovacao: 8,
    faltasMaximas: 5,
    listaEstudantes: alunos.listaDeAlunos,
    
    alunoExtra: function(nome, quantidadeFaltas, notas) {
        novoAluno = new alunos.Aluno(nome, quantidadeFaltas, notas);
        this.listaEstudantes.push(novoAluno);
    },

    // Função recebe como argumento um objeto Aluno ou o nome do aluno
    aprovacao: function(aluno) {
        
        if (typeof aluno === "string") {
            aluno = this.listaEstudantes.find(alunoLista => alunoLista.nome === aluno);

            if (aluno === undefined) {
                return ('Aluno não encontrado');
            }
        }

        return (aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeFaltas < this.faltasMaximas) || 
        (aluno.quantidadeFaltas === this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao * 1.1);
 
    },

    alunosAprovados: function() {
        return this.listaEstudantes.map(aluno => this.aprovacao(aluno));
    }
}

curso.alunoExtra("Zacarias", 4, [7, 8, 9]);
console.log(curso.alunosAprovados());