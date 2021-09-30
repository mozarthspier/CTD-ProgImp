let alunos = {
     Aluno: function (_nome,_quantidadeFaltas,_notas){//comando que cria um método
        
        this.nome = _nome;
        this.quantidadeFaltas = _quantidadeFaltas;
        this.notas = _notas;

        this.calcularMedia = function() {
            
            let somaNotas = this.notas.reduce((acum, value) => {
                return acum + value;
            });           
            
            return somaNotas/this.notas.length
        }

        this.faltas = function() {
            this.quantidadeFaltas++;
        }    
    }
}

let aluno1 = new alunos.Aluno('Alberto', 5, [8.8, 8.8, 8.7])
let aluno2 = new alunos.Aluno('Jorge', 4, [7.7, 10.0, 8.0])
let aluno3 = new alunos.Aluno('Amanda', 9, [5.9, 9.7, 10])
let aluno4 = new alunos.Aluno('Juliana', 3, [4.9, 10.0, 10.0])

alunos.listaDeAlunos = [aluno1, aluno2, aluno3, aluno4]

module.exports = alunos



