"use strict";
// var a = 12
// console.log(a);
// array 
// const arr = [1, 2, 3 , {name: 'saidur'}, {name: 12}]
// let arr:number[]=[1,2, 3, 'harsh'] it is give me because i set its type number
// tuples 
// let arr: [string, number] = [22, 'saidur'] give error 
// let err: [string, number] = ['saidur', 55] //okk 
// let arr2:[number, string] = [44, 'shad']
// // Enums 
// enum UserRoles{
//     ADMIN = 'admin',
//     GUEST = 'guest'
// }
// UserRoles.ADMIN
// any 
// let a;
// a = 12 
// a = 'harsh'
// if a = boolean hoy 
// let b :number 
// b = true
// let a : unknown
// a = 12 
// a = 'saidur'
// if(typeof a === 'string'){
//     a.toUpperCase()
// }
// void  jodi return er value na take 
// function abcd(): void{
//     console.log('hey');
// }
// function dec(): number{
//     return 12
// }
// type interference 
// let a = 12 
// type annotions 
// let a: number = 12 
// null, undefined, never 
// let a = null 
// let a: string | null 
// a= 12 error dive 
// let a : undefined 
// function abcd(): never{
//     while(true){
//         console.log('is infinit lop ');
//     }
// }
// InterFace type 
// interface User{
//     name: string,
//     email: string, 
//     password: string,
//     // optinal users will
//     gender?: string
// }
// function getDataOfUser(obj:User){
//   console.log(obj.email);
// }
// getDataOfUser({name: 'saidur', email: 'agdfg', password: 'adkfjakj', gender: 'male'})
// Extending interface 
// interface User{
//         name: string,
//         email: string, 
//         password: string,
//         // optinal users will
//     }
//     interface Admin extends User{
//         admin: boolean
//     }
//     function abcd(obj: Admin){
//         obj.
//     }
// type aliasses 
// interface User{
//     name: string
// }
// interface User{
//     email: string
// }
// function abcd(obj: User){
//     obj.email
//     obj.name
//     console.log(obj);
// }
// example - 1 
// type sonkha = number
// let a : sonkha
// ekon amra type ta ekta varabalbe rakbo 
// example - 2 
// type value = string | number | null 
// let b : value 
// // exmple - 3 
// type arg = string | null 
// function abcd(obj: arg){
//     console.log(obj);
// }
// // abcd(12) give me error because i set type string 
// abcd('harsh')
// class Device {
//     name = 'lg';
//     price = 12000;
// }
// let d1 = new Device()
// let d2 = new Device()
// constructer 
// example - 1
// class BottleMaker{
//     constructor(public name: string, public price: number){
//     }
// }
// const b1 = new BottleMaker('milton', 12)
// class HumanMaker{
//     age = 0
//     constructor(public name: string, public isHandsome: boolean){}
// }
// let h1 = new HumanMaker('saidur', true)
// // exaple -2 
// class Music{
//     constructor(public name: string, public artist: string, public thumbnail: string = 'kicujpg', public length: number, public free: boolean){
//         if(!thumbnail){
//             this.thumbnail = 'kicujpg'
//         }
//     }
// }
// let m1 = new Music('gojol', 'atif', "", 1200, false)
// // private and public 
// class BottleMaker{
//     private halua: string = 'halua'
//     constructor(private name: string){
//     }
// }
// // class BottleMaker{
// //     public halua: string = 'halua'
// //     constructor(public name: string){
// //     }
// // }
// class MetalMaker extends BottleMaker{
//     constructor(name:string){
//         super(name)
//     }
//     getValue(){
//         console.log('it is from bottle maker', this.name, this.halua);
//     }
// }
// let d1 = new MetalMaker("saidur")
// d1.name = 'sahed'
// d1.getValue()  //give me error when i use private i is not allowd outside of private
// but when i use private give me error
// class BottleMaker{
//     protected name: string = 'milton'
// }
// class MetalMaker extends BottleMaker{
//     public material: string = 'metal'
//     changeName(){
//         this.name = 'some other name'
//     }
// }
// let b1 = new MetalMaker()
// b1.changeName()
// b1.name = 'ohdkkfjsdklfh'  give me error protected inheritance work only on subclass 
// property readonly when do not change the variable 
// class User{
//     constructor(public readonly name: string){}
//     changeName(){
//         this.name = 'change hobe kintu error dive'
//     }
// }
// const n1 = new User('saidur')
// // n1.changeName()
// parameter 
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u1 = new User('saidur', 25, 'male');
let u2 = new User('shahida', 26);
class Users {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(value) {
        this._name = value;
    }
    set age(value) {
        this._age = value;
    }
}
let u3 = new Users('rahman', 45);
