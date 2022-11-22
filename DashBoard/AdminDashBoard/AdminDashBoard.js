var id = window.localStorage.getItem("id");
console.log(id);
async function GetAdmin() {
    const GetAdmin= await fetch(`https://localhost:7013/api/Admin/GetAdminDetailsById?id=${id}`);
    var get = GetAdmin.json();
    return get;
}
let displayAdminInfo = async () => {
    var gets = await GetAdmin();
  console.log(gets.data)
  const name = document.querySelector(".name")
    console.log(name);
    console.log(gets)
    name.textContent=gets.data.userName
     
}
displayAdminInfo();



