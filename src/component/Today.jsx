import React, { useState, useEffect } from 'react';
import Container from './Container';



const Today = () => {
  const TARGET_DATE = "2026-12-31T23:59:59";

  const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      timeLeft = {
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='mt-10 '>
      <Container>
        {/* Category Header */}
        <div className='flex items-center gap-4'>
          <div className='w-5 h-10 bg-red-600 rounded-sm'></div>
          <h3 className='font-poppins font-semibold text-red-600'>Today's</h3>
        </div>

        {/* Title & Countdown Timer Container */}
        <div className='flex items-end gap-12 mt-4'>
          <h2 className='font-poppins text-2xl font-bold tracking-wide'>Flash Sales</h2>

          {/* Countdown Clock */}
          <div className='flex items-center gap-4 font-poppins'>
            {/* Days */}
            <div className='text-center'>
              <p className='text-[14px]  '>Days</p>
              <span className='text-2xl font-bold'>{timeLeft.days}</span>
            </div>

            <span className='text-2xl font-bold text-red-500 mt-3'>:</span>

            {/* Hours */}
            <div className='text-center'>
              <p className='text-[14px] '>Hours</p>
              <span className='text-2xl font-bold'>{timeLeft.hours}</span>
            </div>

            <span className='text-2xl font-bold text-red-500 mt-3'>:</span>

            {/* Minutes */}
            <div className='text-center'>
              <p className='text-[14px]'>Minutes</p>
              <span className='text-2xl font-bold'>{timeLeft.minutes}</span>
            </div>

            <span className='text-2xl font-bold text-red-500 mt-3'>:</span>

            {/* Seconds */}
            <div className='text-center'>
              <p className='text-[14px]'>Seconds</p>
              <span className='text-2xl font-bold'>{timeLeft.seconds}</span>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Today;