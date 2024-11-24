    const addbtn =document.getElementById('addbtn');
    const form = document.getElementById('form');
    const exitbtn =document.getElementById('exitbtn');
    const add =document.getElementById('add');
    const todoCard =document.getElementById('todo');
    const doingCard =document.getElementById('doing');
    const doneCard =document.getElementById('done');
    

     taskarray = [];


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
     
     const title =document.getElementById('title').value;
     const description =document.getElementById('description').value;
     const status =document.getElementById('status').value;
     const priority =document.getElementById('Priority').value;
     
     let detectError = false;

     const newtask = {
         title: title,
         description: description,
         status: status,
         priority: priority,
     };
      
     taskarray.push("newtask");
     
      
    

     

      

    });
  
   


    add.addEventListener('click',function regex(e){
      e.preventDefault();
        const title =document.getElementById('title');
        const description =document.getElementById('description');
        const titleError =document.getElementById('error-title');
        const descriptionError =document.getElementById('error-description');
        // const cardscomtainer =document.getElementById('cards-container');
        
        let detectError =false;

        if(title.value.trim() === ''){
            detectError =true;
            titleError.style.display='block';
            title.classList.add('errorStyle');
        }else{
            titleError.style.display ='none';
            title.classList.remove('errorStyle');
        }
        if(description.value.trim() === ''){
            detectError =true;
            descriptionError.style.display='block';
            description.classList.add('errorStyle');
        }else{
            descriptionError.style.display ='none';
            description.classList.remove('errorSyle');
        }

        




    });