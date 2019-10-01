console.log('hola typescript');
// Boolean
let muted: boolean = true;

// Numbers
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// string
let nombre: string = 'alfonso';
let saludo = `Hola ${nombre}`;


// arreglos / array
let people: string[] = [];
people = ['alfonso', "alfonso2"];
people.push('3');
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Alfonso');
peopleAndNumbers.push(123);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul;
console.log(`Color favorito ${colorFavorito}`);

// Any
let comodin: any = 'asd';
comodin = 4;


// Object
let someObject: object = {type: 'wildcard'};


// Funciones
function add(a:number, b:number): number {
  return a+b;
}
const sum = add(2, 3);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a+b;
  }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);


function fullName(firstName: string, lastName?: string) {
  return `${firstName} ${lastName}`;
}

function fullNameWithDefault(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const alfonso = fullName('Alfonso');

// Interfaces
interface Rectangulo {
  height: number,
  width: number,
  color?: Color
}

const rect: Rectangulo = {
  height: 4,
  width: 6,
  color: Color.Azul
}

function calculaArea(r: Rectangulo) {
  return r.height * r.width;
}

const areaRect = calculaArea(rect);

console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());
