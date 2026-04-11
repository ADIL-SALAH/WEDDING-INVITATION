export default function Footer() {
  return (
    <footer className="py-20 bg-soft-gold text-center relative overflow-hidden">
      
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-ivory/90 font-serif italic text-lg md:text-xl font-light tracking-wide">
        “Your presence is the only gift we need ❤️”
      </div>
      <div className="relative z-10 mt-12 pt-12 px-6 text-[10px] text-ivory/50 font-sans uppercase tracking-[0.3em] font-medium border-t border-ivory/10 mx-auto max-w-[200px]">
        Salah & Fida &copy; 2026
      </div>
    </footer>
  );
}
