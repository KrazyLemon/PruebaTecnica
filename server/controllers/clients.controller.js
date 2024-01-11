import { pool } from "../db.js";


export const getClients = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente');
        console.log("Obteniendo clientes");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener los cliente:", error);
        res.status(500).json({ message: "Error al obtener los cliente" });
    }
};

export const createClient = async (req, res) => {
    try {
        const { nombre, aPaterno, aMaterno, edad, sexo, email, curp } = req.body;
        const newClient = {
            nombre,
            aPaterno,
            aMaterno,
            edad,
            sexo,
            email,
            curp
        };
        await pool.query('INSERT INTO cliente set ?', [newClient]);
        res.json({
            message: 'New client created'
        });
    } catch (error) {
        console.error("Error al crear el cliente:", error);
        res.status(500).json({ message: "Error al crear el cliente" });
    }
};

export const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const [client] = await pool.query('SELECT * FROM cliente WHERE idCliente= ?', [id]);
        res.json(client[0]);
    } catch (error) {
        console.error("Error al obtener el cliente:", error);
        res.status(500).json({ message: "Error al obtener el cliente" });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM cliente WHERE idCliente = ?', [id]);
        res.json({
            message: 'Client deleted'
        });
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
        res.status(500).json({ message: "Error al eliminar el cliente" });
    }
};

export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, aPaterno, aMaterno, edad, sexo, email, curp } = req.body;
        const newClient = {
            nombre,
            aPaterno,
            aMaterno,
            edad,
            sexo,
            email,
            curp
        };
        await pool.query('UPDATE cliente set ? WHERE idCliente = ?', [newClient, id]);
        res.json({
            message: 'Client updated'
        });
    } catch (error) {
        console.error("Error al actualizar el cliente:", error);
        res.status(500).json({ message: "Error al actualizar el cliente" });
    }
};