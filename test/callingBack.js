const employeeData = require("./../1-employees-callbacks.cjs");
const writeFile = require("../writeFile.js");
const getDataByIds = require("./../getDataByIds.js");
const groupDataByCompanies = require('./../groupDataByCompanies.js');
const getDataForPowerpuff = require('./../getDataForPowerpuff.js');
const removeEntryId2 = require('./../removeEntryId2.js');
const sortDataByCompanies = require('./../sortDataByCompanies.js');
const swapPositionOfData = require('./../swapPositionOfData.js');
const addBirthdayForEvenID = require('./../addBirthdayForEvenID.js');

writeFile(employeeData, "../test/data.json", (err) => {
    if(err){
        console.log(err);
        return;
    }
    
    const data = require('./data.json');

    getDataByIds(data, [2,13, 23], (err, gotDataById) => {
        if(err){
            console.log(err);
            return;
        }
        writeFile(gotDataById, "gotDataById.json", (err) => {
            if(err){
                console.log(err);
                return;
            }
            groupDataByCompanies(data, (err, groupedData) => {
                if(err){
                    console.log(err);
                }
                writeFile(groupedData, "dataGroupedByCompanies.json",(err) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                    getDataForPowerpuff(data, (err, powerpuffEmployees) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        writeFile(powerpuffEmployees, "powerpuffEmployees.json", (err) => {
                            if(err){
                                console.log(err);
                                return;
                            }
                            removeEntryId2(data, (err, dataWithoutID2) => {
                                if(err){
                                    console.log(err);
                                    return;
                                }
                                writeFile(dataWithoutID2, "dataWithoutEntry2.json", (err) => {
                                    if(err){
                                        console.log(err);
                                        return;
                                    }
                                    sortDataByCompanies(data, (err, sortedData) => {
                                        if(err){
                                            console.log(err);
                                            return;
                                        };
                                        writeFile(sortedData, "sortedDataByCompany.json", (err) => {
                                            if(err){
                                                console.log(err);
                                                return;
                                            }
                                            swapPositionOfData(data, (err, swappedData) => {
                                                if(err){
                                                    console.log(err);
                                                    return;
                                                }
                                                writeFile(swappedData, "swappedIDData.json", (err) => {
                                                    if(err){
                                                        console.log(err);
                                                        return;
                                                    }
                                                    addBirthdayForEvenID(data, (err, birthdayData) => {
                                                        if(err){
                                                            console.log(err);
                                                            return;
                                                        }
                                                        writeFile(birthdayData, "birthdayDataWithEvenId.json", (err) => {
                                                            if(err){
                                                                console.log(err);
                                                                return;
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})


