// ============================================
// VARIABLES — EJERCICIOS
// ============================================
//
// Objetivo:
// Practicar la declaración, asignación y
// modificación de variables utilizando
// let y const.
//
// No utilizar:
// - if / else
// - ciclos
// - funciones
// - arrays
// - objetos
//
// Utilizar únicamente los conceptos estudiados.
// ============================================
// Ejercicio 1 - Datos personales

console.log('Ejercicio 1 - Datos personales')

let p1Name = 'Daniel'
let p1Age = 22
let p1City = 'Los Mochis'
let p1Grade = 'Ingenieria de software'
let p1IsStudent = true

console.log('Nombre: ', p1Name)
console.log('Edad: ', p1Age)
console.log('Ciudad: ', p1City)
console.log('Carrera: ', p1Grade)
console.log('Vigencia como estudiante: ', p1IsStudent)

// Ejercicio 2 - Cambiando una variable

console.log('Ejercicio 2 - Cambiando una variable')

console.log('Mi edad es: ', p1Age)
    p1Age += 1 
console.log('Mi edad en un año será: ', p1Age)

// Ejercicio 3 - Declaración de constantes

console.log('Ejercicio 3 - Declaración de constantes')

const PI = 3.14159
const WEEK_DAYS = 7
const YEAR_MONTHS = 12

console.log('PI es igual a : ', PI)
console.log('Hay ', WEEK_DAYS, ' dias en una semana')
console.log('Hay ', YEAR_MONTHS, ' meses en el año')

// Ejercicio 4 — Información de un producto

console.log('Ejercicio 4 — Información de un producto')

let prod = 'Teclado'
let prodPrice = 850
let prodAmount = 12
let prodIsDisp = true

console.log('Producto: ', prod)
console.log('Precio: ', prodPrice)
console.log('Cantidad: ', prodAmount)
console.log('Disponible: ', prodIsDisp)

// Ejercicio 5 — Modificando información

console.log('Ejercicio 5 — Modificando información')
let p2Name = 'Jose'
let p2Age = 23
let p2City = 'Los Mochis'
console.log('Nombre: ', p2Name)
console.log('Edad: ', p2Age)
console.log('Ciudad: ', p2City)

    p2Age = 19
    p2City = 'Guasave'

console.log('Nombre: ', p2Name)
console.log('Edad: ', p2Age)
console.log('Ciudad: ', p2City)

// Ejercicio 6 — ¿Qué tipo de dato es?

console.log(' Ejercicio 6 — ¿Qué tipo de dato es?')
p1Age = 22
let p1Height = 1.73
let p1Dir = 'calle, numero'

console.log(typeof p1Name)
console.log(typeof p1Age)
console.log(typeof p1Height)
console.log(typeof p1IsStudent)
console.log(typeof p1Dir)

// Ejercicio 7 — Variable sin valor

console.log('Ejercicio 7 — Variable sin valor')

let phoneNum

console.log(phoneNum)
console.log(typeof phoneNum)

phoneNum = 1234567890

console.log(phoneNum)
console.log(typeof phoneNum)

// Ejercicio 8 — Conversación básica

console.log('Ejercicio 8 — Conversación básica')

p1City = 'Los Mochis'

console.log('Hola, mi nombre es ', p1Name, '.')
console.log('Tengo ', p1Age, ' años.')
console.log('Vivo en, ', p1City, '.')
console.log('Estudio ', p1Grade, '.')

// Ejercicio 9 — Temperatura

console.log('Ejercicio 9 — Temperatura')

let temp = 25
let c = temp
let f

f = c * 9 / 5 + 32

console.log('Temperatura :')
console.log('Celsius: ', c)
console.log('Fahrenheit: ', f)

// Ejercicio 10 — Información de una computadora

console.log('Ejercicio 10 — Información de una computadora')

let pcBrand = 'Asus'
let pcModel = 'XYZ123'
let pcRam = 16
let pcHdd = 512
let pcPrice = 16000
let pcON = false

console.log('Marca: ', pcBrand)
console.log('Modelo: ', pcModel)
console.log('Memoria RAM en GB: ', pcRam)
console.log('Almacenamiento en GB: ', pcHdd)
console.log('Precio: ', pcPrice)
console.log('Encendida: ', pcON)

