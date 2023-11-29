const s = id => document.getElementById(id);

window.onload = function () {
        //-------------------email----------------------//
        s('email').addEventListener('focus',function(e){
            s('errorEmail').innerHTML = null;
            this.classList.remove('is-invalid')
        })
        s('email').addEventListener('blur',function(e){
            switch (true) {
                case !this.value.trim():
                       s('errorEmail').innerHTML = 'El email es obligatorio';
                       this.classList.add('is-invalid');
                    break;          
                default:
                    s('errorEmail').innerHTML = null;
                    this.classList.remove('is-invalid')
                    break;
            }
        }) 
        //------------------email--------------------------//
        s('email').addEventListener('change',async function(e){
            if(this.value.trim()){
            try {
              const response = await fetch(`/api/check-email?email=${this.value}`) 
              const result = await response.json()
              
              if(!result.data){
                s('errorEmail').innerHTML = 'El mail no es valido '
                this.classList.add('is-invalid')
              }
            } catch (error) {
                console.log(error);
            }}
        })
       //-------------------password----------------------//
    s('password').addEventListener('focus',function(e){
    console.log('Focus event 1');
    s('errorPassword').innerHTML = null;
        this.classList.remove('is-invalid')

    })
    s('password').addEventListener('blur',function(e){
        console.log('Blur event 2');
        switch (true) {
            case !this.value.trim():
                   s('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.toggle('is-invalid')
                break;
            default:
                s('errorPassword').innerHTML = null;
                this.classList.toggle('is-invalid')
                break;
        }
    })

        //-------------------password----------------------//

        s('password').addEventListener('change',async function(e){
            console.log('Change event try');
            s('errorPassword').innerHTML = null;
            this.classList.remove('is-invalid'); 
            if(this.value.trim()){
            try {
            
              const response = await fetch(`/api/check-password?password=${this.value.trim()}`) 
              const result = await response.json()
              
              if(!result.data){
                s('errorPassword').innerHTML = 'La contraseña no es valida'
                this.classList.add('is-invalid') 
              }else{
                //limpiar campo
                s('errorPassword').innerHTML = null;
                this.classList.remove('is-invalid');
              }
            } catch (error) {
                console.log(error);
            }}
        })

       //-------------------button-eye----------------------// 
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
};
 