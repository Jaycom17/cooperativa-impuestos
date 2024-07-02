import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";

export function createAccessToken(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, JWT_SECRET, { expiresIn: "30m" }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}
