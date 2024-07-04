import prisma from "../config/prisma.js";
import { v4 as uuidv4 } from "uuid";

export const createReport = async (stuID, roomID) => {
    try{
        const formsID = {
            formActivosFijos: uuidv4(),
            formCaratula: uuidv4(),
            formDetalleReglones: uuidv4(),
            formEsfPatrimonio: uuidv4(),
            formImpuestoDiferido: uuidv4(),
            formIngresosFacturacion: uuidv4(),
            form110: uuidv4(),
            formRentaLiquida: uuidv4(),
            formResumen: uuidv4(),
        }

        await prisma.formactivosfijos.create({
            data: {
                actID: formsID.formActivosFijos,
                actContent: "{}"
            }
        });

        await prisma.formcaratula.create({
            data: {
                carID: formsID.formCaratula,
                carContent: "{}"
            }
        });

        await prisma.formdetallerenglones.create({
            data: {
                detID: formsID.formDetalleReglones,
                detContent: "{}"
            }
        });

        await prisma.formesfpatrimonio.create({
            data: {
                esfID: formsID.formEsfPatrimonio,
                esfContent: "{}"
            }
        });

        await prisma.formimpuestodiferido.create({
            data: {
                impID: formsID.formImpuestoDiferido,
                impContent: "{}"
            }
        });

        await prisma.formingresosfancturacion.create({
            data: {
                ingID: formsID.formIngresosFacturacion,
                ingContent: "{}"
            }
        });

        await prisma.formr110.create({
            data: {
                r110ID: formsID.form110,
                r110Content: "{}"
            }
        });

        await prisma.formrentaliquida.create({
            data: {
                renID: formsID.formRentaLiquida,
                renContent: "{}"
            }
        });

        await prisma.formresumenesferi.create({
            data: {
                resID: formsID.formResumen,
                resContent: "{}"
            }
        });

        const report = await prisma.report.create({
            data: {
                repID: uuidv4(),
                stuID: stuID,
                roomID: roomID,
                carID: formsID.formCaratula,
                detID: formsID.formDetalleReglones,
                esfID: formsID.formEsfPatrimonio,
                renID: formsID.formRentaLiquida,
                impID: formsID.formImpuestoDiferido,
                ingID: formsID.formIngresosFacturacion,
                actID: formsID.formActivosFijos,
                resID: formsID.formResumen,
                r110ID: formsID.form110
            }
        });
    }catch(error){
        console.error(error);
        return { message: "Error al crear el reporte" };
    }
}