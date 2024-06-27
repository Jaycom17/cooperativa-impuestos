import { z } from "zod";

export const Room = z.object({
    roomName: z.string({
        required_error: "Se requiere un nombre",
    }),
    roomPassword: z.string({
        required_error: "Se requiere una contraseña",
    }),
    roomDate: z.string({
        required_error: "Se requiere una fecha",
    }),
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }).refine((value) => value === "open" || value === "closed", {
        message: "El status debe ser open o closed",
    }),
    //Buscar como validar con la base de datos
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
    })
});

export const Id = z.object({
    roomID: z.string({
        required_error: "Se requiere una id de sala",
    })
});

export const Date = z.object({
    roomDate: z.string({
        required_error: "Se requiere un año",
    })
});

export const updateRoom = z.object({
    roomID: z.string({
        required_error: "Se requiere una id de sala",
    }),
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    })
})