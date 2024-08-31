"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

function AuthForm({ type }: { type: string }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async(data: z.infer<typeof formSchema>)=> {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    try {
      if(type==='sign-up'){
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password
        }

        const newUser = await signUp(userData);

        setUser(newUser);

        // router.push({pathname:'/',query:{userId:newUser.$id}});
      }
      else if(type === 'sign-in'){
        const response = await signIn({email:data.email,password:data.password})
        
        if(response){
          router.push('/');
        }
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className=" cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold  text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign-In" : "Sign-Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* plaid link */}
          <PlaidLink user={user} variant="primary"/>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    inputType="text"
                    label="First Name"
                    placeholder="Enter your first name"
                  />

                  <CustomInput
                    control={form.control}
                    name="lastName"
                    inputType="text"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address"
                    inputType="text"
                    label="Address"
                    placeholder="Enter your address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    inputType="text"
                    label="City"
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    inputType="text"
                    label="State"
                    placeholder="Enter your state"
                  />

                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    inputType="text"
                    label="Postal Code"
                    placeholder="Enter your postal Code"
                  />
                  </div>
                  <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="dateOfBirth"
                    inputType="text"
                    label="Date of Birth"
                    placeholder="Enter your date of birth"
                  />
                  <CustomInput
                    control={form.control}
                    name="ssn"
                    inputType="text"
                    label="SSN"
                    placeholder="Eample: 12324"
                  />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                inputType="text"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomInput
                control={form.control}
                name="password"
                inputType="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

export default AuthForm;
