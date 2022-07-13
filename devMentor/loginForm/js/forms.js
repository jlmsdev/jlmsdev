let email = document.getElementById('email');
let pwd = document.getElementById('senha');


function urlLogado() {
    window.location.href = "./logado.html";
}

function twitter() {
    window.location.href = 'https://twitter.com/';
}

function facebook() {
    window.location.href = 'https://pt-br.facebook.com/';
}



function validaInput() {
    

    if (email.value.length === 0) {
        
        Toastify({
            text: "Por Favor, Preencha o Campo E-mail",
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


    } else if (pwd.value.length === 0) {
        
        Toastify({
            text: "Por Favor, Preencha o Campo Senha",
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


          setTimeout(urlLogado, 3000);
          
    }
        
}
