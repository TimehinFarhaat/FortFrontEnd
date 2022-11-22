function GetDoctorDetails() {

    console.log("hfjfgfhgfjgh");
    var email = localStorage.getItem("email")
    
    fetch(`https://localhost:7013/api/Doctor/GetDoctorDetailsByEmail` + email,
    ).then((res) => res.json())
        .then(resp => {
            console.log("hfjfgfhgfjgh");
            console.log(resp.status);
            if (resp.status == true) {
                const table = document.querySelector("#table-Body")
                resp.data.table.innerHTML += `
            <thead>
                <tr>
                    <td>${data.Id}</td>
                    <td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>${data.age}</td>
                    <td>${data.email}</td>
                    <td>${data.phoneNumber}</td>
                </tr>
            </thead>
            `
                document.getElementsByClassName("mb-0").value = data.userName
            }

            alert(resp.message)
        })
}


function viewAllDoctors() {
    var num = 0;
    console.log("hfjfgfhgfjgh");
    fetch('https://localhost:7013/api/Doctor/GetAllDoctors',
    ).then((res) => res.json())
        .then(resp => {
            console.log("hfjfgfhgfjgh");
            console.log(resp.status);
            if (resp.status == true) {
                const table = document.querySelector("#table-Body")
                resp.data.forEach(element => {
                    num += 1;
                    table.innerHTML += `
                <thead>
                    <tr>
                        <td>${num}</td>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.age}</td>
                        <td>${element.email}</td>
                        <td>${element.phoneNumber}</td>
                        <td>${element.specialization}</td>
                    </tr>
                </thead>
                `
                });
            
            }

            alert(resp.message);
        })
    }            
    

