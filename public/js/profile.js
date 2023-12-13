
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
            case !/^[A-Za-z\s]+$/.test(this.value) :
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

     //Apellido
     document.getElementById('lastName').addEventListener('focus', function() {
        document.getElementById('msgError-lastName').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    document.getElementById('lastName').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                document.getElementById('msgError-lastName').innerHTML = "El Apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z\s]+$/.test(this.value) :
                document.getElementById('msgError-lastName').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                document.getElementById('msgError-lastName').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                document.getElementById('msgError-lastName').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

      //Provincia
      document.getElementById('province').addEventListener('focus', function() {
        document.getElementById('msgError-province').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    document.getElementById('province').addEventListener('blur', function(e) {
        switch (true) {
            case /^[\d]+$/.test(this.value) :
                document.getElementById('msgError-province').innerHTML = "Selecciona tu provincia";
                this.classList.add("is-invalid");
                break
            default:
                document.getElementById('msgError-province').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Domicilio
     document.getElementById('adress').addEventListener('focus', function() {
        document.getElementById('msgError-adress').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    document.getElementById('adress').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                document.getElementById('msgError-adress').innerHTML = "Escribe tu direccion";
                this.classList.add("is-invalid");
                break;
            case !/^[a-zA-Z0-9\s,'-]*$/.test(this.value) :
                document.getElementById('msgError-adress').innerHTML = "Con letras y numeros";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 6 :
                document.getElementById('msgError-adress').innerHTML = "Calle y numero";
                this.classList.add("is-invalid");
                break
            default:
                document.getElementById('msgError-adress').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

 
}