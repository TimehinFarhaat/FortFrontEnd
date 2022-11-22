console.log("The File...");
const formss = document.querySelector("#forms");
submitBtn = document.querySelector("#submit-btn")
formss.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.cursor = "not-allowed";
    CreateAdmin()
    
})
let CreateAdmin= () => {
    let sendform = new FormData(formss);
    console.log(sendform.get("emailAddress")) 
    console.log(sendform.get("passWord"))
    console.log(sendform);
    fetch('https://localhost:7013/api/Admin/RegisterAdmin',
        {
            method: 'POST',
            body: sendform,
            
        }) .then((res) => res.json()).then(resp => {
            console.log(resp);
            console.log(resp.status);
            if (resp.status == true)
            {
                swal({
                    icon: 'success',
                    title: `${response.message}`,
                    background: 'blue'
                 })              // const params = {
                //     emailaddress: data.get("emailAddress"),
                //     password:data.get("passWord"),
                // }
                // console.log(params)
                //  fetch('https://localhost:7013/api/User/Login',
                // {
                // method: 'POST',
                //     body: JSON.stringify(params),
                //     headers: {
                //         "content-type": "application/json",
                //     }
        
                // }).then((res) => res.json()).then(response => {
                //     console.log(response);
                //     console.log(response.status);
                //     if (response.status == true)
                //     {
                //         window.localStorage.setItem("token", response.data.token);
                //         window.localStorage.setItem("email", response.data.email);
                //         window.localStorage.setItem("id", response.data.id);
                //         alert(response.message);
                //         window.location.href = `/FrontPage/Index.html`;
                //         return;
                        
                //     }
            
                //     alert(resp.message);
                    
                   
                
               
            }

            swal({
                icon: 'success',
                title: `${response.message}`,
                background: 'blue'
             })
           
        })
    
       
};

