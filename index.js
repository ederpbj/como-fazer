const express = require('express')
const app = express()

app.set('view engine', 'ejs')

//se ouver porta no ambiente ele usa, se não usa a 3000
const port = process.env.PORT || 3000

//Modo 1
app.get('/', (requeste, response) => {
    response.send('Olá Fullstack Lab')
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
