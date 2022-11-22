console.log("The File...");

const [quest, descriptionInput] = [document.querySelector("#form"),document.querySelector("#postContent")]
quest.addEventListener('submit', (e) => {
    e.preventDefault();
    CreateQuestion();
    
})




function CreateQuestion()
{
    const quest = document.querySelector("#form");
    id = window.localStorage.getItem("id");
    console.log(descriptionInput.value)
    const data = {
        "description": descriptionInput.value,
    }
    fetch(`https://localhost:7013/api/Question/AskQuestion?id=${id}`,
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
            alert(resp.message)
            return;
        }

        alert(resp.message)
        return;
    })
}


