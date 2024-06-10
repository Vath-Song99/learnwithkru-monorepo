"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackRedirect = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize isLoading to true
  const searchParams = useSearchParams();
  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      throw new Error("No authorization code found");
    }
    const exchangeCodeForToken = async (code: string) => {
      try {
        const res = await axios.get(
          `http://localhost:3000/v1/auth/facebook/callback?code=${code}`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
      } catch (error: unknown) {
        console.error("Error exchanging code for token:", error);
        // Redirect to error page or home page
      } finally {
        setIsLoading(false);
        router.push("/teachers");
      }
    };

    exchangeCodeForToken(code);
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
