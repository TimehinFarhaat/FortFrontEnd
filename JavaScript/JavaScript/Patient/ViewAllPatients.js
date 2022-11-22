
var num = 0;

var GetPatients=document.getElementById('GetPatient')
async function GetAllPatients() {
    const getPatient = await fetch(`https://localhost:7013/api/Patient/GetAllPatients`);
    var get = getPatient.json();
    return get;
}
let displayPatient = async () => {
    var num = 0;
    var gets = await GetAllPatients();
    for (var dat of gets.data) {
        console.log(dat);
        num += 1;
        GetPatients.innerHTML += `
        <tr>
        <td data-column>${num}</td>
        <td data-column>${dat.userName}</td>
        <td data-column>${dat.age}</td>
        <td data-column>${dat.gender}</td>
        <td data-column>${dat.email}</td>
        <td data-column>${dat.phoneNumber}</td>
        <td data-column><button id="${dat.userId}" class="btn">Delete</button></td>

        </tr>
        `
        deletebtn()
    }
}
function deletebtn(){
    var getbtn = document.querySelectorAll(".btn")
    getbtn.forEach(e => {
        e.addEventListener('click', event => {
            DeleteAdmin(event.target.id)
          })
    })
}
displayPatient();


