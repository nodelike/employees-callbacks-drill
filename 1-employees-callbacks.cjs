/*
 * Use asynchronous callbacks ONLY wherever possible.
 * Error first callbacks must be used always.
 * Each question's output has to be stored in a json file.
 * Each output file has to be separate.

 * Ensure that error handling is well tested.
 * After one question is solved, only then must the next one be executed. 
 * If there is an error at any point, the subsequent solutions must not get executed.
   
 * Store the given data into data.json
 * Read the data from data.json
 * Perfom the following operations.

    1. Retrieve data for ids : [2, 13, 23].
    2. Group data based on companies.
        { "Scooby Doo": [], "Powerpuff Brigade": [], "X-Men": []}
    3. Get all data for company Powerpuff Brigade
    4. Remove entry with id 2.
    5. Sort data based on company name. If the company name is same, use id as the secondary sort metric.
    6. Swap position of companies with id 93 and id 92.
    7. For every employee whose id is even, add the birthday to their information. The birthday can be the current date found using `Date`.

    NOTE: Do not change the name of this file

*/

const data = {
    "employees": [
        {
            "id": 23,
            "name": "Daphny",
            "company": "Scooby Doo"
        },
        {
            "id": 73,
            "name": "Buttercup",
            "company": "Powerpuff Brigade"
        },
        {
            "id": 93,
            "name": "Blossom",
            "company": "Powerpuff Brigade"
        },
        {
            "id": 13,
            "name": "Fred",
            "company": "Scooby Doo"
        },
        {
            "id": 89,
            "name": "Welma",
            "company": "Scooby Doo"
        },
        {
            "id": 92,
            "name": "Charles Xavier",
            "company": "X-Men"
        },
        {
            "id": 94,
            "name": "Bubbles",
            "company": "Powerpuff Brigade"
        },
        {
            "id": 2,
            "name": "Xyclops",
            "company": "X-Men"
        }
    ]
}

module.exports  = data;