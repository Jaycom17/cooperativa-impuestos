import {z} from 'zod';

export const Student = z.object({
    stuName: z.string({
        required_error: "Se requiere un nombre",
    })
})

export const Id = z.object({
    stuId: z.string({
      required_error: "Se requiere una id",
    })
  });