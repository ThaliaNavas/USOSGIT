"use strict";
exports.__esModule = true;
exports.persona = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.ObtenerNombre = function () {
        return this.name;
    };
    return Person;
}());
exports.Person = Person;
exports.persona = new Person("maria", 45, "calle logroño ");
var persona1 = new Person("pedro", 50, "calle lopez de hoyos ");
var persona2 = new Person("lucia", 24, "calle hoyos ");
//console.log(persona.ObtenerNombre())
