console.log("The File...");
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.cursor="not-allowed"; 
    SignUp();
    
})
let SignUp = () => {
    const data = new FormData(form);
    console.log(data);
    console.log(data.get("emailAddress")) 
    console.log(data.get("passWord"))
    
    fetch('https://localhost:7013/api/Patient/RegisterPatient',
        {
            method: 'POST',
            body: data,

        }) .then((res) => res.json()).then(resp => {
            console.log(resp);
            console.log(resp.status);
            if (resp.status == true)
            {
                const params = {
                    emailaddress: data.get("emailAddress"),
                    password:data.get("passWord"),
                }
                console.log(params)
                 fetch('https://localhost:7013/api/User/Login',
                {
                method: 'POST',
                    body: JSON.stringify(params),
                    headers: {
                        "content-type": "application/json",
                    }
        
                }).then((res) => res.json()).then(response => {
                    console.log(response);
                    console.log(response.status);
                    if (response.status == true)
                    {

                        window.localStorage.setItem("token", response.data.token);
                        window.localStorage.setItem("email", response.data.email);
                        window.localStorage.setItem("id", response.data.id);
                        console.log(response.message);
                        swal({
                            icon: 'success',
                            title: `${response.message}`,
                            
                         })
                        response.data.userRoles.forEach(x => {
                            if (x.name === "Admin")
                            {
                                location.href = `/DashBoard/AdminDashBoard/AdminDashBoard.html`;
                            }
                            else if (x.name === "Patient")
                            {
                                location.href = `DashBoard/  PatientDashBoard/PatientDashBoard.html`; 
                            }
                            else
                            {
                                location.href = `/DashBoard/DoctorDashBoard/DoctorDashBoard.html`
                            }
                        });  

                
                    }
            
                    
                   
                })
               
            }
    
            swal({
                icon: 'error',
                title: `${resp.message}`,
             })
            
           
        })
    
       
};

