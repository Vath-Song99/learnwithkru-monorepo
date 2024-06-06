"use client";
import axios from "axios";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize isLoading to true

  useEffect(() => {
    const getCodeAndExchange = async () => {
      const code = searchParams.get("code");

      if (!code) {
        return new Error("No authorization code found");
      }
      try {
        const res = await axios.get(
          `http://localhost:3000/v1/auth/google/callback?code=${code}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.errors) {
           if(res.data.status === 400){
              notFound()
           }
           
        } else if (res.data.data) {
          router.push("/teachers");
        }
        throw new Error("Unexpected Error accurs!");
      } catch (error: unknown) {
        throw error;
      } finally {
        setIsLoading(false); // Set isLoading to false when request completes (whether success or error)
      }
    };

    getCodeAndExchange();
  }, [router, searchParams]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center pt-10">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-[#7B2CBF]"></div>
        </div>
      </div>
    );
  }

  return null; // Render nothing when not loading
};

export default CallbackRedirect;
