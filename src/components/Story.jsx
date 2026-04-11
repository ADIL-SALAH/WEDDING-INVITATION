import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBackgroundText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const storyParagraphs = [
    "In 2025, our journey began with a simple Pennukaanal, surrounded by family and quiet smiles.",
    "Soon after, he came again… just to catch a glimpse of her from outside — a small, playful moment that stayed in the heart.",
    "On August 9th, we got engaged — a beautiful step that brought our worlds closer.",
    "Then came a twist… he accidentally got her number. What felt like a small mistake turned into endless conversations, laughter, and memories we now cherish.",
    "A special thanks to her cousin brother — for that ‘mistake’ that became the beginning of everything.",
    "From little moments… to a lifetime together."
  ];

  return (
    <section ref={ref} className="min-h-screen py-40 px-6 md:px-12 bg-ivory flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Floating parallax background typography */}
      <motion.div 
        style={{ y: yBackgroundText }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-0 overflow-hidden"
      >
        <h2 className="text-[200px] md:text-[400px] font-serif text-soft-gold whitespace-nowrap">
          Our Story
        </h2>
      </motion.div>

      {/* Subtle organic light flares */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-lux-gold/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-soft-gold/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-serif text-dark-text mb-24 text-balance font-light tracking-wide">
          Our <span className="text-gradient-gold italic font-medium">Story</span>
        </h2>
        
        <div className="relative">
          {storyParagraphs.map((text, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-20 md:mb-24 flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl font-serif italic leading-[2] text-dark-text/80 md:max-w-3xl text-balance font-light">
                {text}
              </p>
              
              {/* Luxury dot separator */}
              {index !== storyParagraphs.length - 1 && (
                <div className="flex flex-col items-center mt-20 md:mt-24 space-y-3">
                  <div className="w-1 h-1 rounded-full bg-lux-gold/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-lux-gold" />
                  <div className="w-1 h-1 rounded-full bg-lux-gold/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
