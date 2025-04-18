document.getElementById("btn-login").addEventListener("click", login); 

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intente de nuevo",
        confirmButtonColor: "#8b0000",
        html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/a3503508-b71b-4f5c-97a6-92c198415019/bltQAXVEd4.json"></iframe> <br><p>' + ptext + " </p>", 
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;

    let username = "cenfo";
    let password = "123";
 
    let input = [user_input, pass_input]; 

    let input_id = ["in-txt-user", "in-txt-pass"];

    let error_count = 0; 

    let text = "";

    for (let i = 0; i < input.length; i++) {

        document.getElementById(input_id[i]).classList.remove("error"); 

        if (input[i] == "") { 
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);

            document.getElementById(input_id[i]).classList.add("error"); 

            error_count++;
        }
    }

    if (error_count == 0) {  

        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Acceso correcto",
                showConfirmButton: false,
                customClass: {                 
                    title: 'formatos1',                      
                },
                timer: 5000,
                html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/7fc1984e-e867-461b-87c1-f2085bd45b32/Ab0Ti5hWZt.lottie"></iframe> <br><br><p>Esperar un momento...</p>',                
            }).then(() => {

                window.location.href = "landing.html", "blank"; 
            });

        } else {
            text = "Usuario o contraseña incorrecta."; 
            validation_alert(text);
        }
    }
}

function limpiar(){
    document.getElementById('in-txt-user').value = "";
    document.getElementById('in-txt-pass').value = "";
}