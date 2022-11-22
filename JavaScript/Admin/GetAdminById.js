
const id=window.localStorage.getItem("id")
let GetAdminById = () => { 
    fetch('https://localhost:7013/api/Admin/GetAdminDetailsById/'  + id,
    {
        method: 'Get',
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