console.log("while");
var issueId=window.location.href.split('?')[1]
console.log(issueId);
// const issueId= new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
// });

async function getResponse(issueId) {
      
    if (issueId == null) {
        alert("An error occured");
    
    }
    else {
        const params = {
            id: issueId,
            language: "en-gb",
            format: "json",
        };
        console.log(issueId);
        const issueInfoResponse = await displayInfo(params);
        console.log(issueInfoResponse);
        return issueInfoResponse;
    }
  }

  
async function displayResult() {
    var answer =  await getResponse(issueId);
    console.log(answer);
    
    if (!answer) {
        // todo: Change to display a user-friendly error
        alert("An error occurred");
        
    }
    else {
        
              const container = document.querySelector(".issue-container")
               console.log(container)
             console.log(answer)
              // let answers = Object.keys(answer);
              // answers.forEach((ans) => {
              //     console.log(`${answer[ans]} and ${ans}`)
              // })
               const a = answer;
              for (var key of Object.keys(answer))
              {
                
                  if (answer[key] != null)
                  {
                    console.log(key + " -> " + answer[key])
                    let card = `<div class=".element" >`;
                      if (key == "Name" )
                      {
                        card += ` <div class="accuracy">Common Name</div>`;
                        card += `<div>${ answer[key]}</div>`;
                      }
                      else if (key =="DescriptionShort")
                      {
                        card += ` <div class="accuracy">Short-Description</div>`;
                        card += `<div>${ answer[key]}</div>`;
                      }
                      else if (key =="ProfName")
                      {
                        card += ` <div class="accuracy">Professional Name</div>`;
                        card += `<div>${ answer[key]}</div>`;
                    }
                      else {
                        card += ` <div class="accuracy">${key}</div>`;
                        card += `<div>${ answer[key]}</div>`;
                    }
                    
                    card += "</div>";
                    container.innerHTML += card;
                }
      }
      return a;
        // for (const key in answer) {
                
        //             console.log(answer[key]);
        //             let card = `<div class="element" id="change-radius" >`;
        //             card += answer[key];
        //             card += ` <h1 class="accuracy">Accuracy:${answer[key]}</h1>`;
        //             card += "</div>";
        //           container.innerHTML += card;
                
        //      } 
      }
   {

         
 }
}

        
        
      

    

  


