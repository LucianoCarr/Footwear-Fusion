const $ = id => document.getElementById(id);

window.onload = function () {
    /* Search */
    $('form-search').addEventListener('submit',function(e){
        e.preventDefault()

        const elementForm = $('form-search').elements
        let error = false

        for (let i = 0; i < elementForm.length; i++) {

            if (!elementForm[i].value.trim() || elementForm[i].classList.contains('is-invalid')){
                elementForm[i].classList.add('is-invalid')
                $('errores').innerHTML = 'No puede enviarse vacio'
                error = true
            }
            ! error && this.submit()
        }})
    
}