"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
const principal_1 = require("./principal");
class Teachers extends principal_1.Principal {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    teachersDetails() {
        return `Hello ${this.firstName} ${this.lastName}, you belong to ${this.department} department`;
    }
}
exports.Teachers = Teachers;
