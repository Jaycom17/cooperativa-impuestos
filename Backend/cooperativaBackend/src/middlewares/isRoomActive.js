import prisma from "../config/prisma"

export const isRoomActive = async (req, res, next) => {
    const { roomID } = req.params;
    
    if (!roomID) {
        roomID = req.body.roomID;
    }

    if (!roomID) {
        return res.status(400).json({ message: "Room ID is required" });
    }

    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID,
            },
        });
        if (result.roomStatus === "active") {
            next();
        } else {
            res.status(400).json({ message: "Room is not active" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}