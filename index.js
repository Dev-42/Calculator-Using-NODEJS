// yargs package is useful for parsing command line arguments
const yargs = require('yargs')

const argv = yargs
    .command('add <num1> <num2>', 'Add two numbers',{
        num1: {
            describe: 'Frist number',
            demandOption: true,
            type: 'number',
        },
        num2:{
            describe: 'Second number',
            demandOption: 'true',
            type: 'number',
        },
    })
    .command('sub <num1> <num2>','Substract two numbers',{
        num1:{
            describe:'Frist number',
            demandOption: true,
            type: 'number'
        },
        num2:{
            describe: 'Second number',
            demandOption: true,
            type: 'number',
        },
    })
    .command('mul <num1> <num2>','Multiply two numbers',{
        num1:{
            describe: 'Frist number',
            demandOption: true,
            type: 'number',
        },
        num2:{
            describe:'Second number',
            demandOption: true,
            type: 'number'
        },
    })
    .command('div <num1> <num2>','Divide two numbers',{
        num1:{
            describe: 'Frist number',
            demandOption:true,
            type:'number',
        },
        num2:{
            describe:"Second number",
            demandOption:true,
            type:'number',
        },
    })
    .command('sin <angle>', 'Calculate the sine of an angle in degrees',{
        angle:{
            describe: 'Angle in degrees',
            demandOption: true,
            type: 'number',
        },
    })
    .command('cos <angle>', "Calculate the cosine of an angle in degrees",{
        angle:{
            describe:'Angle in degrees',
            demandOption:true,
            type:'number',
        },
    })
    .command('tan <angle>', "Calculate the tangent of an angle in degrees",{
        angle:{
            describe:'Angle in degrees',
            demandOption:true,
            type:'number',
        },
    })
    .command('random','Generate a random number')
    .help()
    .argv;

// Function to perform addition
const add = (num1,num2) => {
    return num1 + num2;
}
//Function to perform substraction
const sub = (num1,num2) => {
    if(num1 < num2){
        return "Substraction of smaller number by larger"
    }
    return num1 - num2
}
// Function to perform multiplication
const mul = (num1,num2) => {
    return num1 * num2;
}
// Function to perform division
const div = (num1,num2) => {
    if(num2 === 0){
        return "Error : Division by zero"
    }
    return num1 / num2;
}
// function to calculate the sin of an angle
const sin = (angle) => {
    return Math.sin((angle * Math.PI) / 180);
}
// fucntion to calculate the cos of the angle
const cos = (angle) => {
    return  Math.cos((angle * Math.PI) / 180);
}
// Function to cal tan of the angle
const tan = (angle) => {
    return Math.tan((angle * Math.PI) / 180);
}
const random = () => {
    return Math.random()
}


// Checking the command and perform the operation
let command = argv._[0]

if(command === 'add'){
    console.log('Result : ', add(argv.num1 , argv.num2))
}
else if(command === 'sub'){
    console.log('Result : ', sub(argv.num1 , argv.num2))
}
else if(command === 'mul'){
    console.log('Result : ', mul(argv.num1 , argv.num2))
}
else if(command === 'div'){
    console.log('Result : ', div(argv.num1 , argv.num2))
}
else if(command === 'sin'){
    console.log('Result : ', sin(argv.angle))
}
else if(command === 'cos'){
    console.log('Result : ', cos(argv.angle))
}
else if(command === 'tan'){
    console.log('Result : ', tan(argv.angle))
}
else if(command === 'random'){
    console.log('Result : ', random())
}
else{
    console.log('Invalid command. Use --help for available commands')
}
