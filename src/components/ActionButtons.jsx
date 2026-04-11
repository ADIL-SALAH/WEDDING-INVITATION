import { motion } from 'framer-motion';
import { Heart, CalendarPlus, MessageCircleHeart } from 'lucide-react';

export default function ActionButtons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Salah+%26+Fida+Wedding&dates=20260823T043000Z/20260823T103000Z&details=Join+us+to+celebrate+the+wedding+of+Salah+%26+Fida!&location=Hayath+Auditorium%2C+Cherumukku%2C+Tirurangadi";
  const whatsappUrl = "https://wa.me/918714157908?text=Hi%20%F0%9F%98%8A%20So%20happy%20for%20you%20both%20%F0%9F%92%8D%20Can%E2%80%99t%20wait%20for%20your%20big%20day%20%E2%9D%A4%EF%B8%8F";

  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-center relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 relative z-10"
      >
        <motion.a 
          variants={itemVariants}
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white border border-soft-gold/10 text-dark-text rounded-full hover:bg-soft-gold/5 transition-all duration-300 font-sans tracking-wide shadow-sm hover:shadow-md"
        >
          <Heart className="w-5 h-5 text-soft-gold transition-transform group-hover:scale-110" />
          <span>Save the Date</span>
        </motion.a>

        <motion.a 
          variants={itemVariants}
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-soft-gold text-ivory rounded-full hover:bg-soft-gold/90 transition-all duration-300 font-sans tracking-wide shadow-lg hover:shadow-xl hover:shadow-soft-gold/20"
        >
          <CalendarPlus className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span>Add to Calendar</span>
        </motion.a>

        <motion.a 
          variants={itemVariants}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white border border-soft-gold/10 text-dark-text rounded-full hover:bg-soft-gold/5 transition-all duration-300 font-sans tracking-wide shadow-sm hover:shadow-md"
        >
          <MessageCircleHeart className="w-5 h-5 text-soft-gold transition-transform group-hover:scale-110" />
          <span>Message Us</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
