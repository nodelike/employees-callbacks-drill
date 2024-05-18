function groupDataByCompanies(data, callback){
    try {
        let groupedCompanies = data.employees.reduce((accumulator, employee) => {
            if(accumulator[employee.company]){
                accumulator[employee.company].push(employee.name);
            } else {
                accumulator[employee.company] = [employee.name];
            }
            return accumulator;
        }, {})
        
        callback(null, groupedCompanies);
    } catch (error) {
        callback(`Error grouping names by companies: ${error.name}: ${error.message}`, null);
    }
}

module.exports = groupDataByCompanies;