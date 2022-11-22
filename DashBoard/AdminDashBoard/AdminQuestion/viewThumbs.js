var btn1 = document.querySelector("#green");
var btn2 = document.querySelector("#red");
console.log(btn1)


function AddLike(id)
{
    console.log(btn1);
    console.log(btn2.classList.contains('red'));
    if (btn2.classList.contains('red'))
        {
          btn2.classList.remove('red');
        } 
        this.classList.toggle('green');
        fetch(``).then(res => res.json()).then(resp =>
        {
            if (resp.status == true)
           {
                alert(resp.message);
                return;
            }
            else
            {
                alert(resp.message);
                return;
            }
      })
      
}


function RemoveLike(id)
{
    console.log(btn2)
    console.log(btn2.classList.contains('green'));

        if (btn1.classList.contains('green')) {
          btn1.classList.remove('green');
        } 
        this.classList.toggle('red');
        fetch(``).then(res => res.json()).then(resp =>
        {
            if (resp.status == true)
            {
                alert(resp.message);
                return;
            }
          else
           {
                alert(resp.message);
               return;
           }
        })
}



