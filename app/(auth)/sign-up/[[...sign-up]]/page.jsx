// import { SignUp } from '@clerk/nextjs'
// import React from 'react'

// const page = () => {
//   return (
//     <SignUp/>
//   )
// }

// export default page


import { SignIn, SignUp } from "@clerk/nextjs";

const authTheme = {
  variables: {
    colorPrimary: "#6c47ff", // accent color (e.g., your brand)
    colorText: "#ffffff",
    colorBackground: "#111111",
    colorInputBackground: "rgba(255, 255, 255, 0.05)", // glass input
    colorInputText: "#fff",
    colorInputBorder: "rgba(255,255,255,0.2)",
    colorButtonBackground: "rgba(255,255,255,0.1)",
    colorButtonText: "#fff",
    borderRadius: "12px",
  },
  layout: {
    logoPlacement: "insideForm", // or 'aboveForm'
    socialButtonsVariant: "iconButton",
  },
  elements: {
    formButtonPrimary: "bg-white/10 hover:bg-white/20 text-white transition rounded-xl",
    formInput: "bg-white/5 text-white border border-white/20 rounded-lg px-3 py-2",
  },
};

export default function SignUpPage() {
  return (

      <SignUp
        path="/sign-up"
        routing="path"
        appearance={authTheme}
      />
  );
}
