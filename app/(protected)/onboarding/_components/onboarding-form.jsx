"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onboardingSchema } from '../../../lib/schema';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import useFetch from '../../../../hooks/use-fetch';
import { updateUser } from '../../../actions/user';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';


const OnboardingForm = ({ industries }) => {

    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();

    const {data:updateResult, loading:updateLoading, fn:updateUserFn} = useFetch(updateUser);
    
    const { register, handleSubmit, formState: { errors }, setValue, watch, } = useForm({
        resolver: zodResolver(onboardingSchema),
    });

    const onSubmit = async (values) => {
       console.log("onSubmit values:", values);
        try{
            const formattedIndustry = `${values.industry}${values.subIndustry ? ` - ${values.subIndustry.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]/g, '')
            }` : ''}`;

            const result = await updateUserFn({
                ...values,
                industry: formattedIndustry,
            })
            console.log("Server result:", result); 
        }
        catch(error){
            console.log("Onboarding form submission error:", error);
    }
}

useEffect(() => {
    if(updateResult?.success && !updateLoading){
        toast.success("Profile updated successfully!");
        router.push('/dashboard');
        router.refresh();
    }
}, [updateResult, updateLoading])

    const watchIndustry = watch("industry");
return (
  <div className="min-h-screen pt-28 flex justify-center bg-gradient-to-b from-black via-neutral-950 to-black">
    <Card
      className="
        w-full max-w-xl mx-4
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-xl shadow-black/40
        rounded-2xl
      "
    >
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-semibold text-white">
          Complete Your Profile
        </CardTitle>
        <CardDescription className="text-white/60">
          Help us personalize insights and tools for you
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Industry */}
          <div className="space-y-2">
            <Label className="text-white/80">Industry</Label>
            <Select
              onValueChange={(value) => {
                setValue("industry", value);
                setSelectedIndustry(
                  industries.find((ind) => ind.id === value)
                );
                setValue("subIndustry", "");
              }}
            >
              <SelectTrigger className=" w-full bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/10 text-white">
                {industries.map((ind) => (
                  <SelectItem key={ind.id} value={ind.id}>
                    {ind.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-red-400 text-sm">{errors.industry.message}</p>
            )}
          </div>

          {/* Sub Industry */}
          {watchIndustry && (
            <div className="space-y-2">
              <Label className="text-white/80">Specialization</Label>
              <Select onValueChange={(value) => setValue("subIndustry", value)}>
                <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select specialization" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10 text-white">
                  {selectedIndustry?.subIndustries.map((ind) => (
                    <SelectItem key={ind} value={ind}>
                      {ind}
                    </SelectItem>
                  )) || null}
                </SelectContent>
              </Select>
              {errors.subIndustry && (
                <p className="text-red-400 text-sm">
                  {errors.subIndustry.message}
                </p>
              )}
            </div>
          )}

          {/* Experience */}
          <div className="space-y-2">
            <Label className="text-white/80">Years of Experience</Label>
            <Input
              type="number"
              min={0}
              max={50}
              placeholder="e.g. 2"
              className="
                bg-white/5 border-white/10
                text-white placeholder:text-white/40
              "
              {...register("experience",{valueAsNumber: true})}
            />
            {errors.experience && (
              <p className="text-red-400 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label className="text-white/80">Skills</Label>
            <Input
              placeholder="JavaScript, React, Node.js"
              className="
                bg-white/5 border-white/10
                text-white placeholder:text-white/40
              "
              {...register("skills")}
            />
            <p className="text-xs text-white/40">
              Separate skills with commas
            </p>
            {errors.skills && (
              <p className="text-red-400 text-sm">{errors.skills.message}</p>
            )}
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label className="text-white/80">Professional Bio</Label>
            <Textarea
              className="
                bg-white/5 border-white/10
                text-white placeholder:text-white/40
                min-h-[120px]
              "
              placeholder="Briefly describe your professional background"
              {...register("bio")}
            />
            {errors.bio && (
              <p className="text-red-400 text-sm">{errors.bio.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="
              w-full h-11 rounded-xl
              bg-white text-black font-medium
              hover:bg-white/90 transition
            "
            disabled={updateLoading}
          >
            {updateLoading?(
                <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                Saving...
                </>
            ):(
                "Save and Continue"
            )}
          </Button>

        </form>
      </CardContent>
    </Card>
  </div>
);
}

export default OnboardingForm;

