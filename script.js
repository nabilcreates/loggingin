// TYPICAL REQUIRE STATEMENTS
var fs = require('fs');
let date = require('date-and-time');

// DATA VARIABLE (TO WRITE)
var data = "Last Login: " + date.format(new Date() , 'DD/MM/YYYY HH:mm:ss') + "\n"

// WRITES TO THE FILE AND THE WRITTEN DATA IS IN THE VARIABLE CALLED DATA (ABOVE)
// Change the directory below to point to the log.txt file (depends on system)
fs.writeFile("/home/nabil/Documents/loginscript/logging/log.txt",data, {flag: "a"},function(error,data){
	if(error){
		console.log(error)
	}

	// UNCOMMENT BELOW TO GET FEEDBACK AFTER RUNNING SCRIPT (USED FOR DEBUGGING)
	// console.log("Done")
})

