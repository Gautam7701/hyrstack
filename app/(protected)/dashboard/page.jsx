import { redirect } from "next/navigation";

import { getDashboardData } from "@/app/actions/dashboard";
import { getUserOnboardingStatus } from "../../actions/user";
import DashboardView from "./_components/dashboard-view";

const page = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getDashboardData();

  return <DashboardView insights={insights} />;
};

export default page;
