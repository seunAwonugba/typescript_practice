"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const principal_1 = require("./principal");
const students_1 = require("./students");
const teachers_1 = require("./teachers");
const prompt = require("prompt-sync")();
const principalsfirstName = prompt("Input your firstname: ");
console.log(`> ${principalsfirstName}`);
const principalsLastName = prompt("Input your lastname: ");
console.log(`> ${principalsLastName}`);
const principal = new principal_1.Principal(principalsfirstName, principalsLastName);
console.log(principal.fullName());
console.log("###########################################################################");
const teachersFirstName = prompt("Input your firstname: ");
console.log(`> ${teachersFirstName}`);
const teachersLastName = prompt("Input your lastname: ");
console.log(`> ${teachersLastName}`);
const teachersDepartment = prompt("Input your department: ");
console.log(`> ${teachersDepartment}`);
const teacher = new teachers_1.Teachers(teachersFirstName, teachersLastName, teachersDepartment);
console.log(teacher.teachersDetails());
console.log("###########################################################################");
const studentFirstName = prompt("Input your firstname: ");
console.log(`> ${teachersFirstName}`);
const studentLastName = prompt("Input your lastname: ");
console.log(`> ${teachersLastName}`);
const studentsDepartment = prompt("Input your department: ");
console.log(`> ${studentsDepartment}`);
const studentsAge = prompt("Age: ");
console.log(`> ${studentsAge}`);
const studentsLevel = prompt("Level: ");
console.log(`> ${studentsLevel}`);
const student = new students_1.Students(studentFirstName, studentLastName, studentsDepartment, studentsAge, studentsLevel);
