/**

Crie um tipo para representar um objeto que contenha as suas informações de 
 nome, profissão, idade e uma lista de assuntos de seu interesse. **/
 
 interface pessoa {
    nome: string;
    profissao: string;
    idade: number;
    interesses: string[];
 }

 /**
Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 **/

const pes: pessoa = {
    nome: 'Camilly Victoria',
    profissao: 'Estudante',
    idade: 20,
    interesses: ['filmes', 'musica']
}
 
  /**
Faça uma função que receba como argumento um objeto do tipo do exercício 1,
e retorne somente a lista de assuntos do objeto.
 **/

type pessoaFuncao = (p : pessoa) => string[]

const interessesF: pessoaFuncao = (pes) => {
    return pes.interesses;
}
 
/**
crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 **/

enum materias {
    Angular = 'Angular',
    Typescript = 'Typescript',
    Git = 'Git'
}

  /**
Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 **/

interface professores {
    map(arg0: (prof: any) => any): string[];
    nome: string;
    materias: materias[]
}

  /**
Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
Nathan = Angular e Git, Alan = Angular, Typescript e Git
 **/
const Nathan: professores = {
    nome: 'Nathan',
    materias:
    [
        materias.Angular,
        materias.Git
    ]
}

const Alan: professores = {
    nome: 'Alan',
    materias: [
        materias.Angular,
        materias.Typescript,
        materias.Git
        ]
}
  /**
 Declare e popule um array com os objetos do exercício 7.
 **/

const arrayP: professores[] = [Nathan, Alan];

  /**
Faça uma função que receba um argumento de array de Professor 
e retorne um novo array de strings contendo somente os nomes dos professores.
}
 **/
type ProfessorFuncao = (Professores: professores) => string[]

const nomes: ProfessorFuncao = (arrayP) => {

    return arrayP.map((prof) => prof.nome)
}
  /**
Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 **/

type MateriaFuncao = (Professores: professores[]) => string[];

const materiasF: MateriaFuncao = (arrayP) => {
  const retorno: professores[] = [];
  arrayP.forEach((prof) =>
    prof.professores.forEach((materia) => retorno.push(materia))
  );
  return retorno;
};

  /**
11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 **/
 
type UmFuncao= (Professores: professores[]) => professores | undefined

const UmF: UmFuncao = (arrayP) => {
    const retorne: professores[] = [];
    arrayP.find((prof) =>
    prof.professores.find((materia) => materia == materias.Typescript
     );
  return retorno;
} 