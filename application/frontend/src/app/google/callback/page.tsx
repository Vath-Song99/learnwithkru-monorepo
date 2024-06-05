"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize isLoading to true

  useEffect(() => {
    const getCodeAndExchange = async () => {
      const code = searchParams.get("code");

      if (!code) {
        console.error("No authorization code found");
        return;
      }

      try {
        const { data } = await axios.get(
          `http://localhost:3000/v1/auth/google/callback?code=${code}`,
          {
            withCredentials: true,
          }
        );
        console.log("Token data:", data);
        router.push("/teachers");
      } catch (error) {
        console.error("Error exchanging code for token:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false when request completes (whether success or error)
      }
    };

    getCodeAndExchange();
  }, []);

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
