import { listReport } from "../services/report.service.js";

export const getReport = async (req, res) => {
    const student = req.body.student;
    
    try {
        const report = await listReport(student);
    
        if (report.message) {
            return res.status(400).json({ message: report.message });
        }
    
        return res.status(200).json(report);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener el reporte" });
    }
};