import express from "express"

const routes = express.Router()

let lista = ['manu', 'luana', 'bagatin', 'occaso', 'benetti']

routes.get('/:nome', (req, res) => {
    const {nome} = req.params;
    if (lista.includes(nome)) {
      return res.status(200).json(`${nome} está na lista de nomes.`);
    } else {
        return res.status(200).json(`${nome} não está na lista de nomes.`);
    }
  });

export default routes