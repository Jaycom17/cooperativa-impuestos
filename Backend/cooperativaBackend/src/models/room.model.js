import { z } from "zod";

export const User = z.object({
    roomPassword: z.string({
        required_error: "Se requiere una contraseña",
    }),
    roomDate: z.string({
        required_error: "Se requiere una fecha",
    }).date({ message: "Fecha invalida" }),
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }).refine((value) => value === "open" || value === "closed", {
        message: "El status debe ser open o closed",
    }),
    //Buscar como validar con la base de datos
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
    }).number({ message: "Id invalido" })
});

export const Id = z.object({
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
    })
});

export const update = z.object({
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
    }),
    roomDate: z.string({
        required_error: "Se requiere una fecha",
    }).date({ message: "Fecha invalida" }),
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }).refine((value) => value === "open" || value === "closed", {
        message: "El status debe ser open o closed",
    }),
});