// pages/callback.js
"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const CallbackRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {

    const code = searchParams.get('code');

    if (code) {
      // Code is present, send it to your backend to exchange for access token
      exchangeCodeForToken(code as string);
    } else {
      // Code is not present, handle error or redirect accordingly
      console.error('No authorization code found');
      // Redirect to error page or home page
      router.push('/signup');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await fetch(`http://localhost:3000/v1/auth/facebook/callback?code=${code}`);
      const data = await response.json();
      // Handle successful token exchange, maybe store token in localStorage or cookies
      console.log('Token data:', data);
      // Redirect to dashboard or profile page
      router.push('/teacher-list');
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      // Redirect to error page or home page
      router.push('/signup');
    }
  };

  return (
    <div className='flex justify-center pt-10'>
    
      <p className='w-full flex justify-center'
      >
        Loading ...
      </p>
    </div>
  );
};

export default CallbackRedirect;
