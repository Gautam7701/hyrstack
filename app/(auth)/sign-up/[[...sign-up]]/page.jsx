import { SignUp } from "@clerk/nextjs";

const authTheme = {
  variables: {
    colorPrimary: "#22d3ee",
    colorText: "#ffffff",
    colorBackground: "rgba(2, 6, 23, 0.92)",
    colorInputBackground: "rgba(255, 255, 255, 0.06)",
    colorInputText: "#ffffff",
    colorInputBorder: "rgba(255,255,255,0.14)",
    borderRadius: "14px",
  },
  layout: {
    logoPlacement: "insideForm",
    socialButtonsVariant: "iconButton",
  },
  elements: {
    cardBox: "shadow-none",
    card: "bg-transparent shadow-none border-0",
    headerTitle: "text-white",
    headerSubtitle: "text-white/60",
    formButtonPrimary:
      "bg-white text-black hover:bg-sky-100",
    formInput:
      "bg-white/[0.05] text-white border border-white/15 rounded-xl px-3 py-2",
    footerActionText: "text-white/60",
    footerActionLink: "text-sky-200 hover:text-sky-100",
  },
};

export default function SignUpPage() {
  return <SignUp path="/sign-up" routing="path" appearance={authTheme} />;
}
