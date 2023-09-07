import PrimaryInputTag from "../../shared/PrimaryInputTag"
import { useState } from "react"
export default function SignupPage() {
  
  return (
    <div 
      className="flex w-screen h-screen justify-end items-center bg-[#A2B2F7]"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-6 sm:w-[444px] sm:h-[346px] flex-shrink-0 bg-red-500">
          <h1 className="text-black text-3xl font-medium">Signup new Healthcare Worker</h1>
          <form className="flex flex-col justify-center items-center space-y-3">
            <PrimaryInputTag inputType="text" placeHolderValue="Nurse Name"/>
            <PrimaryInputTag inputType="password" placeHolderValue="Password"/>
            <button className="sm:w-[230px] sm:h-[54px]">Forgot password?</button>
            <button className="rounded-lg bg-black">Sign up</button>
          </form>
        </div>
      </div>
      <div className="flex-1">
        test2
      </div>
    </div>
  )
}
