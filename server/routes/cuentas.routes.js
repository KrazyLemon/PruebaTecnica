import { Router } from 'express';

import { getCuentas, createCuenta, getCuentaById, deleteCuenta} from '../controllers/cuentas.controller.js'

const router = Router();

router.get('/cuentas', getCuentas);
router.post('/cuentas', createCuenta);
router.get('/cuentas/:id', getCuentaById);
router.delete('/cuentas/:id', deleteCuenta);

export default router;

// router.get('/cuenta/cliente/:id', getCuentaByCliente);