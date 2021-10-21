// Modulos
let express = require('express');
let path = require('path');
let app = express();

const PORT = 3070;

//Server
app.listen(PORT, () => console.log(
    `Servidor levantado en el puerto ${PORT}
    http://localhost:${PORT}`
));

// Function for routes
let enviarHTML = (url, archivo) => { //creando funcion para ahorrar codigo 
    app.get(url, (req, res) => { 
        res.sendFile(path.join(__dirname, `./views/${archivo}`))   
    })
}

// Routes
enviarHTML('/','index.html')
enviarHTML('/detalles','productDetail.html')
enviarHTML('/carrito','productCart.html')
enviarHTML('/login','login.html')
enviarHTML('/register','register.html')

//middlewares
app.use(express.static('public'));