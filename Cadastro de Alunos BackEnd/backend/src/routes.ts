//chamadas da api
import { Router, request, response, Request, Response} from 'express'
import { consultaCadastros } from "./controller/cadastroController"; 
import { consultaCadastro } from "./controller/cadastroController"; 
import { criarCadastro } from "./controller/cadastroController"; 
import { atualizarCadastro } from "./controller/cadastroController"; 
import { deletarCadastro } from "./controller/cadastroController"; 
import { ativoCadastro } from "./controller/cadastroController"; 

const routes = Router();

routes.get("/aluno", consultaCadastros);
routes.post("/aluno", criarCadastro);
routes.get("/aluno/:id", consultaCadastro);
routes.put("/atualizaraluno/:id", atualizarCadastro);
routes.delete("/aluno/:id", deletarCadastro)
routes.patch("/aluno/:id", ativoCadastro);
 
export default routes;