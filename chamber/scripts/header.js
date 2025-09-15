function toggleMenu(){
  const hamMenu = document.querySelector('#ham-menu');
  const navElem = document.querySelector('#nav');

  hamMenu.addEventListener('click', () =>{
    navElem.classList.toggle('js-nav'); 
    
    if(navElem.classList.contains('js-nav')){
      hamMenu.innerHTML = `&times`;
    }else{
      hamMenu.innerHTML = `&#9776;`;
    }

  });
}
toggleMenu();


function clickLink(){
  document.querySelectorAll('.element').forEach((element) =>{
    element.addEventListener('click', ()=>{
      navElem.classList.remove('js-nav');
      hamMenu.innerHTML = `&#9776;`;
    });
 });
}
clickLink();