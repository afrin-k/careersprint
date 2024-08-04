'use client'
import React from 'react';
import { useRouter } from 'next/router';

const Test: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>
        Go to About Page
      </button>
    </div>
  );
};

export default Test;
