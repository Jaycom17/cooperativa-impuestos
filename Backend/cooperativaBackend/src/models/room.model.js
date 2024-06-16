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
<<<<<<< HEAD
    }).refine(value => !isNaN(Date.parse(value)), { message: "Fecha invalida" }),
=======
    }),
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }).refine((value) => value === "open" || value === "closed", {
        message: "El status debe ser open o closed",
    }),
    //Buscar como validar con la base de datos
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
<<<<<<< HEAD
    })
});

export const Id = z.object({
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
=======
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
    })
});

export const Id = z.object({
    roomID: z.string({
        required_error: "Se requiere una id de sala",
    })
});

export const Year = z.object({
    roomYear: z.string({
        required_error: "Se requiere un año",
    })
});

export const updateRoom = z.object({
    roomDate: z.string({
        required_error: "Se requiere una fecha",
<<<<<<< HEAD
        }).refine(value => !isNaN(Date.parse(value)), { message: "Fecha invalida" }),
=======
    }),
>>>>>>> 5cad2010bef3fe9355ef134bcb30c1ff313a10ad
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }),
    usuID: z.string({
        required_error: "Se requiere una id de usuario",
    })
})