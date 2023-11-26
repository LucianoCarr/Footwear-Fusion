//const $ = (id) => document.getElementById(id);

const messageAdd = () => {
    Swal.fire({
        //position: "top-end",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1000,
      });
}

const removeItems = () => {
    Swal.fire({
        icon: "error",
        title: "Carrito vaciado",
        timer: 8000,
      });
}


