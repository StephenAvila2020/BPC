import { Router, Request, Response } from "express";
import PingController from "../controllers/PingController";

const router = Router();
router.get("/ping/:server", async (req: Request, res: Response) => {
    const controller = new PingController();
    const response = await controller.getMessage(req.params?.server);
    return res.send(response);
});

export default router;