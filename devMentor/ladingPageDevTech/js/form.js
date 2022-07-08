function submitForm() {
    


    let campoEmail = document.getElementById('email');

    dadosInput = campoEmail.value

    if (dadosInput.length === 0) {

        Toastify({
            text: "Campo E-mail Obrigatório",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();


        return false;

    }else {
        
        Toastify({
            text: "Contato enviado Com Sucesso :)",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();
       


    }


    
}