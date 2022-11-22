function DeleteQuestion()
{
    
    fetch(`https://localhost:7013/api/Answer/GetAnswersByDoctorId?id=${id}`).
        then(res => res.json()).then(resp =>
        {
            console.log(resp);
            console.log(resp.status);
            console.log(resp.data)
            if (resp.status == true)
            {
                console.log(resp.message)
                alert(resp.message);
            }
    
            alert(resp.message)
            return;
       })
}
GetUserQuestion();