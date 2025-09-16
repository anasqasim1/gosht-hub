"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "../../../../lib/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "../../../../components/Application/ButtonLoader";
import { z } from "zod";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import {
  WEBSITE_LOGIN,
  WEBSITE_REGISTER,
} from "../../../../routes/WebsiteRoutes";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [isTypeConfirmPassword, setIsTypeConfirmPassword] = useState(true);
  const formSchema = zSchema
    .pick({
      name: true,
      email: true,
      password: true,
    })
    .extend({
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and confirm password must be same",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleLoginSubmit = async (value) => {
    // setLoading(true)
    console.log("values: ", value);
  };

  return (
    <Card className="w-[400px]">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="Logo Image"
            className="max-w-[200px]"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold">Create An Account</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
            <div className="my-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="my-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    {/* <FormLabel>Password</FormLabel> */}
                    <FormControl>
                      <Input
                        type={isTypePassword ? "password" : ""}
                        placeholder="Enter Your Password"
                        {...field}
                      />
                    </FormControl>
                    <button
                      className="absolute top-2/6 right-2 cursor-pointer"
                      type="button"
                      onClick={() => setIsTypePassword(!isTypePassword)}
                    >
                      {isTypePassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-5">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative">
                    {/* <FormLabel>Password</FormLabel> */}
                    <FormControl>
                      <Input
                        type={isTypeConfirmPassword ? "password" : ""}
                        placeholder="Enter Confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <button
                      className="absolute top-2/6 right-2 cursor-pointer"
                      type="button"
                      onClick={() =>
                        setIsTypeConfirmPassword(!isTypeConfirmPassword)
                      }
                    >
                      {isTypeConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <ButtonLoader
                type="submit"
                text="Login"
                className="w-full cursor-pointer"
                loading={loading}
              />
            </div>
          </form>
        </Form>
        <div className="flex justify-center item-center gap-1 mt-5">
          <p className="text-sm">Already have account?</p>
          <Link href={WEBSITE_LOGIN} className="text-sm text-primary underline">
            Login!
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
