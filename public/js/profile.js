const $ = id => document.getElementById(id);

window.onload = function () {  
    //Nombre
    $('name').addEventListener('focus', function() {
        $('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z\s]+$/.test(this.value) :
                $('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-name').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Apellido
     $('lastName').addEventListener('focus', function() {
        $('msgError-lastName').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('lastName').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-lastName').innerHTML = "El Apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z\s]+$/.test(this.value) :
                $('msgError-lastName').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-lastName').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-lastName').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

      //Provincia
      $('province').addEventListener('focus', function() {
        $('msgError-province').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('province').addEventListener('blur', function(e) {
        switch (true) {
            case /^[\d]+$/.test(this.value) :
                $('msgError-province').innerHTML = "Selecciona tu provincia";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-province').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Domicilio
     $('adress').addEventListener('focus', function() {
        $('msgError-adress').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('adress').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-adress').innerHTML = "Escribe tu direccion";
                this.classList.add("is-invalid");
                break;
            case !/^[a-zA-Z0-9\s,'-]*$/.test(this.value) :
                $('msgError-adress').innerHTML = "Con letras y numeros";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 6 :
                $('msgError-adress').innerHTML = "Calle y numero";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-adress').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });


}