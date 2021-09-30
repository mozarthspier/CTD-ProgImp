let alunos = require('./alunos')

let curso = {
    
    nomeDoCurso: 'CTD - Digital House',
    notaDeAprovacao: 8,
    faltasMaximas: 5,
    listaEstudantes: alunos.listaDeAlunos,
    
    alunoExtra: function(nome, quantidadeFaltas, notas) {
        novoAluno = new alunos.Aluno(nome, quantidadeFaltas, notas);
        this.listaEstudantes.push(novoAluno);
    },

    aprovacao: function(nomeAluno) {

        let aluno = this.listaEstudantes.find(aluno => aluno.nome === nomeAluno);

        if (aluno === undefined) {
            return ('Aluno não encontrado')
        }

        return (aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeFaltas < this.faltasMaximas) || 
        (aluno.quantidadeFaltas === this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao * 1.1);
 
    },

    alunosAprovados: function() {
        return this.listaEstudantes.map(aluno => this.aprovacao(aluno.nome))
    }
}

curso.alunoExtra("Zacarias", 4, [7, 8, 9])
console.log(curso.alunosAprovados())