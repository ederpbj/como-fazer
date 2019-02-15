const express = require('express')
const app = express()

const axios = require('axios')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

//se ouver porta no ambiente ele usa, se não usa a 3000
const port = process.env.PORT || 3000

//Modo 1
//let i = 10
app.get('/', async(requeste, response) => {
    //i++
    //response.send(`<h1>Olá Fullstack Lab ${i}</h1>`)
    const content = await axios.get('https://como-fazer-fullstak.firebaseio.com/teste.json')
    /*
    const content = await axios.get('https://como-fazer-fullstak.firebaseio.com/categorias.json')
    await axios.post('https://como-fazer-fullstak.firebaseio.com/categorias.json', {
        categoria: 'Receita'
    })
    */
    console.log(content.data)
    response.render('index', { i: content.data })
    
})

/* Modo 2
const resolver = (requeste, response) => {
    response.send('Olá Fullstack Lab')
}
app.get('/', resolver)
*/

app.listen(port, (err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('Como-fazer Server is running on port:', port)
    }
})


app.get('/categorias/nova', (requeste, response) => {
    response.render('categorias/nova')
})

app.post('/categorias/nova', async(req, res) => {
    console.log(req.body.categoria)

        await axios.post('https://como-fazer-fullstak.firebaseio.com/categorias.json', {
        categoria: req.body.categoria
    })
    //manda uma msg
    //res.send(req.body)
    res.redirect('/categorias')
})

app.get('/categorias', async(req, res) => {
    const content = await axios.get('https://como-fazer-fullstak.firebaseio.com/categorias.json')
    if(content.data){
        const categorias = Object.keys(content.data).map(key => {
                                    return {
                                        id: key,
                                        ...content.data[key]
                                    }
                                })
        res.render('categorias/index', {categorias: categorias})

    }else{
        res.render('categorias/index', {categorias: []})
    }
})

app.get('/categorias/excluir/:id', async(req, res) => {
    await axios.delete(`https://como-fazer-fullstak.firebaseio.com/categorias/${req.params.id}.json`)
    //res.send('excluido')
    res.redirect('/categorias')
})

app.get('/categorias/editar/:id', async (req, res) => {
    const content = await axios.get(`https://como-fazer-fullstak.firebaseio.com/categorias/${req.params.id}.json`)
    res.render('categorias/editar', {
        categoria: {
            id: req.params.id,
            ...content.data
        }
    })
})

app.post('/categorias/editar/:id', async(req, res) => {
    //console.log(req.body.categoria)
    await axios.put(`https://como-fazer-fullstak.firebaseio.com/categorias/${req.params.id}.json`, {
    categoria: req.body.categoria
    })
    //manda uma msg
    //res.send(req.body)
    res.redirect('/categorias')
})


