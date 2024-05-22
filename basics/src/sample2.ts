// type TUserProps = {
//     name: string;
//     age: number;
// }

// interface IUserPropss {
//     name: string;
//     age: string;
// }

// export default function User({ }: TUserProps) {
//     return 'hello'
// }



// //EXTENDS
// type UserProps = {
//     name: string;
//     age: number;
// }

// type AdminProps = UserProps & {
//     role: string
// }

// const person: AdminProps = {
//     name: 'rocky',
//     age: 20,
//     role: 'web dev'
// }
// console.log(person);

// interface UserProps {
//     name: string;
//     age: number;
// }

// interface AdminProps extends UserProps {
//     role: string
// }

// const person: AdminProps = {
//     name: 'rocky',
//     age: 23,
//     role: 'web dev'
// }
// console.log(person);



//exmples:
// type Address = string;
// const add: Address = "123 dubai str"

// interface LocationName {
//     street: string
// }
// // let street: LocationName = "143 arabic" //error
// let street: LocationName = { street: "143 arabic" }

// type Address = string | string[]
// // interface Address2 = string | string[] => not possible
// const add: Address = ["123 asbc", "456 dfjhb"]



// type UsersProps = {
//     name: string
//     age: number
//     createdAt: Date
// }

// type Guests = Omit<UsersProps, "name" | "age">

// interface GuestsProps extends Omit<UsersProps, "name"> { }



// type Address = [number, string]
// interface Address2 extends Array<number | string> {
//     0: number,
//     1: string
// }
// const add: Address = [1, "weee 34"]



// const project = {
//     title: 'proj 1',
//     spec: {
//         areas: 100,
//         room: 5
//     }
// } as const
// //as const => displays the value in it

// type Specify = typeof project['spec']



// // interface User {
// //     name: string
// //     age: number
// // }

// // interface User {
// //     role: string
// // }

// type User = {
//     name: string
//     age: number
// }

// type User2 = User & {
//     role: string
// }

// let person: User2 = {
//     name: "",
//     age: 2,
//     role: ""
// }



