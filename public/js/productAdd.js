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
            case !/^[A-Za-z]+$/.test(this.value) :
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

    //Color
    $('color').addEventListener('focus', function() {
        $('msgError-color').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('color').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-color').innerHTML = "El color es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-color').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-color').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

     //Precio
     $('price').addEventListener('focus', function() {
        $('msgError-price').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('price').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "El precio es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\d]+$/.test(this.value) :
                $('msgError-price').innerHTML = "Solo caracteres numericos";
                this.classList.add("is-invalid");
                break
            case this.value == 0 :
                $('msgError-price').innerHTML = "Valor mayor a 0";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-price').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

       //Categoria
       $('category').addEventListener('focus', function() {
        $('msgError-category').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('category').addEventListener('blur', function(e) {
        switch (true) {
            case !/^[\d]+$/.test(this.value) :
                $('msgError-category').innerHTML = "Categoria es obligatoria";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-category').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
}