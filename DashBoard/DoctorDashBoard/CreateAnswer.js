
console.log("The File...");
const submitBtn=document.querySelector("#submitButton")
const [quest, descriptionInput] = [document.querySelector("#form"),document.querySelector("#postContent")]
quest.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.cursor = "not-allowed";
  
  let questionId = window.location.href.split('?')[1];
    CreateAnswer(questionId);
    
})




function CreateAnswer(id)
{
    const quest = document.querySelector("#form");
    DoctorId = window.localStorage.getItem("id");
    console.log(descriptionInput.value)
    const data = {
        "description": descriptionInput.value,
    }
  fetch(`https://localhost:7013/api/Answer/AnswerQuestion?questionId=${id}&doctorId=${DoctorId}`,
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        }

    }).then((res) => res.json()).then(resp =>
    {
        console.log(resp);
        console.log(resp.status);
        if (resp.status == true)
        {
            swal({
                icon: 'success',
                title: `${resp.message}`,
                background: 'blue'
             })
            return;
        }

        swal({
            icon: 'error',
            title: `${resp.message}`,
            background: 'red'
         })
        return;
    })
}


