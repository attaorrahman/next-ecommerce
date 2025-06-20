"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";


const AuthPage = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="flex min-height-screen mt-7 ">
      <div className="w-full max-w-2xl mx-auto flex flex-col lg-flex-row p-3 ">
        <div
          className="mb-8 lg:mb-12 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <ChevronLeft className="mr-2 h-8 w-8 text-gray-500 rounded-full border-2" />
        </div>
        <div>
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent pb-2">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-6 sm:mb-8"> {isSignUp ? "Join AR Store and enjoy discover exclusive deals on your favorite Product " :"Welcome back to AR Store! Login to continue your shoppiong journey."}</p>
          
        </div>
        <div className="mt-4 sm:mt-5 flex items-center justify-center">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">{isSignUp?"Already a Member":"Don't have an Account"}</p>
           <Button 
        variant='link'
        className="text-lg sm:text-xl lg:text-2xl text-gray-500 cursor-pointer"
        onClick={toggleAuthMode}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </Button>
        </div>
       
      </div>
    </div>
  );
};

export default AuthPage;
