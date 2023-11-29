
window.onload = function () {
        //-------------------email----------------------//
       document.getElementById('email').addEventListener('focus',function(e){
           document.getElementById('errorEmail').innerHTML = null;
            this.classList.remove('is-invalid')
        })
       document.getElementById('email').addEventListener('blur',function(e){
            switch (true) {
                case !this.value.trim():
                      document.getElementById('errorEmail').innerHTML = 'El email es obligatorio';
                       this.classList.add('is-invalid');
                    break;          
                default:
                   document.getElementById('errorEmail').innerHTML = null;
                    this.classList.remove('is-invalid')
                    break;
            }
        }) 
        //------------------email--------------------------//
       document.getElementById('email').addEventListener('change',async function(e){
            if(this.value.trim()){
            try {
              const response = await fetch(`/api/check-email?email=${this.value}`) 
              const result = await response.json()
              
              if(!result.data){
               document.getElementById('errorEmail').innerHTML = 'El mail no es valido '
                this.classList.add('is-invalid')
              }
            } catch (error) {
                console.log(error);
            }}
        })
       //-------------------password----------------------//
   document.getElementById('password').addEventListener('focus',function(e){
    console.log('Focus event 1');
   document.getElementById('errorPassword').innerHTML = null;
        this.classList.remove('is-invalid')

    })
   document.getElementById('password').addEventListener('blur',function(e){
        console.log('Blur event 2');
        switch (true) {
            case !this.value.trim():
                  document.getElementById('errorPassword').innerHTML = 'La contraseña es obligatorio';
                   this.classList.toggle('is-invalid')
                break;
            default:
               document.getElementById('errorPassword').innerHTML = null;
                this.classList.toggle('is-invalid')
                break;
        }
    })

        //-------------------password----------------------//

       document.getElementById('password').addEventListener('change',async function(e){
            console.log('Change event try');
           document.getElementById('errorPassword').innerHTML = null;
            this.classList.remove('is-invalid'); 
            if(this.value.trim()){
            try {
            
              const response = await fetch(`/api/check-password?password=${this.value.trim()}`) 
              const result = await response.json()
              
              if(!result.data){
               document.getElementById('errorPassword').innerHTML = 'La contraseña no es valida'
                this.classList.add('is-invalid') 
              }else{
                //limpiar campo
               document.getElementById('errorPassword').innerHTML = null;
                this.classList.remove('is-invalid');
              }
            } catch (error) {
                console.log(error);
            }}
        })

       //-------------------button-eye----------------------// 
   document.getElementById('button-eye').addEventListener('click', function (e) {
       document.getElementById('errorPassword').innerHTML = null;
       document.getElementById('password').classList.remove('error-login');
    
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
    
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
    
        const passwordInput = s('password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
};
 