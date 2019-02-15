const api = require('../api')

const novaForm =  async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', {categorias })
}

const nova = async(req, res) => {
    await api.create('publicacoes/' + req.body.categoria, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes')
}

const list = async(req, res) => {
    const publicacoes = await api.list('publicacoes')
    res.render('publicacoes/index', {publicacoes})
}

const excluir = async(req, res) => {
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/publicacoes')
}

const editarForm = async (req, res) => {
    const publicacao = await api.get('publicacoes', req.params.id)
    res.render('publicacoes/editar', {
        publicacao
    })
}

const editar = async(req, res) => {
    await api.update('publicacoes', req.params.id, {
        publicacao: req.body.publicacao
    })
    res.redirect('/publicacoes')
}

module.exports = {
    novaForm, nova, list, excluir, editarForm, editar
}