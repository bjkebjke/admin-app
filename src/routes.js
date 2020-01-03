	var mysql = require('mysql');
    const express = require('express')
    const bodyParser = require('body-parser');
    const app = express()
    const cors = require("cors");

    app.use(cors());

    var con = mysql.createConnection({
        host: "interview-ezoic.cs6p5rczr2xv.us-east-1.rds.amazonaws.com",
        port: '3306',
        user: "ezinterview",
        password: "98DIM9yBhZh1",
        database: "Sales"
    });
    
    con.connect(function(err){
        if (err){ 
            throw err;
        }
        else {
            console.log('Connected');
        }
    });

	app.get('/', function (req, res) {
		res.send('Hello World')
    })
    
    app.get('/orders', function (req, res) {
        var queryString = 'Select * from orders'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/payments', function (req, res) {
        var queryString = 'Select * from payments'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/orderdetails', function (req, res) {
        var queryString = 'Select * from orderdetails'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/customers', function (req, res) {
        var queryString = 'Select * from customers'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/products', function (req, res) {
        var queryString = 'Select * from products'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/productlines', function (req, res) {
        var queryString = 'Select * from productlines'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/employees', function (req, res) {
        var queryString = 'Select * from employees'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })

    app.get('/offices', function (req, res) {
        var queryString = 'Select * from offices'
        con.query(queryString, function(error, results) {
                if(error) {
                    throw error;
                } else {
                    res.send(results);
                }
            }
        );
    })
    
    /**bodyParser.json(options)
     * Parses the text as JSON and exposes the resulting object on req.body.
     */
    app.use(bodyParser.json());

    app.post('/customers', function (req,res) {
        var jsondata = req.body;
        //console.log(jsondata);
        //console.log("req.body customer name " + req.body.customerName);

        var values = [jsondata.customerName, jsondata.contactLastName,  
            jsondata.contactFirstName, jsondata.phone, jsondata.addressLine1, jsondata.addressLine2,
            jsondata.city, jsondata.state, jsondata.postalCode, jsondata.country, jsondata.salesRepEmployeeNumber,
            jsondata.creditLimit];

        //console.log(values);

        var queryString = 'INSERT INTO customers (customerName, contactLastName,' +  
        ' contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit)' + 
        ' VALUES (?)'
        con.query(queryString, [values], function(err, result) {
            if(err) {
                res.send('Error');
            } else {
                console.log(result);
                console.log("Number of rows affected : " + result.affectedRows);
                console.log("Number of records affected with warning : " + result.warningCount);
                console.log("Message from MySQL Server : " + result.message);
                res.send(result);
            }
        })

    })

    app.put('/customers', function (req, res) {
        var jsondata = req.body;

        var values = [jsondata.customerName, jsondata.contactLastName,  
            jsondata.contactFirstName, jsondata.phone, jsondata.addressLine1, jsondata.addressLine2,
            jsondata.city, jsondata.state, jsondata.postalCode, jsondata.country, jsondata.salesRepEmployeeNumber,
            jsondata.creditLimit, jsondata.customerNumber];

        console.log("values for put " + values);
        
        var queryString = 'UPDATE customers SET customerName = ?, contactLastName = ?,' +  
        ' contactFirstName = ?, phone = ?, addressLine1 = ?, addressLine2 = ?, city = ?,' + 
        ' state = ?, postalCode = ?, country = ?, salesRepEmployeeNumber = ?, creditLimit = ?' + 
        ' WHERE customerNumber = ?';
        
        con.query(queryString, values, function(err, result) {
            if(err) {
                res.send('Error');
            } else {
                console.log(result);
                console.log("Number of rows affected : " + result.affectedRows);
                console.log("Number of records affected with warning : " + result.warningCount);
                console.log("Message from MySQL Server : " + result.message);
                res.send(result);
            }
        })


    })

    app.post('/products', function (req,res) {
        var jsondata = req.body;
        var values = [jsondata.productName, jsondata.productLine,  
            jsondata.productScale, jsondata.productVendor, jsondata.productDescription, jsondata.quantityInStock,
            jsondata.buyPrice, jsondata.MSRP];
        

        var queryString = 'INSERT INTO products (productName, productLine,' +  
        'productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP)' + 
        ' VALUES (?)'
        con.query(queryString, [values], function(err, result) {
            if(err) {
                res.send('Error');
            } else {
                res.send('Success');
            }
        })
    })

    app.post('/orders', function (req,res) {
        var jsondata = req.body;
        var values = [jsondata.orderDate, jsondata.requiredDate,  
            jsondata.shippedDate, jsondata.status, jsondata.comments, jsondata.customerNumber];
        

        var queryString = 'INSERT INTO orders (orderDate, requiredDate,' +  
        'shippedDate, status, comments, customerNumber)' + 
        ' VALUES (?)'
        con.query(queryString, [values], function(err, result) {
            if(err) {
                res.send('Error');
            } else {
                res.send('Success');
            }
        })
    })
		
    app.listen(8082, '127.0.0.1')
