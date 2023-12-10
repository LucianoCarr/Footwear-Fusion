
window.onload = function (){

    document.getElementById('name').addEventListener('focus',function(e){
        document.getElementById('errorName').innerHTML = null;
        this.classList.remove('invalido')
    })

    document.getElementById('name').addEventListener('blur',function(e){
        
        switch (true) {
            case !this.value.trim():
                document.getElementById('errorName').innerHTML = 'El nombre es obligatorio ';
                   this.classList.add('invalido')
                break;
                case  !/^[A-Za-z\s]+$/.test(this.value):
                    document.getElementById('errorName').innerHTML = 'No se permiten numeros ';
                    this.classList.add('invalido')
                    break;
                case this.value.length < 3:
                    document.getElementById('errorName').innerHTML = 'Minimo 3 caracteres!!';
                        this.classList.add('invalido')
                break;    
            default:
                document.getElementById('errorName').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido');
                 
                break;
        }
        
    })
    //---------------------------------------
    document.getElementById('lastName').addEventListener('focus',function(e){
        document.getElementById('errorlastName').innerHTML = null;
        this.classList.remove('invalido')
    })

    document.getElementById('lastName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                document.getElementById('errorlastName').innerHTML = 'El apellido es obligatorio ';
                this.classList.add('invalido');
                break;
            case !/^[A-Za-z\s]+$/.test(this.value):
                document.getElementById('errorlastName').innerHTML = 'No se permiten numeros ';
                this.classList.add('invalido');
                break;
            case this.value.length < 3:
                document.getElementById('errorlastName').innerHTML = 'Minimo 3 caracteres!!';
                this.classList.add('invalido');
                break;
            default:
                document.getElementById('errorlastName').innerHTML = null;
                this.classList.remove('invalido');
                this.classList.add('valido');
                break;
        }
    });
    //------------------Email-------------------//
    document.getElementById('email').addEventListener('focus',function(e){
        document.getElementById('errorEmail').innerHTML = null;
        this.classList.remove('invalido')
    })
    document.getElementById('email').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   document.getElementById('errorEmail').innerHTML = 'El email es obligatorio';
                   this.classList.add('invalido')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                document.getElementById('errorEmail').innerHTML = 'El email es invalido';
                this.classList.add('invalido')
                break;           
            default:
                document.getElementById('errorEmail').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    }) 
    //-------------------EMAIL--------------//
    document.getElementById('email').addEventListener('change',async function(e){
       
        try {
          const response = await fetch(`/api/check-email?email=${this.value}`) 
          const result = await response.json()
          
          if(result.data){
            document.getElementById('errorEmail').innerHTML = 'El mail ya fue registrado '
            this.classList.add('invalido')
          }
        } catch (error) {
            console.log(error);
        }
    })


    //-------------------password--------------//
    document.getElementById('password').addEventListener('focus',function(e){
        document.getElementById('errorPassword').innerHTML = null;
        this.classList.remove('invalido')
    })
    document.getElementById('password').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   document.getElementById('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.add('invalido')
                break;
                case !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(this.value):
                    document.getElementById('errorPassword').innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres, incluyendo al menos una mayúscula y números';
                    this.classList.add('invalido');
                    break;
            default:
                document.getElementById('errorPassword').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })
    //-------------------password2--------------//

    document.getElementById('password2').addEventListener('focus',function(e){
        document.getElementById('errorPassword2').innerHTML = null;
        this.classList.remove('invalido')
    })
    document.getElementById('password2').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   document.getElementById('errorPassword2').innerHTML = 'Debes confirmar tu contraseña';
                   this.classList.add('invalido')
                break;
            case this.value.trim() !== document.getElementById('password').value.trim():
                    document.getElementById('errorPassword2').innerHTML = 'Las contraseñas no coinciden';
                    this.classList.add('invalido');
                break;
            default:
                document.getElementById('errorPassword2').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })

    //-------------------password button eye--------------//
    document.getElementById('button-eye').addEventListener('click', function (e) {
        document.getElementById('errorPassword').innerHTML = null;
        document.getElementById('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = document.getElementById('password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------password button eye2--------------//
    document.getElementById('button-eye2').addEventListener('click', function (e) {
        document.getElementById('errorPassword').innerHTML = null;
        document.getElementById('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = document.getElementById('password2');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------validando campos vacios--------------//
/*     document.getElementById('formAdd').addEventListener('submit',function(e){
        e.preventDefault()
    
        const elementForm = document.getElementById('formAdd').elements
        let error = false
    
        for (let i = 0; i < elementForm.length; i++) {
            
            if (!elementForm[i].value.trim() || elementForm[i].classList.contains('invalido')){
                elementForm[i].classList.add('invalido')
                document.getElementById('errores').innerHTML = 'Hay errores en la carga de datos'
                error = true
            }
            
        }
            if (!error) {
            this.submit();
        }}) */
}