import { Caratula } from "../models/caratula.model.js";
import { DetalleRenglones } from "../models/detalleRenglones.model.js";
import { Formulario110 } from "../models/form110.model.js";
import { IngresosFacturacion } from "../models/ingFact.model.js";

export const validateCaratula = async (req, res, next) => {
    try {
        const caratula = Caratula.parse(req.body);
        const student = req.body.student;
        req.body = caratula;

        req.body.student = student;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateDetalleRenglones = async (req, res, next) => {
    try {
        const detalleRenglones = DetalleRenglones.parse(req.body);
        const student = req.body.student;
        req.body = detalleRenglones;

        req.body.student = student;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}


export const validateFormulario110 = async (req, res, next) => {
    try {
        const formulario110 = Formulario110.parse(req.body);
        const student = req.body.student;
        req.body = formulario110;

        req.body.student = student;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

export const validateIngresosFacturaciones = async (req, res, next) => {
    try {
        const ingresosFacturacion = IngresosFacturacion.parse(req.body);
        const student = req.body.student;
        req.body = ingresosFacturacion;

        req.body.student = student;
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
}