const SERVER_CART = "http://localhost:3000/api/cart/";

const messageInfo = ({ message, ok }) => {
  return Swal.fire({
    //position: "top-end",
    icon: ok ? "success" : "error",
    title: message || "Producto agregado",
    showConfirmButton: false,
    timer: 1000,
  });
};

const addProductToCart = async (productId) => {
  try {
    const { ok, message } = await fetch(`${SERVER_CART}add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    }).then((res) => res.json());
    messageInfo({ok,message})
  } catch (error) {
    console.log(error)
  }
};
