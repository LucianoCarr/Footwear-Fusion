const express = require('express')
const app = express()
const path = require('path')
const PORT = 3030

/* configuracion */
app.use(express.static(path.join(__dirname, 'public')))

/* rutas */
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')))
app.get('/cart', (req,res) => res.sendFile(path.join(__dirname, 'views','carrito.html')))
app.get('/detail', (req,res) => res.sendFile(path.join(__dirname, 'views','detalles.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views','registro.html')))


app.get('/header', (req,res) => res.sendFile(path.join(__dirname, 'views','partials','header.html')))
app.get('/footer', (req,res) => res.sendFile(path.join(__dirname, 'views','partials','footer.html')))


app.listen(PORT, () => console.log(`Servidor: HTTP://localhost:${PORT}`))