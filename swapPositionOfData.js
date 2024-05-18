
function swapPositionOfData(dataset, callback){
    try {
        let data = JSON.parse(JSON.stringify(dataset))
        const indexOf93 = data.employees.findIndex(employee => employee.id === 93);
        const indexOf92 = data.employees.findIndex(employee => employee.id === 92);
    
        [data.employees[indexOf93], data.employees[indexOf92]] = [data.employees[indexOf92], data.employees[indexOf93]];

        callback(null, data);
    } catch (error) {
        callback(`Error getting data by Ids: ${error.name}: ${error.message}`, null);
    }
}

module.exports = swapPositionOfData