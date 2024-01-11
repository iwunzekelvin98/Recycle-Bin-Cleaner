//We need th eprimary module to access the File system on our computer
const fs = require('fs');

function cleanRecycleBin() {
    
    const recycleBinPath = 'C:\\$Recycle.Bin'

    //Read the contents of recyle Bin
    fs.readdir(recycleBinPath, (error, files) => {
        if (error) {
            console.log("Error Reading directory");
        }
        else {
            console.log('Files in Recycle Bin:', files);
        }
    }


    //Print out content if recyle Bin

    //Delete file

    //Delete conformation

    console.log("Your file has been successfulliy deleted")
}

cleanRecycleBin();