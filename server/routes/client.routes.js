import { Router } from 'express';

import { createClient, 
         getClients, 
         updateClient,
         deleteClient,
         getClientById } from '../controllers/clients.controller.js';
const router = Router();

router.get('/clientes', getClients);
router.post('/clientes', createClient );
router.put('/clientes/:id', updateClient );
router.get('/clientes/:id', getClientById);
router.delete('/clientes/:id', deleteClient );

export default router;