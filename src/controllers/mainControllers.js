
const controllers = {
    index: (req,res) => {
        res.render('index')
    },
    contact: (req,res) => {
        res.render('contact')
    },
    us: (req,res) => {
        res.render('us')
    },
}

module.exports = controllers;