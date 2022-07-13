let email = document.getElementById('mail');
let pwd = document.getElementById('senha');



function twitter() {
    window.location.href = 'https://twitter.com/';
}

function facebook() {
    window.location.href = 'https://pt-br.facebook.com/';
}



function validaInput() {
    

    if (email.value.length === 0 || pwd.value.length === 0) {

        Toastify({
            text: "Campos E-mail ou Senha em brancos, Por Favor Preencha.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center", 
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #000000, #cecece)", 
            },
            onClick: function(){} 
          }).showToast();

          return false;

    } else {

        Toastify({
            text: "Usuario Logado, redirecionando...",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #000000, #cecece)", 
            },
            onClick: function(){} 
          }).showToast();

          setTimeout(function userLogado() {
            window.location.href = "./logado.html"
          }, 3000);
          
    }
        
}
