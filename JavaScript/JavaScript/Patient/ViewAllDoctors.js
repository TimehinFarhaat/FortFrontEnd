var num = 0;

var GetDoctors=document.getElementById('GetDoctor')
async function GetAllDoctors() {
    const getDoctors = await fetch(`https://localhost:7013/api/Doctor/GetAllDoctors`);
    var get = getDoctors.json();
    return get;
}
let displayDoctor = async () => {
    var num = 0;
    var gets = await GetAllDoctors();
    for (var dat of gets.data) {
        num += 1;
        GetDoctors.innerHTML += `
        <tr>
        <td data-column>${num}</td>
        <td data-column>${dat.userName}</td>
        <td data-column>${dat.age}</td>
        <td data-column>${dat.gender}</td>
        <td data-column>${dat.phonenumber}</td>
        <td data-column>${dat.email}</td>
        <td data-column><button id="${dat.id}" class="btn">Delete</button></td>
        
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
displayDoctor();
