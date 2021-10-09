"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const teachers_1 = require("./teachers");
class Students extends teachers_1.Teachers {
    constructor(firstName, lastName, department, age, level) {
        super(firstName, lastName, department);
        this.age = age;
        this.level = level;
    }
    getStudentsDetails() {
        return `Hello ${this.firstName} ${this.lastName} you belong to ${this.department} department you are ${this.age} and your are in level ${this.level}`;
    }
}
exports.Students = Students;
