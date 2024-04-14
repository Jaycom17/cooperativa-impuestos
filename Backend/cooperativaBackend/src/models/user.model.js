import { z } from "zod";

export const User = z.object({
  usuName: z.string({
    required_error: "Se requiere un nombre",
  }),
  usuEmail: z.string({
      required_error: "Se requiere un email",
    }).email({ message: "Email inválido"}),
  usuPassword: z.string({
      required_error: "Se requiere una contraseña",
    }).min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  usuRole: z.string({
      required_error: "Se requiere un rol",
    }).refine((value) => value === "admin" || value === "user", {
      message: "El rol debe ser admin o user",
    })
});

export const Id = z.object({
  usuId: z.string({
    required_error: "Se requiere un nombre",
  })
});

export const Login = z.object({
  usuName: z.string({
    required_error: "Se requiere un nombre",
  }),
  usuPassword: z.string({
      required_error: "Se requiere una contraseña",
  }).min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
});