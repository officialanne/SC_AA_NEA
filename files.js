// get the sqlite module for js
const sqlite3 = require("sqlite3").verbose();

// open database in memory
let db = new sqlite3.Database("users.db", sqlite3.OPEN_READWRITE, (err) =>{
    // if there is an error message, print to console
    if (err) {
        return console.error(err.message);
    }

    // if there is connection is successful, print to console
    console.log("Connected to the in-memory SQlite databse.")
});

// selecting data from student table
db.serialize(() => {
    // print each row from the table
    db.each(`SELECT firstName as name,
                    userID as id
             FROM student`, (err, row) => {


       // print error message if unsuccessful
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
});

//inserting test data
db.run("INSERT INTO student(lastName) VALUES(?)", "Walter", function(err) {
    if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
});


// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});


