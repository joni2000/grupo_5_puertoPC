let express = require('express');
let path = require('path');
let app = express();

const PORT = 3070;

app.listen(PORT, () => console.log(
    `Servidor levantado en el puerto ${PORT}
    http://localhost:${PORT}`
));

let enviarHTML = (url, archivo) => { //creando funcion para ahorrar codigo 
    app.get(url, (req, res) => { 
        res.sendFile(path.join(__dirname, `./views/${archivo}`))   
    })
}

enviarHTML('/','index.html')
enviarHTML('/detalles','productDetail.html')
enviarHTML('/carrito','productCart.html')
enviarHTML('/login','login.html')
enviarHTML('/register','register.html')

app.use(express.static('public'));