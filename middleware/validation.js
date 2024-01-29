const regexNotNumbers = (req, res, next) => {
    const surname = req.params.surname;
    const validation = /^([^a-zA-ZáéíóúÁÉÍÓÚ]*)$/;

    if(validation.test(surname)) {
        return res.status(400).json({
            error: `El apellido no puede contener números`
        });
    }
        next();
    };
    
    module.exports = regexNotNumbers
