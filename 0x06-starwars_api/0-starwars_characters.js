const request = require('request');

const url = "https://swapi-api.alx-tools.com/api/"
request(`${url}films/${process.argv[2]}`, async function (error, response, body) {

    error && console.log(error);
    const chars = (JSON.parse(response.body).characters);
    for (const char of chars) {
        await new Promise((resolve, reject) => {
            request(char, function (error, response, body) {
                error && console.log(error)
                const name = JSON.parse(response.body).name
                console.log(name)
                resolve()
            })
        })

    }
});