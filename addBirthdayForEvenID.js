function addBirthdayForEvenID(dataset, callback){
    try {
        let data = JSON.parse(JSON.stringify(dataset))
        const currentDate = new Date();

        data.employees.forEach(employee => {
            if (employee.id % 2 === 0) {
                employee.birthday = currentDate.toISOString().slice(0, 10);
            }
        });
        
        callback(null, data);
    } catch (error) {
        callback(`Error getting data by Ids: ${error.name}: ${error.message}`, null);
    }
}

module.exports = addBirthdayForEvenID;