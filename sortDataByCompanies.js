function sortDataByCompanies(data, callback){
    try {
        let sortedByCompany =  data.employees.sort((a , b) => {
            if (a.company === b.company) {
                return a.id - b.id;
              }
              return a.company < b.company ? -1 : 1;
        })
        
        callback(null, sortedByCompany);
    } catch (error) {
        callback(`Error getting data by Ids: ${error.name}: ${error.message}`, null);
    }
}

module.exports = sortDataByCompanies;