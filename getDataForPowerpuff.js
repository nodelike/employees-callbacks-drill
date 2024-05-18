function getDataForPowerpuff(data, callback){
    try {
        let powerpuffEmployees = data.employees.filter((employee) => {
            return employee.company == 'Powerpuff Brigade';
        })

        callback(null, powerpuffEmployees);
    } catch (error) {
        callback(`Error getting all Powerpuff Brigade employees: ${error.name}: ${error.message}`, null);
    }
}

module.exports = getDataForPowerpuff;