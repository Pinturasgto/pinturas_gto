const btn=document.getElementById('button');
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
btn.value="Enviando tu comentario";
const serviceID='default_service';
const templateID='template_rjlmmxc';
emialjs.sendForm(serviceID,templateID,this).then(()=>{btn.value('Enviado!!!!');
alert('Correo enviado con exito ,gracias por tu opinion :)');
}, (err)=>{
btn.value='correo enviado ';
alert(JSON.stringify(err));
});
});
