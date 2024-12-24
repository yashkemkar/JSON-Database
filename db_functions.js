const fs = require('fs')

function readDb(dbName= 'db.json') {
    // read JSON object from file
    const data = fs.readFileSync(dbName,'utf-8')

    // parse the JSON from JSON to object and return it
    const converted_data = JSON.parse(data)
    return converted_data
}

function writeDb(obj, dbName = 'db.json') {
    // check that a user has parsed in an object
    if (!obj) {
        return
    }
    try {
        // convert our object to the JSON format using stringify
        let converted_data=JSON.stringify(obj)
        fs.writeFileSync(dbName, converted_data)
        console.log('Save successful')
        // save JSON to our JSON database    
    } catch (error) {
        console.log('Failed to save data\n', err.message)
    }

}

// allows us to use these functions directly within our index.js file
module.exports = {
    readDb, writeDb
}