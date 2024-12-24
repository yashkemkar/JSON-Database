// require db_functions used so that we can use readDb and writeDb functions
const { readDb, writeDb } = require("./db_functions");

// create a data object in our index file - this could even be a user inputting information into a field using DOM manipulation.
const dataObj ={
    name: 'yash',
    favourite_numbers:[8,3]
}

// write the information back to the database
writeDb(dataObj)

console.log(readDb())


// pull object from database
const saved_data = readDb()


// add a key-value pair onto it
saved_data['number_of_apples']=27

//write it back to the database
writeDb(saved_data)