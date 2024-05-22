console.log("Hello TS");

let age: number = 20;
if (age < 50)
    age = age + 10
console.log(age);

// 1.types
let sales: number = 123_456_789
let course: string = 'typescript'
let is_status: boolean = true
let level;

// 2.any
function render(document: any) {
    console.log(document);
}

// 3.array
let nums: number[] = [1, 2, 3]
nums.forEach(n => n)

// 4.tuple (ARRAY):
let user: [number, string] = [1, "he"]
user.push(2) //sholud show ERRORS bcoz of tuple has fixed length
console.log(user);

let user2: [number, string, boolean, number] = [1, "hai", true, 5]      //meannignless, only useful when (key: value pairs)

// 5.enums
const small = 1;
const medium = 2
const large = 3

// PascalCase - First-letter-captial
const enum Size { Small = "1", Medium = "2", Large = "3" }
let mySize: Size = Size.Medium
console.log(mySize);

// 6.function()
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3

}
const result = calculateTax(500)
console.log(result);

// ts.configFile ERROR-HELPERS
// "noUnusedLocals": true, /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true, /* Raise an error when a function parameter isn't read. */
// // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
// "noImplicitReturns": true, /* Enable error reporting for codepaths that do not explicitly return in a function. */


// 7.OBJECTS:
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
}
console.log(employee);

// 8.Type Aliases:
type Age = number
const personAge: Age = 30
//const personAge2: Age = "30"
//shows error becoz of type: number cannot assign to STRING

type Workers = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let workers: Workers = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
}
console.log(workers);

// 9.Union TYEPS  ( |-> or ):
function kgTolbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }
}
kgTolbs(20)
kgTolbs('20kg')

// 10. inter-section types ( & -> and ):
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWideget = Draggable & Resizable;
let textBox: UIWideget = {
    drag: () => { },
    resize: () => { },
}

// 11. literal types: //literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | "inch"
let areas: Metric = 'inch'

// 12. nullable types:
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola!");
}
greet(undefined) //Argument of type 'null' is not assignable to parameter of type 'string'

// 13. optional chaining
type Customer = {
    birthDay?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthDay: new Date() }
}

let customer = getCustomer(0)
//if (customer !== null && customer !== undefined)
//optional chaining access operator => ?
console.log(customer?.birthDay?.getFullYear());

// optional elemet
// eg: customer?.[0]

// optional call
let log: any = null;
log?.('hai')


