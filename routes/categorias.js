const express = require('express')
const router = express.Router()

const api = require('../api')


router.get('/categorias', async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', {categorias})
})

router.get('/categorias/nova', (requeste, response) => {
    response.render('categorias/nova')
})

router.post('/categorias/nova', async(req, res) => {
        await api.create('categorias',{
            categoria: req.body.categoria
        })
    res.redirect('/categorias')
})

router.get('/categorias/excluir/:id', async(req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
})

router.get('/categorias/editar/:id', async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
    })
})

router.post('/categorias/editar/:id', async(req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })
    res.redirect('/categorias')
})

module.exports = router