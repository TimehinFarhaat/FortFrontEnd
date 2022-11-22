async function createCheckup()
{
    const p = await displayResult();
    const b = p;
    var describe=" ";
    console.log(b)
for (var key of Object.keys(b))
    {
      if (b[key] == undefined)
      {
            
    }
      else {
        if (key == "Name") {
            describe+="The Common name is"
        
        }
        if (key == "ProfName") {
           describe+="The proffessional name is"
        }
        
        describe += b[key];
    }
      
        
    }
    console.log(describe)
    console.log(b.Name)
    var get = window.localStorage.getItem('symtom').split(",");
    console.log(get);
    var symptoms = get;
    const data =
    {
        "symptoms":symptoms,
        "name": b.Name,
        "description":describe
    };
  
    await create(data);
}
async function create(data)
{
    const  id = window.localStorage.getItem("id");
    console.log(id)
    console.log(data.description)

    https://localhost:7013/api/Checkup/CreateDiagnosis/1

    await fetch(`https://localhost:7013/api/Checkup/CreateDiagnosis?id=${id}`,
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        }
        

    }).then((res) => res.json()).then(resp => {
        console.log(resp);
        console.log(resp.status);
        if (resp.status == true) {
            alert(resp.message)
        }
        else if(resp.status == false)
        {
            alert(resp.message)
         }
        
       
    })
}
createCheckup();
 
// let sympt = localStorage.getItem("diagnoseId");
// let string=window.localStorage.getItem("empty")
//     if (string !== sympt)
//     {
//         string = sympt;
//         window.localStorage.setItem("empty", string)
//         createCheckup();

//     }

