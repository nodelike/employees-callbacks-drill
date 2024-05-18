function getDataByIds(data, ids, callback){
    try {
        let finalData =  data.employees.filter((employee) => {
            return ids.includes(employee.id);
        })

        callback(null, finalData);
    } catch (error) {
        callback(`Error getting data by Ids: ${error.name}: ${error.message}`, null);
    }
}

module.exports = getDataByIds;