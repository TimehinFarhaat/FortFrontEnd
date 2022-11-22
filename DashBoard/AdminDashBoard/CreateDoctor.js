console.log("The File...");
const form = document.querySelector("#form");
submitBtn=document.querySelector("#submit-btn")
form.addEventListener('submit', (e) => {
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.cursor = "not-allowed";
    e.preventDefault();
    CreateDoctor();
    return;
    
})
let CreateDoctor= () => {
    let sendform = new FormData(form);
    console.log(sendform.get("emailAddress")) 
    console.log(sendform.get("passWord"))
    console.log(sendform);
    fetch('https://localhost:7013/api/Doctor/RegisterDoctor?id=1',
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
                    title: `${resp.message}`,
                    background: 'blue'
                 })
                return; 
            }
            else {
                alert(resp.message)
                return;

            }
    
            
           
        })
    
       
};

