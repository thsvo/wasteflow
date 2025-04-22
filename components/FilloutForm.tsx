'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function FilloutForm() {
  return (
    <>
      <div 
        style={{ width: '100%', height: '500px' }} 
        data-fillout-id="56nNzkwPv9us" 
        data-fillout-embed-type="standard" 
        data-fillout-inherit-parameters 
        data-fillout-dynamic-resize
      ></div>
      <Script 
        src="https://server.fillout.com/embed/v1/"
        strategy="lazyOnload"
      />
    </>
  );
}