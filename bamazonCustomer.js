let mysql = require("mysql");
let inquirer = require("inquirer");

// create the connection information for the sql database 
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB",
});

// connect to the mysql server and sql database
connection.connect(function(err){
    if (err) throw err;
    // run start function after the connection is made to prompt user
    start();
});


function start(){
    inquirer 
    .prompt({
    name: "buy",
    type: "rawlist",
    message: "What would you like to buy?",
    choices: ["buy"]
    })
    .then(function(answer){
        // based on their answer
        if (answer.buy.toUpperCase() === "BUY"){

        }
    });
}

