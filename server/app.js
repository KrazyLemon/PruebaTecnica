import express from 'express';
import cors from 'cors';
import {PORT} from './config.js';
import indexRouter from './routes/index.routes.js'; // Add the import statement for indexRouter
import clientRoutes from './routes/client.routes.js'; // Add the import statement for clientRoutes
import cuentasRoutes from './routes/cuentas.routes.js'; // Add the import statement for clientRoutes

const app = express();
app.use(express.json());
app.use(cors());

app.use(indexRouter);
app.use(clientRoutes); 
app.use(cuentasRoutes);



app.listen(PORT, () => {
  console.log('Server is listening on port '+ PORT);
});
