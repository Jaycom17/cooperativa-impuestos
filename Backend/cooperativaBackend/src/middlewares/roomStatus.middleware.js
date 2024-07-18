import prisma from "../config/prisma";

export const isRoomOpen = async (req, res, next) => {
    const { roomID } = req.params;
    try {
        const result = await prisma.room.findUnique({
            where: {
                roomID: roomID
            }
        });
        if (result.roomStatus === "open") {
            next();
        } else {
            res.status(403).json({ message: "Room is not open" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}