const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const form = document.querySelector('form')
const users = document.querySelector('.users')

form.addEventListener('submit', (events)=>{
    events.preventDefault()
    let name = inp1.value
    let email = inp2.value

    if(name.trim()==="" && name.trim()==="") return;

    users.innerHTML += `<div class="users_card">
            <div class="image_box">
                <img src="https://images.unsplash.com/photo-1791375681399-d5f1b9c23013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="">
            </div>
            <div class="text">
                <h3>Name-${name}</h3>
                <p>Email-${email}</p>
            </div>
        </div>`

        form.reset();
})