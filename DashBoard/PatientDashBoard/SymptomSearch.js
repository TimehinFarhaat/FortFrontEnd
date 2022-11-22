const baseUri = 'https://priaid-symptom-checker-v1.p.rapidapi.com';


async function queryResult(params) {
    const issuePath = '/diagnosis'
    let url = baseUri + issuePath
    if (params) {
        url += '?' + encodeQueryString(params)
    
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '64fd313811mshcc560c5ac53ca3bp19fcefjsnbe9a1baed3a6',
            },
        });
        const result = await response.json()
        console.log(result);
        return result;
    }
    else {
        alert("an error occured");
    }
}




async function displayInfo(parameters) {
    const diagnosisPath = `/issues/${parameters.id}/info?`
    let url = baseUri + diagnosisPath
    if (parameters) {
        url += '?' + encodeQueryString(parameters)
    }
    let response = await fetch(url, {
        method: 'GET',
            headers: {
               
                'X-RapidAPI-Key': '64fd313811mshcc560c5ac53ca3bp19fcefjsnbe9a1baed3a6',
                'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com',

            },  
    });
    const result = await response.json()
    console.log(result);
    return result;
}