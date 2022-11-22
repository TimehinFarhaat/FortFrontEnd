

let DeleteAdmin = (id) => { 
    fetch(`https://localhost:7013/api/Admin/DeleteAdmin?id=${id}`,
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
            window.location.reload(true)
           
        }

        alert(resp.message);
        
       
    })
}



var id = 0;
let DeleteDoctor = (id) => { 
    fetch(`https://localhost:7013/api/Doctor/DeleteDoctor/${id}`,
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
        }

        alert(resp.message);
        
       
    })
}
DeleteDoctor(id)




let DeletePatient = (id) => { 
    fetch(`https://localhost:7013/api/Patient/DeletePatient/${id}`,
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
        }

        alert(resp.message);
        
       
    })
}
DeletePatient(id)



