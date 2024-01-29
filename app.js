const express = require('express');
const app = express();
const port = 3000;
const regexNotNumbers = require (`./middleware/validation.js`);
const {getSurname } = require('./data/alumns.js');

app.get(`/alumns/:surname`, regexNotNumbers, (req, res) => {
        const surname = req.params.surname;
        const result = getSurname(surname);

    if (!result) {
        return res.status(400).json({
            message: `No se encontraron coincidencias de apellido: ${surname}`,
        });
    }

    res.status(200).json({
        message: `Ok`,
        alumn: result,
    });
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});