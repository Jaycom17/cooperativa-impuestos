import { z } from "zod";

export const Student = z.object({
  stuCedula: z.string({
    required_error: "Se requiere un nombre",
  }),
  roomID: z.string({
    required_error: "Se requiere un id de aula",
  }),
});

export const Id = z.object({
  stuID: z.string({
    required_error: "Se requiere una id stu",
  }),
});

export const roomId = z.object({
  roomID: z.string({
    required_error: "Se requiere una id room",
  }),
});
