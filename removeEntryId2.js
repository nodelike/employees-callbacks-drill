function removeEntryId2(data, callback){
    try {
        let dataWithoutId2 =  data.employees.filter((employee) => {
            return employee.id != 2;
        })

        let finalData = {
            "employees": dataWithoutId2
        }
        callback(null, finalData);
    } catch (error) {
        callback(`Error removing entry with id 2: ${error.name}: ${error.message}`, null);
    }

}

module.exports = removeEntryId2;