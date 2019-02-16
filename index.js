const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

//se ouver porta no ambiente ele usa, se não usa a 3000
const port = process.env.PORT || 3000


app.get('/', async(requeste, response) => {
   //const content = await axios.get('https://como-fazer-fullstak.firebaseio.com/teste.json')
   //response.render('index', { i: content.data })
   response.render('index')
    
})

app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

app.listen(port, (err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('Como-fazer Server is running on port:', port)
    }
})

/* let defaultAppConfig = {
    credential: admin.credential.cert({
        type: "service_account",
        project_id: "txxxxxxxxxx",
        private_key_id: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        private_key: "-----BEGIN PRIVATE KEY----------END PRIVATE KEY-----\n",
        client_email: "firebaxxxxxxx@xxxxxxx.gserviceaccount.com",
        client_id: "11111111111111111",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/jjjjjj.gserviceaccount.com"
    }),
    databaseURL: 'https://projectxxx.firebaseio.com/'
}

defaultApp = admin.initializeApp(defaultAppConfig); */