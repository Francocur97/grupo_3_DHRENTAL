const path = require('path');
const db = require('../../database/models');




const productApiControllers = {

    list: (req,res) => {

        db.User.findAll()
        .then(users => {

           
             
            const response = {
                meta:{
                    status:200,
                    count:users.length,
                    url: 'http://localhost:3000/api/users'
                },
                data:[ users.forEach(element => {
                return element.name
   
                  
                })]
            }

             res.json(response)
                
            })
            
            
    
           
       
       
    },    
    detail: (req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            let response = {
                meta:{
                    status:200,
                    url:'http://localhost:3000/api/users/' + req.params.id 
                },
                data:user,
                url: user.f

        }
        res.json(response);
    })
    },


}

module.exports = productApiControllers;