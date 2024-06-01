"use client"
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CallbackRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading , setIsLoading] = useState<boolean>(true); // Initialize isLoading to true

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      exchangeCodeForToken(code as string);
    } else {
      console.error('No authorization code found');
      router.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const {data} = await axios.get(`http://localhost:3000/v1/auth/google/callback?code=${code}`,{
        withCredentials: true
      });
      console.log('Token data:', data);
      router.push('/teacher-list');
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      router.push('/');
    } finally {
      setIsLoading(false); // Set isLoading to false when request completes (whether success or error)
    }
  };

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
