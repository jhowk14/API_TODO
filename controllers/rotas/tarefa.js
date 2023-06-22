

module.exports = (app) => {

    app.post(`/cadastrar/${rota}`, async (req, res)=>{
      
        res.json({deuGreen})    
    })
    app.get(`/consultar/${rota}/:id?`,async (req, res) => {
        res.json({deuGreen})
    })
    app.put(`/atualizar/${rota}/:id`, async (req, res) => {
       
        res.json({deuGreen})
    })
    app.delete(`/excluir/${rota}/:id`, async (req, res) => {
        
        res.json({deuGreen})
    })
}