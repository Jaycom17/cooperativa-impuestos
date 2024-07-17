import { JWT_SECRET, JWT_SECRET_STUDENT, JWT_SECRET_REFRESH } from "../config/env.js";
import jwt from "jsonwebtoken";

export function createAccessToken(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, JWT_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}

export function createAccessTokenStudent(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, JWT_SECRET_STUDENT, { expiresIn: "12h" }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}
