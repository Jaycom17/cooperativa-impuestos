import { loginUser, userProfile } from '../services/login.service.js';

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

    res.status(200).json({ usuID: result.usuID, usuEmail: result.usuEmail, usuName: result.usuName, usuRole: result.usuRole});
};

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Sesión cerrada' });
}

export const profile = async (req, res) => {
    const { usuId } = req.body.user;
    const result = await userProfile(usuId);

    if (!result) {
        return res.status(500).json(result.message);
    }

    res.status(200).json(result);
}