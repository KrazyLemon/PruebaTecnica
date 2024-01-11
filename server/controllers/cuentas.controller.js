import { pool } from "../db.js";

export const getCuentas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT c.idCliente, c.nombre, c.aPaterno, c.aMaterno, c.edad, c.sexo, c.email, c.curp, cu.numeroCuenta FROM cliente c INNER JOIN cuentas cu ON c.idCliente = cu.idCliente;');
        console.log("Obteniendo cuentas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener las cuentas:", error);
        res.status(500).json({ message: "Error al obtener las cuentas" });
    }
}

export const createCuenta = async (req, res) => {
    try {
        const { idCliente,numeroCuenta } = req.body;
        const newCuenta = {
            idCliente,
            numeroCuenta
        };
        await pool.query('INSERT INTO cuentas set ?', [newCuenta]);
        res.json({
            message: 'New cuenta created'
        });
    } catch (error) {
        console.error("Error al crear la cuenta:", error);
        res.status(500).json({ message: "Error al crear la cuenta" });
    }
}

export const getCuentaById = async (req, res) => {
    try {
        const { id } = req.params;
        const [cuenta] = await pool.query('SELECT * FROM cuentas WHERE idCuenta= ?', [id]);
        res.json(cuenta[0]);
    } catch (error) {
        console.error("Error al obtener la cuenta:", error);
        res.status(500).json({ message: "Error al obtener la cuenta" });
    }
}

export const deleteCuenta = async (req, res) => {
    try{
        const { id } = req.params;
        await pool.query('DELETE FROM cuentas WHERE idCuenta = ?', [id]);
        res.json({
            message: 'Cuenta Eliminada'
        });
    }catch (error) {
        console.error("Error al eliminar la cuenta:", error);
        res.status(500).json({ message: "Error al eliminar la cuenta" });
    }
}

export const getCuentaByCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const [cuenta] = await pool.query('SELECT * FROM cuentas WHERE idCliente= ?', [id]);
        res.json(cuenta[0]);
    } catch (error) {
        console.error("Error al obtener la cuenta:", error);
        res.status(500).json({ message: "Error al obtener la cuenta" });
    }
}   
