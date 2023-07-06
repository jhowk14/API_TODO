const model = new require('../../models/usuario')
const auth = require('../auth')
const validacao = require('../validacao')
const usuario = require('./usuario')

module.exports = (app)=>{
    app.post('/login', async(req, res)=>{
        try{
            let dados = req.body
            let validaLogin = await validacao.validarLogin(dados, model)
            if(validaLogin.autenticado){
                let {id, nome, email} = validaLogin.usuario.dataValues
                dados = {id, nome, email}
                let token = await auth.gerarToken(dados)
                return res.json({dados, token:token}).status(200)
            }else{
                return res.json(validaLogin).status(200)
            }
        }catch(error){
            return res.json(error).status(400)
        }
    })
    app.put(`/login/atualizar`, auth.validarToken ,async (req, res) => {
        var id = req.usuarioAtual.id;
        var dados = req.body;
        var usuario = model.findOne({where: {email: dados.email}})
        if(usuario != null) {
            return {message:"Email ja cadastrado", autenticado:false}
        }else{
        senha = await auth.criptografar(senha)
        var respBd = await model.update(dados, {where:{id:id}})
            return res.status(200).json({message:"dados atualizados", respBd})
        }
    })
}