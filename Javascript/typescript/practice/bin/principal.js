"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Principal = void 0;
class Principal {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Hello principal ${this.firstName} ${this.lastName}`;
    }
}
exports.Principal = Principal;
