#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from  "chalk";

class Student {
    name: string;

    constructor(nam: string) {
        this.name = nam;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const oopsProgram = async (persons: Person) => {
    console.log(chalk.blue.bold('\n\tWelcome to Muhammad Mehdi Raza OOPS programming\n\t'));
do{
    const ans = await inquirer.prompt([{
        name: "options",
        type: "list",
        message: "Whom would you like to interact with",
        choices: ["Teacher", "student", "Exit"]
    }]);

    if (ans.options === "Teacher") {
        console.log(chalk.green.bold("Hi Assalamualaikum! How are you?"));
    } else if (ans.options === "student") {
        const answer = await inquirer.prompt([{
            name: "studentName",
            type: "input",
            message: "Enter the student's name you want to wish"
        }]);

        const student = persons.students.find(val => val.name === answer.studentName);
        if (!student) {
            const name = new Student(answer.studentName);
            persons.addStudent(name);
            console.log(chalk.green.bold(`Hello, I am ${name.name}. Nice to meet you.`));
            console.log(chalk.green.bold("How Are you?"));
            console.log(chalk.green.bold("New student added successfully."));
            console.log(chalk.yellow.bold("Current student list:"));
            console.log(persons.students);
        } else {
            console.log(chalk.yellow.bold(`Hello, I am ${student.name}. Nice to see you again.`));
            console.log(chalk.yellow.bold("Existing student list."));
            console.log(persons.students);
        }
    } else if (ans.options === "Exit") {
        console.log(chalk.red.bold("Exiting the program."));
        process.exit()
    }
    } while (true)
}

oopsProgram(persons);