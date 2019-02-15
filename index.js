const express = require('express')
const app = express()

//const axios = require('axios')
const bodyParser = require('body-parser')

const api = require('./api')

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

app.get('/categorias', async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', {categorias})
   
})

app.get('/categorias/nova', (requeste, response) => {
    response.render('categorias/nova')
})

app.post('/categorias/nova', async(req, res) => {
        await api.create('categorias',{
            categoria: req.body.categoria
        })
    //manda uma msg
    //res.send(req.body)
    res.redirect('/categorias')
})

app.get('/categorias/excluir/:id', async(req, res) => {
    await api.apagar('categorias', req.params.id)
    //res.send('excluido')
    res.redirect('/categorias')
})

app.get('/categorias/editar/:id', async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    //console.log(categoria)
    res.render('categorias/editar', {
        categoria
    })
})

app.post('/categorias/editar/:id', async(req, res) => {
    //console.log(req.body.categoria)
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })
    //manda uma msg
    //res.send(req.body)
    res.redirect('/categorias')
})


