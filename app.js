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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var u1 = new User('saidur', 25, 'male');
var u2 = new User('shahida', 26);
var Users = /** @class */ (function () {
    function Users(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Users.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Users;
}());
//  static members
var u3 = new Users('rahman', 45);
var shery = /** @class */ (function () {
    function shery() {
    }
    shery.getRandomNumber = function () {
        return Math.random();
    };
    shery.version = 1;
    return shery;
}());
// abstract class 
// we did not make instance of main class means root or base classes 
var CookingEssential = /** @class */ (function () {
    function CookingEssential(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
    return CookingEssential;
}());
// new CookingEssential  it is not doing because data will sensitive 
var Sabji = /** @class */ (function (_super) {
    __extends(Sabji, _super);
    function Sabji() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sabji;
}(CookingEssential));
function abcde(name, cb) {
    console.log(name, 'from main function');
    cb('saidur');
}
abcde('rahman', function (value) {
    console.log(value);
});
// optional and rest parameter 
function acedf(name, age, gender) {
    console.log(name, age, gender);
}
acedf('sheidjkf', 55, 'male');
function aqqqq(name, age, gender) {
    if (gender === void 0) { gender = 'do no know'; }
    console.log(name, age, gender);
}
aqqqq('sheraa', 90);
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log('array of number', arr);
}
sum(5, 7, 7, 54);
function friends() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log('name of string', arr);
}
friends('amar', 'shahid');
function abcdefgh(a, b) {
    if (typeof a === 'string' && b === undefined) {
        console.log('hello world');
    }
    else if (typeof a === 'string' && typeof b === "number") {
        return 123;
    }
    else
        throw new Error('something wrong');
}
abcdefgh('hey');
abcdefgh('saidurrahman', 345);
