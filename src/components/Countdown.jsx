import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-08-23T10:00:00').getTime();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleBg = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ value, label }) => (
    <div className="flex flex-col items-center mx-3 md:mx-12 min-w-[75px] md:min-w-[140px]">
      <div className="text-6xl md:text-8xl lg:text-9xl font-serif text-gradient-gold mb-6 font-light tracking-tight drop-shadow-lg">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm tracking-[0.4em] uppercase text-ivory/60 font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-40 px-6 bg-dark-text flex flex-col items-center justify-center relative overflow-hidden shadow-2xl z-20">
      
      {/* Dynamic scaled texture overlay tying back to the deep emerald/dark text base */}
      <motion.div 
        style={{ scale: scaleBg }}
        className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" 
      />
      
      {/* Luxury center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-soft-gold/30 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <h2 className="text-2xl md:text-4xl font-serif text-ivory/80 mb-20 font-light italic tracking-wide">
          "Counting down to forever..."
        </h2>
        
        <div className="flex justify-center items-center divide-x-2 divide-lux-gold/20">
          <Item value={timeLeft.days} label="Days" />
          <Item value={timeLeft.hours} label="Hours" />
          <Item value={timeLeft.minutes} label="Mins" />
          <Item value={timeLeft.seconds} label="Secs" />
        </div>
      </motion.div>
    </section>
  );
}
