import { redirect } from "next/navigation";

import { industries } from "../../../data/industries";
import { getUserOnboardingStatus } from "../../actions/user";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-background opacity-60" />
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
