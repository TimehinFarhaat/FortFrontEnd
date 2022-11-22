let DeleteAdmin = (id) => {
    fetch(`https://localhost:7013/api/Admin/DeleteAdmin?id=${id}`,
        {
            method: 'DELETE',
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



let DeleteDoctor = (id) => { 
    fetch(`https://localhost:7013/api/Doctor/DeleteDoctor?id=${id}`,
    {
        method: 'DELETE',
        headers: {
            "content-type" : "application/json"
        }
    }).then((res) => res.json()).then(resp => {
        console.log(resp);
        console.log(resp.status);
        if (resp.status == true)
        {
            
            alert(resp.message);
            location.reload();
            return;
        }

        alert(resp.message);
        return;
       
    })
}




let DeletePatient = (id) =>
{
       console.log("asdfghjk")
       fetch(`https://localhost:7013/api/Patient/DeletePatient?id=${id}`,
        {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }

        }).then((res) => res.json())
        .then(resp => {
            console.log("asdfghjk")
            console.log(resp);
            console.log(resp.status);
            if (resp.status == true) {
            
                alert(resp.message);
                location.reload();
                return;
            }

            alert(resp.message);
            return;
        })
}






