// const $ = (id) => document.getElementById(id);
const userId = document
  .querySelector(".carrito_main")
  .getAttribute("data-idUser");
const SERVER_CART = "http://localhost:3000/api/cart/";
let totalOrder = 0;

const messageInfo = ({ message, ok }) => {
  return Swal.fire({
    //position: "top-end",
    icon: ok ? "success" : "error",
    title: message || "Producto agregado",
    showConfirmButton: false,
    timer: 1000,
  });
};

const confirmAction = ({
  title = "¿Estas seguro de realizar esta acción?",
  confirmButtonText = "Aceptar",
  denyButtonText = "Cancelar",
  showDenyButton = true,
  showCancelButton = false,
  callbackAction,
}) => {
  Swal.fire({
    title,
    showDenyButton,
    showCancelButton,
    confirmButtonText,
    denyButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      callbackAction(); //  representaría la petición para eliminar un producto del carrito (ejemplo)
    }
  });
};

const createCard = ({ name, id, hexColor, price, discount, image }) => {
  // si la mediaquery es tal
  const structureCardDesktop = `
    <tr>
    <!-- IMAGE -->
    <td scope="col"> <img src="/img/${image}" style="width: 100px;" alt=""></td> 
    <!-- NAME -->
    <td scope="col">
        <p>${name}</p>
    </td>
    <!-- COLOR -->
    <td scope="col">
        <div class="circle" style="background-color:${hexColor}"></div>
    </td>
    <!-- QUANTITY -->
    <td scope="col"><label for="cantidad">
        <div class="carrito_addProduc">
            <div class="carrito_sum-rest">
                <i class="fa-solid fa-caret-up" style="color: #000000;"  onclick="moreQuantity(${id})"></i>
                <i class="fa-solid fa-caret-down" style="color: #000000;"  onclick="lessQuantity(${id})"></i>
            </div>
          <!--   <input class="carrito__input_number" id="cantidad" value="1" min="1" max="20" name="cantidad" type="number"> -->

            <output class="carrito__input_number p-1 quantity-${id}" name="cantidad">1</output>
        </div>
    </label></td>
    <!-- PRICE -->
    <td scope="col">
        <p class="priceArt${id}">$${
    discount ? price - (price * discount) / 100 : price
  }</p>
    </td>
    <!-- TRASH -->
    <td scope="col"> <button class="carrito_trash" onclick="removeProduct(${id})"><i class="fa-solid fa-trash"
                style="color: #e27396;"></i></button></td>
    </tr>
`;

  const structureCardMobile = `
  <article class="carrito__article">
  <div class="carrito__conteiner_card">
      <div class="carrito__card_container-items">
          <!-- IMAGE -->
          <div class="carrito__conteinerImg carrito__card_info carrito__card_info-img">
              <img src="/img/${image}" alt="">
          </div>
          <!-- NAME -->
          <div class="carrito__card_info carrito__card_info-detail">
              <h4>Nombre</h4>
              <p>${name}</p>
          </div>
       
          <!-- COLOR -->
          <div class="carrito__card_info carrito__card_info-color">
              <h4>Color</h4>
              <div class="circle" style="background-color:${hexColor}"></div>
          </div>
          <!-- PRICE -->
          <div class="carrito__card_info carrito__card_info-price">
              <h4>Precio</h4>
              <p class="priceArt${id}">$${discount ? price - (price * discount) / 100 : price}</p>
          </div>
          <!-- QUANTITY -->
          <div class="carrito__card_info carrito__card_info-quantity">
              <h4>Cantidad</h4>
              <label for="cantidad">
                  <div class="carrito_addProduc">
                      <div class="carrito_sum-rest">
                          <i class="fa-solid fa-caret-up" style="color: #000000;" onclick="moreQuantity(${id})"></i>
                          <i class="fa-solid fa-caret-down" style="color: #000000;" onclick="lessQuantity(${id})"></i>
                      </div>
                      <!-- <input class="carrito__input_number" id="cantidad" value="1" min="1" max="20" name="cantidad" type="number" > -->

                      <output class="carrito__input_number p-1 quantity-${id}" name="cantidad">1</output>
                  </div>
              </label>
          </div>
          <div class="carrito__trash_conteiner">
              <h4></h4>
              <button class="carrito_trash" onclick="removeProduct(${id})"><i class="fa-solid fa-trash"
                      style="color: #e27396;"></i></button>
          </div>
      </div>
  </div>
</article>
  `;
  // sino
  //otra
  return { structureCardDesktop, structureCardMobile };
};

const moreQuantity = (id) => {
  const outputsQuantity = Array.from(document.querySelectorAll(`.quantity-${id}`));
  const priceArt = +Array.from(document.querySelectorAll(`.priceArt${id}`))[0].innerHTML.slice(1);

  outputsQuantity.forEach((outputQuantity) => {
    let quantityCurrent = +outputQuantity.innerHTML;
    outputQuantity.textContent = ++quantityCurrent;
  })
  totalOrder += priceArt;
  paintTotal(totalOrder);
  updateTotal(totalOrder);
};

const lessQuantity = (id) => {
  const outputsQuantity = Array.from(document.querySelectorAll(`.quantity-${id}`));
  const priceArt = +Array.from(document.querySelectorAll(`.priceArt${id}`))[0].innerHTML.slice(1);

  outputsQuantity.forEach((outputQuantity,index) => {
    let quantityCurrent = +outputQuantity.innerHTML;
    --quantityCurrent;
    if (quantityCurrent >= 1) {
      outputQuantity.textContent = quantityCurrent === 1 ? 1 : quantityCurrent;
      if(index === 0){
        totalOrder -= priceArt;
        paintTotal(totalOrder);
        updateTotal(totalOrder);
      }
    }
  })
};

const removeProduct = (productId) => {
  try {
    const outputsQuantity = Array.from(document.querySelectorAll(`.quantity-${productId}`));
    const priceArt = Array.from(document
      .querySelectorAll(`.priceArt${productId}`))[0]
      .innerHTML.slice(1);

    outputsQuantity.forEach(async (outputQuantity,index) => {
      let quantityCurrent = +outputQuantity.innerHTML;

      if(index === 0) {
        const response = await fetch(`${SERVER_CART}remove`, {
          method: "DELETE",
          body: JSON.stringify({ productId }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        totalOrder -= priceArt * quantityCurrent;
        updateTotal(totalOrder);
        messageInfo(response);
        getCart();
      }
    })

  } catch (error) {
    console.log(error);
  }
};

const paintProducts = (products) => {
  const containerProductsDesktop = document.querySelector("#container-cards");
  const containerProductsMobile = document.querySelector(
    ".carrito__view-mobile"
  );
  containerProductsDesktop.innerHTML = "";
  containerProductsMobile.innerHTML = "";
  if(products) {
    products.forEach((prod) => {
    const { structureCardDesktop, structureCardMobile } = createCard(prod);
    containerProductsDesktop.innerHTML += structureCardDesktop;
    containerProductsMobile.innerHTML += structureCardMobile;
    });
  } 
};

const getCart = async () => {
  try {
    const { ok, data } = await fetch(SERVER_CART, {
      method: "POST",
    }).then((res) => res.json());
    paintProducts(data.products);
    totalOrder = data.total;
    paintTotal(totalOrder);
    paintTotalArt(data.products?.length || 0);
  } catch (error) {
    console.log(error);
  }
};

const paintTotal = (value) => {
  const outputTotal = document.querySelector("#totalPriceOrder");
  outputTotal.innerHTML = value;
};

const paintTotalArt = (value) => {
  const outputTotal = document.querySelector("#totalArticles");
  outputTotal.innerHTML = value;
};

const updateTotal = async (value) => {
  try {
    const { ok, message } = await fetch(`${SERVER_CART}saveTotal`, {
      method: "PATCH",
      body: JSON.stringify({ totalOrder: +value }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

const clearShoppingCart = () => {
  const totalArts = +document.querySelector("#totalArticles").textContent;
  if (totalArts > 0) {
    confirmAction({
      msgConfirm: "Producto eliminado con éxito",
      callbackAction: async () => {
        try {
          const { ok, message } = await fetch(`${SERVER_CART}clear`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());
          getCart();
          messageInfo({ message, ok });
        } catch (error) {
          console.log(error);
        }
      },
    });
  }
};

const confirmPurchase = () => {
  const totalArts = +document.querySelector("#totalArticles").textContent;
  if (totalArts > 0) {
    confirmAction({
      callbackAction: async () => {
        try {
          const { ok } = await fetch(`${SERVER_CART}changeStatus`, {
            method: "PATCH",
            body: JSON.stringify({ statusOrder: "completed" }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());

          let timerInterval;
          Swal.fire({
            title: "Estamos procesando tu compra",
            html: "Terminando el proceso en <b></b> segundos.",
            timer: 3000,
            timerProgressBar: true,
            denyButtonText: "Cancelar",
            showDenyButton: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */

            if (result.dismiss === Swal.DismissReason.timer) {
              ok && getCart();
              messageInfo({
                message: ok
                  ? "Compra realizada con éxito"
                  : "Hubo un error en la compra, vuelva a intentarlo mas tardes",
                ok,
              });
            }
          });
        } catch (error) {
          console.log(error);
        }
      },
    });
  }
};

getCart();
