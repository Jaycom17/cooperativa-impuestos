import { JWT_SECRET, JWT_SECRET_STUDENT } from "../config/env.js";
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

export function createAccessTokenStudent(user) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, JWT_SECRET_STUDENT, { expiresIn: "30m" }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
}
