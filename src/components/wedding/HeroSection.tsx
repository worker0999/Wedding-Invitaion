import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WEDDING_DATE = new Date("2026-05-10T10:30:00+05:30");

const getTimeLeft = () => {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToRsvp = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ornate Islamic courtyard with lanterns and rose petals at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="label-caps text-primary-foreground mb-2 tracking-[0.2em]"
        >
          Nikkah — Wedding Invitation
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0, 0, 1] }}
          className="font-body text-sm text-primary-foreground/80 mb-10 max-w-[40ch] leading-relaxed"
        >
          Assalamualaikum wa rahmatullahi wa barakatuhu
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="display-hero text-gradient-platinum text-glow-platinum py-2 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          Ajith Khan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl text-[#E5E4E2]/90 italic my-6 drop-shadow-lg select-none"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="display-hero text-gradient-platinum text-glow-platinum py-2 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          Afrin Fathima
        </motion.h1>
      </div>

      {/* Date anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 text-center mt-12"
      >
        <p className="label-caps text-primary-foreground/80 mb-3 tracking-[0.2em]">Save the Date</p>
        <div className="flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-display text-5xl md:text-8xl text-gradient-platinum text-glow-platinum tracking-[0.05em] font-medium mb-6"
          >
            10 // 05 // 2026
          </motion.p>
          
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-[#E5E4E2]/50" />
            <p className="font-body text-sm md:text-base text-primary-foreground/90 tabular-nums tracking-[0.3em] uppercase font-light">
              Sunday · 23 Dhul-Qi'dah 1447 AH
            </p>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-[#E5E4E2]/50" />
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-6">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="flex flex-col items-center bg-foreground/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[60px] md:min-w-[72px]">
              <span className="font-display text-3xl md:text-4xl text-primary-foreground font-light tabular-nums leading-none drop-shadow-md">
                {String(timeLeft[unit]).padStart(2, "0")}
              </span>
              <span className="label-caps text-primary-foreground/70 mt-1.5 text-[9px]">
                {unit}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={scrollToRsvp}
          className="mt-8 label-caps text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:text-primary-foreground hover:border-primary-foreground transition-colors duration-300 tracking-[0.2em]"
        >
          RSVP Now
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
