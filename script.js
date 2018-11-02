// REQUIRE STATEMENTS
var fs = require('fs');
let date = require('date-and-time');

// Read config file
let config = require('./config.json')

// Used below to write to file
var data = "Last Login: " + date.format(new Date() , 'DD/MM/YYYY HH:mm:ss') + "\n"

// Writes to file (if doesnt exist, it will create [because of the 'a' flag])
fs.writeFile("./" + config.outputFileName + ".txt",data, {flag: "a"},function(error,data){

	// Logs error if it exist
	if(error){
		console.log(error)
	}

	// READ SILENT MODE CONFIG
	if(!config.silentmode){
		console.log("Done Writing!")
	}
	
})

