import express from "express";
import { body } from "express-validator"
import registerUser from "../controllers/user.controller";

const router = express.Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be 3 characters long"),
    body("password").isLength({ min: 5 }).withMessage("Password must be 5 characters long")
], registerUser)



export default router;