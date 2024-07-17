import { loginUser, userProfile } from "../services/login.service.js";

export const login = async (req, res) => {
  const { usuEmail, usuPassword } = req.body;
  const result = await loginUser({ usuEmail, usuPassword });

  if (!result.token) {
    return res.status(500).json(result.message);
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res
    .status(200)
    .json({
      usuID: result.usuID,
      usuEmail: result.usuEmail,
      usuName: result.usuName,
      usuRole: result.usuRole,
    });
};

export const logout = async (_req, res) => {
  res.clearCookie("token");
  res.clearCookie("tokenRefresh");
  res.status(200).json({ message: "Sesión cerrada" });
};

export const profile = async (req, res) => {
  console.log(req.body)
  const { usuID } = req.body.user;
  const result = await userProfile(usuID);

  if (!result) {
    return res.status(500).json(result.message);
  }

  res.status(200).json(result);
};

export const studentProfile = async (req, res) => {
  const student = req.body.student;

  if (!student) {
    return res.status(500).json({ message: "Error al obtener el estudiante" });
  }

  res.status(200).json(student);
}
