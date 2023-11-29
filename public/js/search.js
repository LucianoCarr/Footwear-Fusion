const s = id => document.getElementById(id);

window.onload = function () {
    /* Search */
    s('form-search').addEventListener('submit',function(e){
        e.preventDefault()

        const elementForm = s('form-search').elements
        let error = false

        for (let i = 0; i < elementForm.length; i++) {

            if (!elementForm[i].value.trim() || elementForm[i].classList.contains('is-invalid')){
                elementForm[i].classList.add('is-invalid')
                s('errores').innerHTML = 'No puede enviarse vacio'
                error = true
            }
            ! error && this.submit()
        }})
    
}