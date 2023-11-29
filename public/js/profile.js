const s = id => document.getElementById(id);

window.onload = function () {  
    //Nombre
    s('name').addEventListener('focus', function() {
        s('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                s('msgError-name').innerHTML = "El nombre es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z\s]+$/.test(this.value) :
                s('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                s('msgError-name').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Apellido
     s('lastName').addEventListener('focus', function() {
        s('msgError-lastName').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('lastName').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                s('msgError-lastName').innerHTML = "El Apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z\s]+$/.test(this.value) :
                s('msgError-lastName').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                s('msgError-lastName').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-lastName').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

      //Provincia
      s('province').addEventListener('focus', function() {
        s('msgError-province').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('province').addEventListener('blur', function(e) {
        switch (true) {
            case /^[\d]+$/.test(this.value) :
                s('msgError-province').innerHTML = "Selecciona tu provincia";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-province').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Domicilio
     s('adress').addEventListener('focus', function() {
        s('msgError-adress').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('adress').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                s('msgError-adress').innerHTML = "Escribe tu direccion";
                this.classList.add("is-invalid");
                break;
            case !/^[a-zA-Z0-9\s,'-]*$/.test(this.value) :
                s('msgError-adress').innerHTML = "Con letras y numeros";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 6 :
                s('msgError-adress').innerHTML = "Calle y numero";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-adress').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });


}