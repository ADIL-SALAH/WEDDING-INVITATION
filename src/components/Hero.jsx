import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
  // Track scroll specifically for the Hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax mapping: as we scroll down, background moves down slightly, text moves up faster, and everything fades out.
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-dark-text">
      
      {/* Parallax Cinematic Background Image */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80')" }}
        />
      </motion.div>
      
      {/* Deep Emerald + Glow Overlay */}
      <div className="absolute inset-0 bg-soft-gold/70 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-text via-transparent to-soft-gold/30 z-0"></div>

      {/* Floating Sparkles Array (simulated via CSS absolute positioning over the screen) */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <motion.div 
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
        className="z-10 flex flex-col items-center text-center px-6 text-ivory"
      >
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="text-xs md:text-[20px] tracking-[0.5em] uppercase mb-8 font-medium text-lux-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8 font-medium text-lux-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
        >
          We Invite You To Celebrate
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-serif mb-6 font-medium text-gradient-gold drop-shadow-2xl py-4"
        >
          Adil <span className="mx-2 md:mx-6 text-ivory/80 italic font-light">&</span> Fida
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="text-xl md:text-3xl font-serif italic mb-16 text-ivory/90 font-light tracking-wide"
        >
          “A new chapter begins…”
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.8 }}
        style={{ opacity: opacityText }}
        className="absolute bottom-16 z-10 flex flex-col items-center text-ivory/80"
      >
        {/* <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-6 text-lux-gold">
          Scroll to Begin 💍
        </p> */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-lux-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
