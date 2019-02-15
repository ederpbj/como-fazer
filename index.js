const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

//se ouver porta no ambiente ele usa, se não usa a 3000
const port = process.env.PORT || 3000


app.get('/', async(requeste, response) => {
   const content = await axios.get('https://como-fazer-fullstak.firebaseio.com/teste.json')
   response.render('index', { i: content.data })
    
})

app.use(categorias)

app.listen(port, (err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('Como-fazer Server is running on port:', port)
    }
})

