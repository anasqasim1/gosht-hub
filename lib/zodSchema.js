import { z } from "zod";
const nameRegex = /^[A-Za-z\s]+$/;
export const zSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." })
    .regex(nameRegex, { message: "Name can only contain letters and spaces." }),
});
