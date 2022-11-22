function GetUserCheckups()
{
  var id=window.localStorage.getItem("id")
    fetch(`https://localhost:7013/api/Checkup/GetDiagnoseByUser?id=${id}`,
    {
        method: 'GET',
        headers: {
            "content-type" : "application/json"
        }

    }).then((res) => res.json()).then(resp => {
        console.log(resp);
        console.log(resp.status);
        if (resp.status === true)
        {
        
          const container = document.querySelector("#card-container");
          console.log(container);
      
            if (resp.data.length ==0)
            {
              let card = `<div class="element" id="change-radius" >`;
              card += `<div>No Checkup</div>`;
              card += ` <div class="accuracy"></div>`;
              card += "</div>";
              container.innerHTML += card;
            }
            else
            {
              console.log("sdfghjkl")

              for (let i = 0; i < resp.data.length; i++) {
              
                console.log(resp.data[i].name,1);
                console.log(resp, 2)
                let card = `<div class="element" id="change-radius">`;
                card += `<div class="accuracy">DATE</div>`
                card +=`<div class="word">${resp.data[i].dateTime}</div>`
                card += `<div class="accuracy">SYMPTOMS</div>`
                for (let j= 0; j< resp.data[i].symptomDto.length; j++){
                  console.log(resp.data[i].symptomDto.length,9)
                  console.log(resp.data[i].symptomDto[j].symptomName,3);
                  card += `<div class="word">${resp.data[i].symptomDto[j].symptomName}</div>`
                }
                card+=`<div></div>`
                card += `<div class="accuracy">Name</div>`
                card += `<div class="word">${resp.data[i].name}</div>`
                card += `<div></div>`
                card += `<div class="accuracy">DESCRIPTION</div>`
                card += `<div class="word">${resp.data[i].description}</div>`
                card += "</div>";
                console.log(card)
                container.innerHTML += card;
                console.log(container);
              }
            }
            return;
        }

        alert(resp.message);
        
       
    })
   
}
GetUserCheckups()