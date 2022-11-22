const id = window.localStorage.getItem("id");
console.log(id);

function GetUserAnswers(id)
{
    fetch(`https://localhost:7013/api/Answer/GetAnswersByDoctorId?Doctorid=${id}`).
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
    
                        console.log(resp.data[i].description);
                        let card = `<div class="element"  >`;
                        card += `<div class="content">${resp.data[i].questionDescription}</div>`
                      card += `<div class="content">${resp.data[i].description}</div>`
                      card += `<div>
                      <button class="btn" id="green" style="color:green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
                      <span>${resp.data[i].positiveRating}</span>
                      <button class="btn" id="red" style="color:red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
                      <span>${resp.data[i].negativeRating}</span>
                      </div>`
                        container.innerHTML += card;
                    }
                
                }
                else
                {
                    console.log(resp.data.description);
                        let card = `<div class="element"  >`;
                        card += `<div class="content">Not answered any question</div>`
                        card += "</div>";
                        container.innerHTML += card;
                }
            }
            swal({
                icon: 'success',
                title: `${resp.message}`,
                background: 'purple',
                type: 'success'
             })
            return;
       })
}
GetUserAnswers(id);