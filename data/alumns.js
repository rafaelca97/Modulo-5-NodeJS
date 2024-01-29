const alumns = [
    { name: 'Rafa', surname: 'Campos' },
    { name: 'Juan', surname: 'Gómez' },
    { name: 'María', surname: 'García' },
];

const getSurname = (reqSurname) => {
    const coincidencias = alumns.filter(alumn => alumn.surname === reqSurname);

    if (coincidencias.length === 0) {
        return null;
    }

    const firstMatch = coincidencias[0];
    return firstMatch;
}

module.exports = {
    getSurname
};
