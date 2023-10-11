'npm run seed' 
'seed db with product'

const mongoose = require('mongoose')
const Product = require('./product')
const db = require('../../config/db')

const initProducts = [
    { name: 'JM-Satchel', 
      description: 'Handmade and designed by JM. These Satchels can be used for daily use or to stylize your favorite fit.',
      category: 'accessory',
      price: 40,  
    },
    { name: 'JM-Sweater', 
      description: 'Handmade and designed by JM, Each piece is one 1 of 1. These are eye catching as well as comfotable for your everyday needs.',
      category: 'clothing',
      price: 100,  
    },
    { name: 'JM-Beanie', 
      description: 'Handmade and designed by JM. Comfy and simple has made these a favorite amongst snowboarders/skiers during cold winter months.',
      category: 'accessory',
      price: 40,  
    },
    { name: 'JM-Balaclava', 
      description: 'Handmade and designed by JM. Facecover with a splash of style for use in cold weather.',
      category: 'accessory',
      price: 40,  
    }
]

// connect to db
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Product.deleteMany({ owner: null })
        .then(deletedProducts => {
            console.log('the deleted product', deletedProducts)

            Product.create(initProducts)
                .then(newProducts => {
                    console.log('new products added to db: \n', newProducts)
                    mongoose.connection.close()
                })
                .catch(error => {
                    console.log('an error occurred: \n', error)
                    mongoose.connection.close()
                })
        })
    })
    .catch(error => {
        console.log('an error occurred: \n', error)
        mongoose.connection.close()
    })
