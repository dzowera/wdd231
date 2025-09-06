const buttonElement = document.querySelector('.ham-menu');
    const navElement = document.querySelector('nav');
    buttonElement.addEventListener('click', ()=>{
      navElement.classList.toggle('add-x');

      
      

      if(navElement.classList.contains('add-x')){
        buttonElement.innerHTML = `&times;`;
      }else{
        buttonElement.innerHTML = `&#9776;`;
      }
    });

    document.querySelectorAll('nav ul li').forEach(link =>{
      link.addEventListener('click', () =>{
        navElement.classList.remove('add-x');
        buttonElement.innerHTML = `&#9776;`;
      });
    });