import { motion } from "framer-motion";
import { MapPin, CalendarHeart, Navigation } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const events = [
  {
    label: "The Nikkah",
    date: "10 // 05 // 2026",
    time: "10:30 AM – 12:00 PM",
    venue: "SVR Heritage Hall",
    address: "Byepass Road, Uthamapalayam",
    mapUrl: "https://share.google/atuXH1pCnzn7KqkyC",
    description: "The sacred ceremony uniting two souls in the bond of Nikkah",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0, 0, 1] } },
};

const EventsSection = () => {
  return (
    <section id="events" className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Extravagant Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B120C] z-0" />
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-20 blur-md scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B120C] via-transparent to-[#0B120C] z-0" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          className="flex flex-col items-center mb-16"
        >
          <p className="label-caps text-[#D4AF37] mb-6 tracking-[0.3em]">
            Wedding Event
          </p>
          <h2 className="display-section text-gradient-platinum text-center mb-4 text-5xl md:text-7xl pb-2">
            Join Us In Celebration
          </h2>
          <div className="flex items-center gap-4 text-[#D4AF37]/60">
            <span className="w-16 h-[1px] bg-[#D4AF37]/40" />
            <span className="text-xl font-arabic drop-shadow-md">✦</span>
            <span className="w-16 h-[1px] bg-[#D4AF37]/40" />
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto relative group">
          {/* Animated Glow Behind Card */}
          <motion.div
            animate={{ 
              boxShadow: ["0 0 40px -10px rgba(212,175,55,0.1)", "0 0 60px -10px rgba(212,175,55,0.3)", "0 0 40px -10px rgba(212,175,55,0.1)"] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#D4AF37]/5 rounded-3xl blur-2xl"
          />

          {events.map((event) => (
            <motion.div
              key={event.label}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative backdrop-blur-md bg-[#131A15]/80 border border-[#D4AF37]/30 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden"
              style={{ borderRadius: '2rem' }}
            >
              {/* Corner Ornaments */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#D4AF37]/40 rounded-tl-3xl m-4 opacity-50" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#D4AF37]/40 rounded-tr-3xl m-4 opacity-50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#D4AF37]/40 rounded-bl-3xl m-4 opacity-50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#D4AF37]/40 rounded-br-3xl m-4 opacity-50" />

              <motion.div variants={itemVariants} className="mb-8 relative">
                <span className="absolute -inset-4 bg-[#D4AF37]/10 rounded-full blur-xl" />
                <p className="label-caps text-[#D4AF37] relative z-10 tracking-[0.2em]">{event.label}</p>
              </motion.div>
              
              <motion.h3 variants={itemVariants} className="font-display text-5xl md:text-6xl text-white mb-6 font-normal drop-shadow-md">
                {event.venue}
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-base md:text-lg font-body text-white/70 mb-12 italic max-w-sm leading-relaxed">
                "{event.description}"
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col w-full max-w-sm mb-12 gap-4">
                <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/30 group">
                  <div className="bg-[#D4AF37]/10 p-3.5 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors shadow-inner">
                    <CalendarHeart className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#D4AF37]/80 uppercase tracking-widest mb-1.5 font-semibold">Date & Time</p>
                    <p className="text-lg font-medium text-gradient-platinum">{event.date}</p>
                    <p className="text-sm text-white/70 mt-0.5">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/30 group">
                  <div className="bg-[#D4AF37]/10 p-3.5 rounded-xl group-hover:bg-[#D4AF37]/20 transition-colors shadow-inner">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#D4AF37]/80 uppercase tracking-widest mb-1.5 font-semibold">Location</p>
                    <p className="text-sm font-medium text-white/90">{event.address}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#e8c65f] text-[#131A15] px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Navigation className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-bold">Get Directions</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
