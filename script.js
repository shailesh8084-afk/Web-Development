const form = document.querySelector('form')
const inp1= document.querySelector('#name');
const inp2= document.querySelector('#email');


form.addEventListener('submit', (events) => {
    // events.preventDefault() ye form ko reload hone se rukta h 
    let name = inp1.value;
    let email = inp2.value;
    console.log(name,email);
    // form.reset(); isse form reset hota h taki dubara kuchh likh sake 
})