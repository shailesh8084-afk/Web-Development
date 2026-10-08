const btn= document.querySelector('button');
const div= document.querySelector('div');
const main= document.querySelector('main');
const body = document.body;

btn.addEventListener('click', function (){
    console.log('button triggered');
},
true
);

div.addEventListener('click', function (){
    console.log('div triggered');
},
true
);

main.addEventListener('click', function (){
    console.log('main triggered');
},
true
);

body.addEventListener('click', function (){
    console.log('body triggered');
},
true
);