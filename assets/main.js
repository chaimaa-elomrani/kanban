    const addbtn =document.getElementById('addbtn');
    const form = document.getElementById('form');
    const exitbtn =document.getElementById('exitbtn');
    const add =document.getElementById('add')

     taskarray =[];


    form.style.display="none"
    addbtn.addEventListener('click',function(e){
        e.preventDefault();
        form.style.display="block"
    })

    
    exitbtn.addEventListener('click', function(e){
      e.preventDefault();
      form.style.display="none";
    })


    add.addEventListener('click',function affichage(e){
    e.preventDefault();

     const title =document.getElementById('title');
     const description =document.getElementById('description');
     const status =document.getElementById('status');
     const priority =document.getElementById('priority');


     const newtask = {
         title: title.value ,
         description: description.value ,
         status: status.value,
         priority: priority.value,
     };





    })