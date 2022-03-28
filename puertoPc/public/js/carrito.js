console.log('carrito connected success!');

const $ = (id) => document.getElementById(id);

const carrito = $('carrito');



const getCarrito = async () => {

    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()

        if (result.ok) {

            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error);
    }

}


const addItem = async (id) => {

    try {
        const response = await fetch(`/api/cart/${id}`, {
            method: 'POST'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error);
    }

}

const removeItem = async (id) => {

    try {
        
        const response = await fetch(`/api/cart/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error)
    }
}

const removeAllItem = async (id) => {

    try {
        const response = await fetch(`/api/cart/item/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error)
    }
}

const emptyCart = async () => {

    try {
        const response = await fetch(`/api/cart/empty`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error)
    }
}

const cargarTabla = (data) => {

    carrito.innerHTML = null;

    let toThousand = n => +n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    data.forEach(({id,amount,image,name,price,total}) => {
        let item = `
        <div class="card-cart">
            <div class="image-container-ext">
                <a href="detalles/${id}" class="image-container">
                    <img class="image-cart" src="/images/products/${image}">
                </a>
            </div>
            <div class="container-info">
                <div class="cart-description-text">
                    <h3><a href="detalles/${id}"> ${name}  </a></h3>
                </div>
                <div class="container-increment">
                    <div>
                        <button class="btn-plus" onclick="removeItem('${id}')" ><i class="fas fa-minus-square"></i></button>
                        ${amount}
                        <button class="btn-plus" onclick="addItem('${id}')" ><i class="fas fa-plus-square"></i></button>
                    </div>
                </div>
                <div class="price" >
                    <p class="subtotal">Subtotal: </p>
                    <p>$${toThousand(total)}</p>
                </div>
            </div>
            <i onclick="removeAllItem('${id}')" class="fas fa-times"></i>
        </div>
        `
        carrito.innerHTML += item
    });

}

carrito && getCarrito();
