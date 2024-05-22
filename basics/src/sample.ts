//Generics

//reusable code
const toArray = (x: any, y: any, z: any) => {
    return [x, y, z]
}
let samples = toArray('1', 2, 3)


//before using generics

function getArray1(items: any[]): any[] {
    return new Array().concat(items)
}
let numArr1 = getArray1([1, 2, 3])
let strArr1 = getArray1(['a', 'b', 'c'])
numArr1.push('sample')
strArr1.push(10)

//after using generics

function getArray2<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArr2 = getArray2<number>([1, 2, 3])
let strArr2 = getArray2<string>(['a', 'b', 'c'])
numArr2.push(10)
strArr2.push('d')



// //generics
// const toArrGeneric = <T>(x: T, y: T, z: T) => {
//     return [x, y, z]
// }

// let genericArr = toArrGeneric<string>("a", "a", "ad")

// //with more types...

// let printValues = <X, Y, Z>(a: X, b: Y, c: Z) => {
//     console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c}`);
// }
// printValues(1, "oonee", true)

// let printValues = <X, Y, Z>(a: X, b: Y, c: Z, d: string) => {
//     console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c} ${typeof d} is ${d}`);
// }
// printValues(1, "oonee", true, 'hai')

// //with arrays[]
// let printArr = <T>(array: T[]) => {
//     console.log(array.join(','));
// }

// printArr(["adf", "fdf", 5])

// //with object{}
// interface Dictionary<T, U> {
//     key: T,
//     value: U
// }
// let example: Dictionary<string, number> = { key: 'One', value: 1 }

// //with function()
// interface Maths<T> {
//     (x: T, y: T): T
// }

// let add: Maths<string> = (x: string, y: string) => {
//     return x + y
// }
// const res3 = add('8', '2')
// console.log(res3);



// //with class
// class StatusCode<T> {
//     code: T
//     sms: string

//     constructor(code: T, sms: string) {
//         this.code = code;
//         this.sms = sms
//     }
// }
// let statusCode = new StatusCode('500', "hai")
// console.log(statusCode);

// //with generic constraints
// class StatusCode<T extends object> {
//     code: T

//     constructor(code: T) {
//         this.code = code;
//     }
// }

// let statusCode = new StatusCode({ codes: 300, id: 4547 })
// console.log(statusCode);


// function convertToArr<T extends number | string>(input: T): T[] {
//     return [input]
// }

// convertToArr<number>(80)
// convertToArr<string>('5a')