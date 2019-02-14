const express = require('express')
const app = express()

const axios = require('axios')

app.set('view engine', 'ejs')

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

app.get('/categorias/nova', (requeste, response) => {
    response.render('categorias/nova')
})

app.post('/categorias/nova', async(req, res) => {
    await axios.post('https://como-fazer-fullstak.firebaseio.com/categorias.json',{
        categorias: req.body.categoria
    })
    res.send(req.body)
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
