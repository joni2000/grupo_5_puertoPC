const db = require('../data/models');

const productVerify = (carrito, id) => {

    let index = -1;

    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id === +id){
            index = i;
            break
        }
    }

    return index
}


module.exports = {
    show : async (req,res) => {
        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : 'Comuníquese con el administrador!'
            })
        }

        let response = {
            ok: true,
            meta : {
                total : req.session.cart.length
            },
            data : req.session.cart
        }

        return res.status(200).json(response)
    },
    add : async (req,res) => {
        try {

            let product = await db.Product.findByPk(req.params.id,{
                include : [
                    {association : 'images',
                        attributes : ['file']
                    }
                ]
            });

            const {id, name, price, discount} = product;
    
            let item = {
                id,
                name,
                price,
                discount,
                image : product.images[0].file,
                amount : 1,
                total : price
            }

            if(req.session.cart.length === 0){

                let order = await db.Order.create({
                    userId : req.session.userLogin.id,
                    status : 'pending'
                })

                item = {
                    ...item,
                    orderId: order.id
                }

                await db.Cart.create({
                    orderId: order.id,
                    productId: item.id,
                    userId: order.userId,
                    quantity: 1
                })

                req.session.cart.push(item)

            }else{

                let index = productVerify(req.session.cart,req.params.id);

                let order = await db.Order.findOne({
                    where : {
                        userId : req.session.userLogin.id,
                        status : 'pending'
                    }
                })

                if(index === -1){
                    item = {
                        ...item,
                        orderId : order.id
                    }

                    req.session.cart.push(item);

                    await db.Cart.create({
                        orderId: order.id,
                        productId: item.id,
                        userId: order.userId,
                        quantity: 1
                    })
                }else{

                    let product = req.session.cart[index]
                    product.amount++;
                    product.total = product.amount * product.price;
                    req.session.cart[index] = product;

                    await db.Cart.update(
                        {
                            quantity : product.amount
                        },
                        {
                            where : {
                                orderId : product.orderId,
                                productId : product.id
                            }
                        }
                    )
                }
            }

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)

        }
    },
    remove : async (req,res) => {

        try {
            
            let index = productVerify(req.session.cart,req.params.id);
            let product = req.session.cart[index];

            if(product.amount > 1){

                product.amount--
                product.total = product.amount * product.price;
                req.session.cart[index] = product;

                await db.Cart.update(
                    {
                        quantity : product.amount
                    },
                    {
                        where : {
                            orderId : product.orderId,
                            productId : product.id
                        }
                    }
                )

            }else{

                req.session.cart.splice(index,1);

                await db.Cart.destroy({
                    where : {
                        productId : product.id,
                        orderId : product.orderId
                    }
                })

            }

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    removeItem : async (req,res) => {

        try {
            
            let index = productVerify(req.session.cart,req.params.id);
            let product = req.session.cart[index];
            
            req.session.cart.splice(index,1);

            await db.Cart.destroy({
                where : {
                    productId : product.id,
                    orderId : product.orderId
                }
            })

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    empty : async (req,res) => {

        try {

            await db.Order.destroy({
                where : {
                    userId : req.session.userLogin.id,
                    status : 'pending'
                }
            })

            req.session.cart = [];

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    } 

}