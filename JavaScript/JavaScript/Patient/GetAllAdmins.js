var GetAdmins = document.getElementById('GetAdmins')
 var alldataemails = document.getElementsByClassName
async function GetAllAdmins() {
    const getAdmins = await fetch(`https://localhost:7013/api/Admin/GetAllAdmins`);
    var get = getAdmins.json();
    return get;
}
let displayAdmin = async () => {
    var num = 0;
    var gets = await GetAllAdmins();
    for (var dat of gets.data) {
        num += 1;
        GetAdmins.innerHTML += `
        <tr>
        <td data-column>${num}</td>
        <td data-column>${dat.userName}</td>
        <td data-column>${dat.age}</td>
        <td data-column>${dat.gender}</td>
        <td data-column class="dataEmail">${dat.email}</td>
        <td data-column>${dat.phonenumber}</td>
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
displayAdmin();