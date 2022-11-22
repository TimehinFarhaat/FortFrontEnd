function GetUserQuestion()
{
    id = window.localStorage.getItem("id");
    fetch(`https://localhost:7013/api/Question/GetUserQuestions?id=${id}`).
        then(res => res.json()).then(resp =>
        {
            console.log(resp);
            console.log(resp.status);
            console.log(resp.data)
            if (resp.status == true)
            {
                const container = document.querySelector(".discussions-container");
                if (resp.data.length != 0)
                {
                   
                    for (let i = 0; i < resp.data.length; i++) {
    
                        console.log(resp.data.description);
                        let card = `<div class="element"  >`;
                        card += `<div class="content">${resp.data[0].description}</div>`
                        card += ` <button class="accuracy">Answers</button>`;
                        card += "</div>";
                        container.innerHTML += card;
                      }
                    return;   
                }
                else
                {
                    console.log(resp.data.description);
                        let card = `<div class="element"  >`;
                        card += `<div class="content">No Questions</div>`
                        card += "</div>";
                        container.innerHTML += card;
                }
            }
    
            alert(resp.message)
            return;
       })
}
GetUserQuestion();