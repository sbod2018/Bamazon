let mysql = require("mysql");
let inquirer = require("inquirer");

// create the connection information for the sql database 
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fitz",
    database: "bamazonDB",
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    afterConnection();
    
});

const afterConnection = () =>{
    connection.query("SELECT * FROM products", (err, res )=>{
        if (err) throw err;
        console.log("Available Products:\n");
        res.forEach(element => {
            console.log(
                `Department: ${element.department_name}
                \n${element.product_name}
                \n I.D. Number: ${element.item_id}
                \n Units left: ${element.stock_quantity}
                \n Price:${element.price}`
            );
            
        });
        start();
    }
    )};


const updateProductId = function (id, quantity) {
    let updatedStock;
    let query = "SELECT * FROM products WHERE ?";
    connection.query(query, { item_id: id }, function (err, res) {
        if (err) throw err;
        // console.log(res);
        let productObj = res[0];
        // console.log(productObj.stock_quantity);

        if (quantity < productObj.stock_quantity) {
            let cost;
            updatedStock = productObj.stock_quantity - quantity;
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: updatedStock
                    },
                    {
                        item_id: id
                    }
                ],
                function (err) {
                    if (err) throw err;
                }
            );
            cost = quantity * productObj.price;
            console.log(`${productObj.product_name} ordered.\nTotal Cost: $${cost}`);
        }
        else {
            console.log(`Insufficient quantity`);
        }
        connection.end();
    });
};

function start() {
    inquirer
        .prompt([{
            type: "input",
            name: "id_select",
            message: "Enter I.D. number of product",
        },
        {
            type: "input",
            name: "units",
            message: "Enter total units to purchase"
        }
        ])
        .then(function (user) {
            updateProductId(user.id_select, user.units);
        });
};

