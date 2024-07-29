import prisma from "../config/prisma.js"

export const isRoomActive = async (req, res, next) => {
    const roomID = req.body.student.roomID;

    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID,
            },
        });
        if (result.roomStatus === "open") {
            next();
        } else {
            res.status(400).json({ message: "La sala está cerrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const isRoomActiveBody = async (req, res, next) => {
    const roomID = req.body.roomID;

    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID,
            },
        });
        if (result.roomStatus === "open") {
            next();
        } else {
            res.status(400).json({ message: "La sala está cerrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const isRoomActiveParams = async (req, res, next) => {
    const roomID = req.params.roomID;

    console.log(req.params);

    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID,
            },
        });
        if (result.roomStatus === "open") {
            next();
        } else {
            res.status(400).json({ message: "La sala está cerrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}