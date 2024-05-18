const fs = require('fs');
const path = require('path');

function writeFile(data, filename, callback){
    try {
        fs.mkdir("output", { recursive: true }, (err) => {
            if(err){
                throw err;
            }
        })
    
        const dataPath = path.join(__dirname, "output", filename)
        fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
            try {
                callback(err);
            } catch (error) {
                console.log(`Error in writeFile Callback: ${error}`);
            }
        })
    } catch (error) {
        console.log(`Error storing to JSON file. ${error}`)
    }
}

module.exports = writeFile;