import express from "express";
import mongoose from "mongoose";
const app = express();

const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb://localhost:27017/courses', { dbName: "courses" });

// import { z } from "zod";
// import express, { Request, Response } from "express";

// const app = express();
// app.use(express.json());
// const ZodRuntimeValidator = z.object({
// 	name: z.string().min(1, { message: "a name cannot be empty" }),
// 	age: z.number().min(18, { message: "age must be greater or equal to 18" }),
// 	email: z.string().email({ message: "Invalid email" }).optional(),
// });
// type zodCompileTimeValidator = z.infer<typeof ZodRuntimeValidator>;
// const user: zodCompileTimeValidator = {
// 	name: "Aashim",
// 	age: 5,
// };

// const router = express.Router();
// const UserController = async (req: Request, res: Response) => {
// 	const user: zodCompileTimeValidator = req.body;
// 	const { success, error } = ZodRuntimeValidator.safeParse(user);
// 	try {
// 		if (success) {
// 			res.status(200).json({
// 				message: "successfull added the user",
// 				data: user,
// 			});
// 		} else if (error) {
// 			console.log(error);
// 			res.status(400).json({
// 				message: "body validation failed",
// 			});
// 		}
// 	} catch (e) {
// 		res.status(400).json({
// 			message: "Failed",
// 		});
// 	}
// };
// router.route("/signup").post(UserController);
// app.use("/api/v1/user", router);
// app.listen(3000, "127.0.0.1", () => {
// 	console.log("Server is listening on port 3000");
// });
