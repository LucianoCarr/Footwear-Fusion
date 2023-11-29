
window.onload = function () {
    //Nombre
   document.getElementById('name').addEventListener('focus', function() {
       document.getElementById('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

   document.getElementById('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
               document.getElementById('msgError-name').innerHTML = "El nombre es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z0-9\s]+$/.test(this.value) :
               document.getElementById('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
               document.getElementById('msgError-name').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
               document.getElementById('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    //Color
   document.getElementById('color').addEventListener('focus', function() {
       document.getElementById('msgError-color').innerHTML = null;
        this.classList.remove("is-invalid");
    });

   document.getElementById('color').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
               document.getElementById('msgError-color').innerHTML = "El color es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
               document.getElementById('msgError-color').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            default:
               document.getElementById('msgError-color').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Precio
    document.getElementById('price').addEventListener('focus', function() {
       document.getElementById('msgError-price').innerHTML = null;
        this.classList.remove("is-invalid");
    });

   document.getElementById('price').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
               document.getElementById('msgError-price').innerHTML = "El precio es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\d]+$/.test(this.value) :
               document.getElementById('msgError-price').innerHTML = "Solo caracteres numericos";
                this.classList.add("is-invalid");
                break
            case this.value == 0 :
               document.getElementById('msgError-price').innerHTML = "Valor mayor a 0";
                this.classList.add("is-invalid");
                break
            default:
               document.getElementById('msgError-price').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

       //Categoria
      document.getElementById('category').addEventListener('focus', function() {
       document.getElementById('msgError-category').innerHTML = null;
        this.classList.remove("is-invalid");
    });

   document.getElementById('category').addEventListener('blur', function(e) {
        switch (true) {
            case !/^[\d]+$/.test(this.value) :
               document.getElementById('msgError-category').innerHTML = "Categoria es obligatoria";
                this.classList.add("is-invalid");
                break
            default:
               document.getElementById('msgError-category').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
}