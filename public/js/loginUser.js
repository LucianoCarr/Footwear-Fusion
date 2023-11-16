const $ = id => document.getElementById(id);

window.onload = function () {
        //-------------------email----------------------//
        $('email').addEventListener('focus',function(e){
            $('errorEmail').innerHTML = null;
            this.classList.remove('is-invalid')
        })
        $('email').addEventListener('blur',function(e){
            switch (true) {
                case !this.value.trim():
                       $('errorEmail').innerHTML = 'El email es obligatorio';
                       this.classList.add('is-invalid');
                    break;          
                default:
                    $('errorEmail').innerHTML = null;
                    this.classList.remove('is-invalid')
                    break;
            }
        }) 
        //------------------email--------------------------//
        $('email').addEventListener('change',async function(e){
            if(this.value.trim()){
            try {
              const response = await fetch(`/api/check-email?email=${this.value}`) 
              const result = await response.json()
              
              if(!result.data){
                $('errorEmail').innerHTML = 'El mail no es valido '
                this.classList.add('is-invalid')
              }
            } catch (error) {
                console.log(error);
            }}
        })
       //-------------------password----------------------//
    $('password').addEventListener('focus',function(e){
    console.log('Focus event 1');
    $('errorPassword').innerHTML = null;
        this.classList.remove('is-invalid')

    })
    $('password').addEventListener('blur',function(e){
        console.log('Blur event 2');
        switch (true) {
            case !this.value.trim():
                   $('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.toggle('is-invalid')
                break;
            default:
                $('errorPassword').innerHTML = null;
                this.classList.toggle('is-invalid')
                break;
        }
    })

        //-------------------password----------------------//

        $('password').addEventListener('change',async function(e){
            console.log('Change event try');
            $('errorPassword').innerHTML = null;
            this.classList.remove('is-invalid'); 
            if(this.value.trim()){
            try {
            
              const response = await fetch(`/api/check-password?password=${this.value.trim()}`) 
              const result = await response.json()
              
              if(!result.data){
                $('errorPassword').innerHTML = 'La contraseña no es valida'
                this.classList.add('is-invalid') 
              }else{
                //limpiar campo
                $('errorPassword').innerHTML = null;
                this.classList.remove('is-invalid');
              }
            } catch (error) {
                console.log(error);
            }}
        })

       //-------------------button-eye----------------------// 
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
};
 