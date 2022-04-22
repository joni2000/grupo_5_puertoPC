const recargar = ()=> {
    location.reload()
}

const obtener = async() => {
    let toThousand = n => +n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()
        let $total = document.querySelector('#total')
        let $containerCart = document.querySelector('#container-cart')
    
        if (result.ok) {
            const products = result.data;
            let total = 0;

            products.forEach(product => {
                total += product.total
            });

            $total.innerHTML = toThousand(total);

            if(result.data.length == 0) {
                $containerCart.innerHTML = `
                <h2 class="section-title">Mi carrito</h2>
                <div class="container-cart-empty">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>El carrito esta vacio</p>
                </div>`
            }

            if(result.data.length < 2) {
                document.body.style.height = "100vh"
                let $main = document.querySelector('.container-main')
                $main.style.height = "78%" 
            }
        }
    
    } catch (error) {
        console.error(error);
    }
}

obtener()