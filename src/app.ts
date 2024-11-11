import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandlers from "./app/middlewares/globalErrorHandlers";
import { StatusCodes } from "http-status-codes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to Library ",
  });
});

app.use("/api", router);

app.use(globalErrorHandlers);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    status: StatusCodes.NOT_FOUND,
    message: `${req.originalUrl} - Your requested path is not found!`,
  });
});

export default app;
