// ============================================
// DATA TYPES — EJERCICIOS
// ============================================
//
// Objetivo:
// Practicar los diferentes tipos de datos
// disponibles en JavaScript.
//
// Conceptos:
// - string
// - number
// - boolean
// - undefined
// - null
// - typeof
//
// ============================================

// Ejercicio 1 — Identificando tipos

console.log('Ejercicio 1 - Identificando tipos')

let ej1Name = 'Daniel'
let ej1Age = 22
let ej1Height = 1.73
let ej1IsStudent = true
let ej1City = 'Barcelona'

console.log(typeof ej1Name)// String
console.log(typeof ej1Age) // Number
console.log(typeof ej1Height)// Number
console.log(typeof ej1IsStudent)// Boolean
console.log(typeof ej1City)// String

// Ejercicio 2 - Strings

console.log('Ejercicio 2 - Strings')

let ej2Name = 'Juan'
let ej2Grade = 'Ingenieria de Software'
let ej2Sentence = 'Hola mundo!'

console.log(typeof ej2Name) 
console.log(typeof ej2Grade)
console.log(typeof ej2Sentence)

// Ejercicio 3 - Numbers

console.log('Ejercicio 3 - Numbers')

let ej3Number1 = 10
let ej3Number2 = 10.00
let ej3Price = 1200.00

console.log(typeof ej3Number1)
console.log(typeof ej3Number2)
console.log(typeof ej3Price)

// Ejercicio 4 — Boolean

console.log('Ejercicio 4 — Boolean')

let ej4IsON = true
let ej4IsOFF = false 
let ej4IsUpper = true

console.log(typeof ej4IsON)
console.log(typeof ej4IsOFF)
console.log(typeof ej4IsUpper)

// Ejercicio 5 — undefined

console.log('Ejercicio 5 — undefined')

let ej5NoValue 

console.log(ej5NoValue, typeof ej5NoValue)

ej5NoValue = 0

console.log(ej5NoValue, typeof ej5NoValue)

// Ejercicio 6 — null

console.log('Ejercicio 6 — null')

let ej6Null = null

console.log(ej6Null, typeof ej6Null)

ej6Null = 'Esto es string'

console.log(ej6Null, typeof ej6Null)

// Ejercicio 7 — Comparando tipos

console.log('Ejercicio 7 — Comparando tipos')

let ej7Num = '22'
let ej7Num2 = 22
let ej7Bool = true
let ej7Undef 
let ej7Null = null

console.log(typeof ej7Num)
console.log(typeof ej7Num2)
console.log(typeof ej7Bool)
console.log(typeof ej7Undef)
console.log(typeof ej7Null)

// Ejercicio 8 — Conversión sencilla

let ej8Name = 'José'
let ej8Age = 22
let ej8IsOn = 1

console.log(typeof Number(ej8Name), ej8Name)
console.log(typeof String(ej8Age), ej8Age)
console.log(typeof Boolean(ej8IsOn), ej8IsOn)

// Ejercicio 9 — Mezclando tipos

console.log('Ejercicio 9 — Mezclando tipos')

let ej9Brand = 'HP'
let ej9Price = 18000
let ej9RAM = 16
let ej9IsON = true
let ej9Model = 'XYZ123'
let ej9RelDate = null

console.log(typeof ej9Brand)
console.log(typeof ej9Price)
console.log(typeof ej9RAM)
console.log(typeof ej9IsON)
console.log(typeof ej9Model)
console.log(typeof ej9RelDate)

// Ejercicio 10 — Clasificación

console.log('Ejercicio 10 — Clasificación')

let ej10V1 = 'abcdefghijklmnopqrstuvwxyz'// String
let ej10V2// Undefined
let ej10V3 = null// Null
let ej10V4 = 22// Number
let ej10V5 = 123.123// Number
let ej10V6 = '123'// String
let ej10V7 = null// Null
let ej10V8 = true// Boolean
let ej10V9 = false// Boolean
let ej10V10 = 'Daniel'// String

console.log(typeof ej10V1)
console.log(typeof ej10V2)
console.log(typeof ej10V3)
console.log(typeof ej10V4)
console.log(typeof ej10V5)
console.log(typeof ej10V6)
console.log(typeof ej10V7)
console.log(typeof ej10V8)
console.log(typeof ej10V9)
console.log(typeof ej10V10)
