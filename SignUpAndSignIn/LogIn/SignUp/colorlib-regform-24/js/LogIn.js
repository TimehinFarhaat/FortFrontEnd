console.log("The File...");
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.cursor="not-allowed"; 
    Login();
})
let Login= () => {
    
    const data = new FormData(form);
    console.log(form);
    console.log(data);
    console.log(data.get("emailAddress")) 
    console.log(data.get("passWord"))
    const params = {
        password:data.get("passWord"),
        emailaddress: data.get("emailAddress"),
       
    }
    
    
    fetch('https://localhost:7013/api/User/Login',
        {
        method: 'POST',
            body: JSON.stringify(params),
            headers: {
                "content-type": "application/json",
            }

        }).then((res) => res.json()).then(resp => {
            console.log(resp);
            console.log(resp.status);
            if (resp.status == true)
            {

               
                window.localStorage.setItem("token", resp.data.token);
                window.localStorage.setItem("email", resp.data.email);
                window.localStorage.setItem("id", resp.data.id);
                // window.location.href = ` `;
                swal({
                    icon: 'success',
                    title: `${resp.message}`,
                 })
                resp.data.userRoles.forEach(x => {
                    if (x.name === "Admin")
                    {
                        location.href = `/DashBoard/AdminDashBoard/AdminDashBoard.html`;
                    }
                    else if (x.name === "Patient")
                    {
                        location.href = `/DashBoard/PatientDashBoard/PatientDashBoard.html`; 
                    }
                    else
                    {
                        location.href = `/DashBoard/DoctorDashBoard/DoctorDashBoard.html`
                    }
                });
            

               
                return;
            }
            swal({
                icon: 'error',
                
                title: `${resp.message}`,
            })
            return
        
        })
};