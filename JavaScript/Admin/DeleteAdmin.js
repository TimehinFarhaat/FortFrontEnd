
const id=window.localStorage.getItem("id")
let DeleteAdmin = () => { 
    fetch('https://localhost:7013/api/Admin/DeleteAdmin/' + id,
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
    
   