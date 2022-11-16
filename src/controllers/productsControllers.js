
const controllers = {
    productCreate: (req,res) => {
        res.render('./products/productCreate')
    },
    productEdit: (req,res) => {
        res.render('./products/productEdit')
    },
    productDetail: (req,res) => {
        res.render('./products/productDetail')
    },
    productCart: (req,res) => {
        res.render('./products/productCart')
    },
}

module.exports = controllers;