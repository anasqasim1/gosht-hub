"use client";
import React, { useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "../../../../lib/zodSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "../../../../components/Application/ButtonLoader";
import { z } from "zod";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { WEBSITE_REGISTER } from "../../../../routes/WebsiteRoutes";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const formSchema = zSchema
    .pick({
      email: true,
    })
    .extend({
      password: z.string().min("3", "Password is required"),
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
          <h1 className="text-2xl font-semibold">Login Into Your Account</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
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
          <p className="text-sm">Don't have account?</p>
          <Link href={WEBSITE_REGISTER} className="text-sm text-primary underline">
            Create One!
          </Link>
        </div>
        <div className="flex justify-center item-center gap-1 mt-5">
          <Link href='' className="text-sm text-primary underline">
            Forget Password!
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
