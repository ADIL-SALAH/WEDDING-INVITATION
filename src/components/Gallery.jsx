import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      src: "11.jpeg",
      alt: "Wedding aesthetic 1",
      className: "col-span-2 row-span-2"
    },
    {
      src: "10.jpeg",
      alt: "Wedding aesthetic 2",
      className: "col-span-1 row-span-1"
    },
    {
      src: "15.jpeg",
      alt: "Wedding aesthetic 3",
      className: "col-span-1 row-span-1"
    },
    {
      src: "14.jpeg",
      alt: "Wedding aesthetic 4",
      className: "col-span-2 row-span-1"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-ivory">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-dark-text mb-20 text-center font-light tracking-wide">
          Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[180px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`overflow-hidden rounded-[2rem] relative group shadow-lg ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 ease-out"
              />
              <div className="absolute inset-0 bg-dark-text/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
