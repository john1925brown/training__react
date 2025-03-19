
const filterArray = <T>(arr: T[], func: (elem: T) => boolean): T[] | [] => {
  return arr.filter(func)
}

// Пример 1: Фильтрация чисел
const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

console.log(filterArray(numbers, isEven)) // [2, 4]

// Пример 2: Фильтрация строк
const words = ["hello", "world", "typescript"]
const startsWithT = (word: string) => word.startsWith("t")

console.log(filterArray(words, startsWithT)) // ["typescript"]

const mapArray = <T,V>(arr: T[], func: (elem: T) => V) => {
  return arr.map(func)
}

// Пример 1: Преобразование чисел в строки
const numbers2 = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

console.log(mapArray(numbers2, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]

// Пример 2: Преобразование строк в их длины
const words2 = ["hello", "world", "typescript"]
const getLength = (word: string) => word.length

console.log(mapArray(words2, getLength)) // [5, 5, 10]

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
  { name: "Agnes", age: 25 },
  { name: "Robert", age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]
