import { MapPin, Clock, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Details() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-center relative">
      
      {/* Decorative top pattern/line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-dark-text mb-20 font-light">
          When & Where
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Date Card */}
          <motion.div variants={itemVariants} className="flex flex-col items-center bg-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-soft-gold/5 transition-transform duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-soft-gold/5 flex items-center justify-center mb-8">
              <CalendarDays className="w-7 h-7 text-soft-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4 text-dark-text tracking-wide">The Date</h3>
            <p className="text-dark-text/70 font-sans leading-relaxed">
              23rd August 2026<br/>
              Sunday
            </p>
          </motion.div>

          {/* Time Card */}
          <motion.div variants={itemVariants} className="flex flex-col items-center bg-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-soft-gold/5 transition-transform duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-soft-gold/5 flex items-center justify-center mb-8">
              <Clock className="w-7 h-7 text-soft-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4 text-dark-text tracking-wide">The Time</h3>
            <p className="text-dark-text/70 font-sans leading-relaxed">
              10:00 AM – 4:00 PM<br/>
              Join us for the feast
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div variants={itemVariants} className="flex flex-col items-center bg-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-soft-gold/5 transition-transform duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-soft-gold/5 flex items-center justify-center mb-8">
              <MapPin className="w-7 h-7 text-soft-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4 text-dark-text tracking-wide">The Venue</h3>
            <p className="text-dark-text/70 font-sans leading-relaxed">
              Hayath Auditorium<br/>
              Cherumukku, Tirurangadi
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-20">
          <a 
            href="https://maps.app.goo.gl/JQ9ULFU6TTUECfZs5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-soft-gold text-ivory rounded-full transition-all duration-300 font-sans tracking-wide hover:shadow-xl hover:shadow-soft-gold/20"
          >
            <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Get Directions</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
