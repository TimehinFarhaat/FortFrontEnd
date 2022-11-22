var num = 0;

var GetDoctors=document.querySelector("#GetDoctor")
async function GetAllDoctors() {
    const getDoctors = await fetch(`https://localhost:7013/api/Doctor/GetAllDoctors`);
    var get = getDoctors.json();
    return get;
}
let displayDoctor = async () => {
    var num = 0;
    var gets = await GetAllDoctors();
    console.log(gets.data);
    for (var dat of gets.data) {
        num += 1;
        GetDoctors.innerHTML += `
        <tr>
        <td data-column>${num}</td>
        <td data-column>${dat.userName}</td>
        <td data-column>${dat.age}</td>
        <td data-column>${dat.gender}</td>
        <td data-column>${dat.phoneNumber}</td>
        <td data-column>${dat.email}</td>
        <td data-column><button id="${dat.id}" class="btn">Delete</button></td>
        <td data-column><button id="${dat.id}" class="btn1">view answers</button></td>
        
        </tr>
        `
        deletebtn()
        getAnswers()
    }
}
function deletebtn(){
    var getbtn = document.querySelectorAll(".btn")
    getbtn.forEach(e => {
        e.addEventListener('click', event => {
            DeleteDoctor(event.target.id)
          })
    })
}

function getAnswers(){
    var getbtn = document.querySelectorAll(".btn1")
    getbtn.forEach(e => {
        e.addEventListener('click', event => {
            window.location.href = `/DashBoard/AdminDashBoard/DisplayDoctorAnswers.html?${event.target.id}`;
          
          })
    })
}
displayDoctor();


