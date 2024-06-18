import { loginUser } from '../services/login.service.js';

export const login = async (req, res) => {
    const { usuEmail, usuPassword } = req.body;
    const result = await loginUser({ usuEmail, usuPassword });

    if (!result.token) {
        return res.status(500).json(result.message);
    }

    res.cookie('token', result.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 900000
    });

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
};

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Sesión cerrada' });
}