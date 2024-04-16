import {z} from 'zod';

export const Student = z.object({
    stdName: z.string({
        required_error: "Se requiere un nombre",
    }),
    roomId: z.string({
        required_error: "Se requiere una id de una sala",
    }).number({ message: "Id invalido" })
})

export const Id = z.object({
    usuId: z.string({
      required_error: "Se requiere una id",
    })
  });