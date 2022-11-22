var id = window.localStorage.getItem("Id");
async function PatientStatistics(id)
{
    fetch(`https://localhost:7013/api/Statistics/GetPatientStatistics?userId=${id}`,
    {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }


    }).then((res) => res.json()).then(resp => {
        console.log(resp);
        console.log(resp.status);
        if (resp.status == true) {
            alert(resp.message);
            window.location.reload(true)
            return;
       
        }
        alert(resp.message);
        return;
    })
}