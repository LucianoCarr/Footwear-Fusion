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
            case !/^[A-Za-z0-9\s]+$/.test(this.value) :
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

    //Color
    s('color').addEventListener('focus', function() {
        s('msgError-color').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('color').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                s('msgError-color').innerHTML = "El color es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                s('msgError-color').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-color').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Precio
     s('price').addEventListener('focus', function() {
        s('msgError-price').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('price').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                s('msgError-price').innerHTML = "El precio es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\d]+$/.test(this.value) :
                s('msgError-price').innerHTML = "Solo caracteres numericos";
                this.classList.add("is-invalid");
                break
            case this.value == 0 :
                s('msgError-price').innerHTML = "Valor mayor a 0";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-price').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

       //Categoria
       s('category').addEventListener('focus', function() {
        s('msgError-category').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    s('category').addEventListener('blur', function(e) {
        switch (true) {
            case !/^[\d]+$/.test(this.value) :
                s('msgError-category').innerHTML = "Categoria es obligatoria";
                this.classList.add("is-invalid");
                break
            default:
                s('msgError-category').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
}