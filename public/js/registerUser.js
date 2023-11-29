const s = id => document.getElementById(id);

window.onload = function (){

    s('name').addEventListener('focus',function(e){
        s('errorName').innerHTML = null;
        this.classList.remove('invalido')
    })

    s('name').addEventListener('blur',function(e){
        
        switch (true) {
            case !this.value.trim():
                s('errorName').innerHTML = 'El nombre es obligatorio ';
                   this.classList.add('invalido')
                break;
                case  !/^[A-Za-z]+$/.test(this.value):
                    s('errorName').innerHTML = 'No se permiten numeros ';
                    this.classList.add('invalido')
                    break;
                case this.value.length < 3:
                        s('errorName').innerHTML = 'Minimo 3 caracteres!!';
                        this.classList.add('invalido')
                break;    
            default:
                s('errorName').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido');
                 
                break;
        }
        
    })
    //---------------------------------------
    s('lastName').addEventListener('focus',function(e){
        s('errorlastName').innerHTML = null;
        this.classList.remove('invalido')
    })

    s('lastName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                s('errorlastName').innerHTML = 'El apellido es obligatorio ';
                this.classList.add('invalido');
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                s('errorlastName').innerHTML = 'No se permiten numeros ';
                this.classList.add('invalido');
                break;
            case this.value.length < 3:
                s('errorlastName').innerHTML = 'Minimo 3 caracteres!!';
                this.classList.add('invalido');
                break;
            default:
                s('errorlastName').innerHTML = null;
                this.classList.remove('invalido');
                this.classList.add('valido');
                break;
        }
    });
    //------------------Email-------------------//
    s('email').addEventListener('focus',function(e){
        s('errorEmail').innerHTML = null;
        this.classList.remove('invalido')
    })
    s('email').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   s('errorEmail').innerHTML = 'El email es obligatorio';
                   this.classList.add('invalido')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                s('errorEmail').innerHTML = 'El email es invalido';
                this.classList.add('invalido')
                break;           
            default:
                s('errorEmail').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    }) 
    //-------------------EMAIL--------------//
    s('email').addEventListener('change',async function(e){
       
        try {
          const response = await fetch(`/api/check-email?email=${this.value}`) 
          const result = await response.json()
          
          if(result.data){
            s('errorEmail').innerHTML = 'El mail ya fue registrado '
            this.classList.add('invalido')
          }
        } catch (error) {
            console.log(error);
        }
    })


    //-------------------password--------------//
    s('password').addEventListener('focus',function(e){
        s('errorPassword').innerHTML = null;
        this.classList.remove('invalido')
    })
    s('password').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   s('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.add('invalido')
                break;
                case !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(this.value):
                    s('errorPassword').innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres, incluyendo al menos una mayúscula y números';
                    this.classList.add('invalido');
                    break;
            default:
                s('errorPassword').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })
    //-------------------password2--------------//

    s('password2').addEventListener('focus',function(e){
        s('errorPassword2').innerHTML = null;
        this.classList.remove('invalido')
    })
    s('password2').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   s('errorPassword2').innerHTML = 'Debes confirmar tu contraseña';
                   this.classList.add('invalido')
                break;
            case this.value.trim() !== s('password').value.trim():
                    s('errorPassword2').innerHTML = 'Las contraseñas no coinciden';
                    this.classList.add('invalido');
                break;
            default:
                s('errorPassword2').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })

    //-------------------password button eye--------------//
    s('button-eye').addEventListener('click', function (e) {
        s('errorPassword').innerHTML = null;
        s('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = s('password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------password button eye2--------------//
    s('button-eye2').addEventListener('click', function (e) {
        s('errorPassword').innerHTML = null;
        s('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = s('password2');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------validando campos vacios--------------//
    s('formAdd').addEventListener('submit',function(e){
        e.preventDefault()
    
        const elementForm = s('formAdd').elements
        let error = false
    
        for (let i = 0; i < elementForm.length; i++) {
            
            if (!elementForm[i].value.trim() || elementForm[i].classList.contains('invalido')){
                elementForm[i].classList.add('invalido')
                s('errores').innerHTML = 'Hay errores en la carga de datos'
                error = true
            }
            
        }
            if (!error) {
            this.submit();
        }})
}