var GetUsers=document.getElementById('GetUsers')
async function GetAllUsers() {
    const getUsers = await fetch(`https://localhost:7013/api/User/GetUsers
    `);
    var get = getUsers.json();
    return get;
}
let displayUser = async () => {
    var num = 0;
    var gets = await GetAllUsers();
    for (var dat of gets.data) {
        console.log(gets.dat)
        num += 1;
        GetUsers.innerHTML += `
        <tr>
        <td data-column>${num}</td>
        <td data-column>${dat.userName}</td>
        <td data-column>${dat.age}</td>
        <td data-column>${dat.gender}</td>
        <td data-column>${dat.email}</td>
        <td data-column>${dat.phonenumber}</td>
        <td data-column>Delete</td>
        </tr>
        `
    }
}
displayUser();