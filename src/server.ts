import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(
  path.resolve(__dirname, '..', 'uploads'))
);

app.listen(3333);

// ** MÉTODOS **
// GET: Buscar uma ou mais informações do back
// POST: Criar uma nova info no back
// PUT: Atualizar infos
// DELETE: Remover infos

// **TIPO DE PARÂMETROS**
// Request param: Parâmetros que vêm na própria rota que identificam um recurso
// Query param: Parâmetros que vêm na própria rota e geralmente opcionais, para filtros, paginação, etc
// Request body: Parâmetros para criação e atualização de informações