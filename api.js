const axios = require('axios')
const baseURL = 'https://como-fazer-fullstak.firebaseio.com/categorias'

const list = async (key) => {
    if(content.data){
        const categorias = Object.keys(content.data).map(key => {
                                    return {
                                        id: key,
                                        ...content.data[key]
                                    }
                                })
        res.render('categorias/index', {categorias: categorias})

    }
}