// console.log("The File...");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     Login();
    
// })
const email=window.localStorage.getItem("email")
let GetAdminByEmail = () => { 
    fetch('https://localhost:7013/api/Admin/GetAdminDetailsByEmail/'  + email,
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