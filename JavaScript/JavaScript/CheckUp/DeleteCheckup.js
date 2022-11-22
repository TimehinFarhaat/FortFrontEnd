// console.log("The File...");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     Login();
    
// }
function  DeleteUserCheckup(id)  { 
    fetch('https://localhost:7013/api/Checkup/DeleteDiagnose' + id,
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
            return;
        }

        alert(resp.message);
        
       
    })
}