const $ = id => document.getElementById(id);

window.onload = function (){

    $('name').addEventListener('focus',function(e){
        $('errorName').innerHTML = null;
        this.classList.remove('invalido')
    })

    $('name').addEventListener('blur',function(e){
        
        switch (true) {
            case !this.value.trim():
                $('errorName').innerHTML = 'El nombre es obligatorio ';
                   this.classList.add('invalido')
                break;
                case  !/^[A-Za-z]+$/.test(this.value):
                    $('errorName').innerHTML = 'No se permiten numeros ';
                    this.classList.add('invalido')
                    break;
                case this.value.length < 3:
                        $('errorName').innerHTML = 'Minimo 3 caracteres!!';
                        this.classList.add('invalido')
                break;    
            default:
                $('errorName').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido');
                 
                break;
        }
        
    })
    //---------------------------------------
    $('lastName').addEventListener('focus',function(e){
        $('errorlastName').innerHTML = null;
        this.classList.remove('invalido')
    })

    $('lastName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('errorlastName').innerHTML = 'El apellido es obligatorio ';
                this.classList.add('invalido');
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $('errorlastName').innerHTML = 'No se permiten numeros ';
                this.classList.add('invalido');
                break;
            case this.value.length < 3:
                $('errorlastName').innerHTML = 'Minimo 3 caracteres!!';
                this.classList.add('invalido');
                break;
            default:
                $('errorlastName').innerHTML = null;
                this.classList.remove('invalido');
                this.classList.add('valido');
                break;
        }
    });
    //------------------Email-------------------//
    $('email').addEventListener('focus',function(e){
        $('errorEmail').innerHTML = null;
        this.classList.remove('invalido')
    })
    $('email').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   $('errorEmail').innerHTML = 'El email es obligatorio';
                   this.classList.add('invalido')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                $('errorEmail').innerHTML = 'El email es invalido';
                this.classList.add('invalido')
                break;           
            default:
                $('errorEmail').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    }) 
    //-------------------EMAIL--------------//
    $('email').addEventListener('change',async function(e){
       
        try {
          const response = await fetch(`/api/check-email?email=${this.value}`) 
          const result = await response.json()
          
          if(result.data){
            $('errorEmail').innerHTML = 'El mail ya fue registrado '
            this.classList.add('invalido')
          }
        } catch (error) {
            console.log(error);
        }
    })


    //-------------------password--------------//
    $('password').addEventListener('focus',function(e){
        $('errorPassword').innerHTML = null;
        this.classList.remove('invalido')
    })
    $('password').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   $('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.add('invalido')
                break;
                case !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(this.value):
                    $('errorPassword').innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres, incluyendo al menos una mayúscula y números';
                    this.classList.add('invalido');
                    break;
            default:
                $('errorPassword').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })
    //-------------------password2--------------//

    $('password2').addEventListener('focus',function(e){
        $('errorPassword2').innerHTML = null;
        this.classList.remove('invalido')
    })
    $('password2').addEventListener('blur',function(e){
        switch (true) {
            case !this.value.trim()://validamos que no este vacio
                   $('errorPassword2').innerHTML = 'Debes confirmar tu contraseña';
                   this.classList.add('invalido')
                break;
            case this.value.trim() !== $('password').value.trim():
                    $('errorPassword2').innerHTML = 'Las contraseñas no coinciden';
                    this.classList.add('invalido');
                break;
            default:
                $('errorPassword2').innerHTML = null;
                this.classList.remove('invalido')
                this.classList.add('valido')
                break;
        }
    })

    //-------------------password button eye--------------//
    $('button-eye').addEventListener('click', function (e) {
        $('errorPassword').innerHTML = null;
        $('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = $('password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------password button eye2--------------//
    $('button-eye2').addEventListener('click', function (e) {
        $('errorPassword').innerHTML = null;
        $('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = $('password2');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    //-------------------validando campos vacios--------------//
    $('formAdd').addEventListener('submit',function(e){
        e.preventDefault()
    
        const elementForm = $('formAdd').elements
        let error = false
    
        for (let i = 0; i < elementForm.length; i++) {
            
            if (!elementForm[i].value.trim() || elementForm[i].classList.contains('invalido')){
                elementForm[i].classList.add('invalido')
                $('errores').innerHTML = 'Hay errores en la carga de datos'
                error = true
            }
            
        }
            if (!error) {
            this.submit();
        }})
}