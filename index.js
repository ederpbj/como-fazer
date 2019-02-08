const express = require('express')
const app = express()

const resolver = (requeste, response) => {
    response.send('Olá Fullstack Lab')
}

app.get('/', resolver)

app.listen(3000, (err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('Como-fazer Server is running...')
    }
})
