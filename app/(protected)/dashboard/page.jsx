import React from 'react'
import { getUserOnboardingStatus } from '../../actions/user'
import { getDashboardData } from "@/app/actions/dashboard";
import { redirect } from 'next/navigation'
import DashboardView from './_components/dashboard-view'


const page = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if(!isOnboarded){
    redirect('/onboarding');
  }


  const  insights  = await getDashboardData();
  return (
    <div className='container mx-auto'>
      <DashboardView insights={insights} />
    </div>
  )
}

export default page;