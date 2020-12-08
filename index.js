const express = require('express');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const app = express();


// Base de datos
dbConnection();


//User
//mean_user
//nBU7PbO2VfOecpyL

//Rutas
app.get( '/', (req, res) =>{

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
