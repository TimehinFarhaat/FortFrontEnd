function GetUserCheckups()
{
  var id = window.localStorage.getItem("id")
  console.log(id);
    fetch(`https://localhost:7013/api/Checkup/GetPreviousDiagnose?Id=${id}`,
    {
        method: "GET",
        headers: {
            "content-type" : "application/json"
        }

    }).then((res) => res.json()).then(resp => {
      console.log(resp.status);
      
      const container = document.querySelector("#card-container");
      console.log(container);
        if (resp.status === true)
        {
          console.log(resp);
        
      
            if (resp.data.length ==0)
            {
              let card = `<div class="element" id="change-radius" >`;
              card += `<div>No Checkup History Exists </div>`;
              card += ` <div class="accuracy"></div>`;
              card += "</div>";
              container.innerHTML += card;
            }
            else
            {
              console.log("sdfghjkl")

              
              
                console.log(resp.data.name,1);
                console.log(resp, 2)
              let card = `<div class="element" id="change-radius">`;
              card += `<div class="accuracy">DATE</div>`
              card +=`<div class="word">${resp.data.dateTime}</div>`
                card += `<div class="accuracy">SYMPTOMS</div>`
                for (let j= 0; j< resp.data.symptomDto.length; j++){
                  console.log(resp.data.symptomDto.length,9)
                  console.log(resp.data.symptomDto[j].symptomName,3);
                  card += `<div class="word">${resp.data.symptomDto[j].symptomName}</div>`
                }
                card += `<div class="accuracy">Name</div>`
              card += `<div class="word">${resp.data.name}</div>`
              card += `<div></div>`              
                card += `<div class="accuracy">DESCRIPTION</div>`
                card += `<div></div>`
                card += `<div class="word">${resp.data.description}</div>`
                card += "</div>";
                console.log(card)
                container.innerHTML += card;
                console.log(container);
              
            }
            return;
      }
        else {
          let card = `<div class="element" id="change-radius" >`;
          card += `<div>No Checkup</div>`;
          card += ` <div class="accuracy"></div>`;
          card += "</div>";
          container.innerHTML += card;
      }

        alert(resp.message);
        
       
    })
   
}
GetUserCheckups()