const $ = id => document.getElementById(id)

window.onload = function(){

    $('see').addEventListener('click', function(e){
        $('see').innerHTML += `<a href="#see"></a>`
    })

}