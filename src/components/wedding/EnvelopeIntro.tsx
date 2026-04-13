import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

const EnvelopeIntro = ({ onComplete }: EnvelopeIntroProps) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(onComplete, 2800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden" 
         style={{
           background: "linear-gradient(135deg, #DFE9ED 0%, #F5E8E2 45%, #EFE1E3 100%)"
         }}>
      {/* Background radial soft light to mimic the image's studio lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)]" />

      {/* Decorative floral hints in the background (using subtle radial flares) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none" style={{
        background: "radial-gradient(circle at 15% 25%, rgba(160, 185, 198, 0.15) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(210, 160, 150, 0.15) 0%, transparent 40%)"
      }} />

      {/* Main Scene Container */}
      <motion.div
        className="relative"
        style={{ width: 440, height: 300 }}
        initial={false}
        animate={
          opened
            ? { scale: [1, 0.95, 1.8], y: [-10, 0, 180] }
            : { scale: 1, y: [0, -8, 0] }
        }
        transition={
          opened
            ? { duration: 2.2, times: [0, 0.15, 1], ease: [0.4, 0, 0.2, 1] }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Subtle shadow underneath envelope */}
        <motion.div 
          className="absolute -bottom-10 left-1/2 w-[70%] h-10 bg-black/15 blur-2xl rounded-[100%]"
          style={{ x: "-50%" }}
          animate={{ opacity: opened ? 0 : 1, scale: opened ? 1.2 : 1 }}
        />

        {/* Envelope Structure */}
        <div className="relative w-full h-full cursor-pointer" onClick={handleOpen}>
           {/* === 1. Envelope Back (Inside) === */}
           <div className="absolute inset-0 rounded-md bg-[#DFBFA6] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-0" />

           {/* === 2. Top flap === */}
           <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: "65%",
                background: "linear-gradient(180deg, #F9EDE1 0%, #E8D3C1 100%)",
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={{
                rotateX: opened ? 180 : 0,
                zIndex: opened ? 5 : 30, // Moves behind card during sequence
                boxShadow: opened ? "none" : "0 8px 15px rgba(0,0,0,0.05)"
              }}
              transition={{
                rotateX: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: opened ? 0.1 : 0 },
                zIndex: { delay: opened ? 0.4 : 0 },
                boxShadow: { delay: opened ? 0.1 : 0 }
              }}
            >
              {/* Subtle edge highlight */}
              <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)", borderBottom: "1px solid rgba(255,255,255,0.7)" }} />
              
              {/* Top Flap Subtle Pattern */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ 
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16 32 13.5V0h2v13.5L36.5 16 39 13.5V0h2v15H20v2h21v2H20v15h-2V22H0v-2h18zM0 0h2v11.5L4.5 9 7 6.5V0h2v6.5L11.5 4 14 1.5V0h2v4L18.5 1.5 20 0h-2l-1.5 1.5L14 4V0h-2v6.5L9.5 9 7 11.5V0H5v13.5L2.5 16 0 18.5V0z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />

              {/* Gold Ring on Tip */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  bottom: "-6px", 
                  left: "50%",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "4px solid #D4AF37",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.6)",
                  background: "transparent",
                  transform: "translateX(-50%)"
                }} 
              />
           </motion.div>

           {/* === 3. Card inside === */}
           <motion.div
             className="absolute rounded mb-4 bg-[#FDFAF7] shadow-inner flex flex-col items-center justify-center z-10 overflow-hidden"
             initial={false}
             animate={{
               top: opened ? "-75%" : "6%",
               left: opened ? "5%" : "8%",
               right: opened ? "5%" : "8%",
               height: opened ? "110%" : "88%",
               boxShadow: opened 
                 ? "0 25px 45px -10px rgba(0, 0, 0, 0.2)" 
                 : "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
             }}
             transition={{
               top: { type: "spring", stiffness: 60, damping: 14, delay: opened ? 0.4 : 0 },
               height: { duration: 0.8, delay: opened ? 0.4 : 0 },
               left: { duration: 0.8, delay: opened ? 0.4 : 0 },
               right: { duration: 0.8, delay: opened ? 0.4 : 0 }
             }}
           >
              {/* Card Texture */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }} />
              
              <div className="flex flex-col items-center justify-center w-full h-full py-4 gap-1">
                {/* Open Me — cursive tag at top */}
                <p className="font-display text-[#A0907A] text-2xl italic font-light tracking-wide rotate-[-2deg] drop-shadow-sm select-none mb-1">
                  Open Me
                </p>

                {/* Thin gold divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-2" />

                {/* Names */}
                <p className="font-display text-[#3C3530] text-2xl font-light tracking-tight leading-snug text-center px-4">
                  Ajith Khan
                </p>
                <p className="font-display text-[#C5A059] text-lg italic my-0.5">&amp;</p>
                <p className="font-display text-[#3C3530] text-2xl font-light tracking-tight leading-snug text-center px-4">
                  Afrin Fathima
                </p>

                {/* Thin gold divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-2" />

                {/* Nikkah label */}
                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] font-semibold text-[#A0907A]">
                  Nikkah Invitation
                </p>
              </div>
           </motion.div>

           {/* === 4. Envelope Main Body Form (Inside Shadow) === */}
           <div className="absolute inset-0 rounded-md shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none z-20" />

           {/* === 5. Left flap === */}
           <div
             className="absolute inset-0 rounded-md z-20"
             style={{
               background: "linear-gradient(to right, #F9EDE1, #EDDAC8)",
               clipPath: "polygon(0 0, 52% 50%, 0 100%)",
               filter: "drop-shadow(4px 0 6px rgba(0,0,0,0.05))"
             }}
           >
              <div className="absolute inset-0 opacity-[0.03]" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16 32 13.5V0h2v13.5L36.5 16 39 13.5V0h2v15H20v2h21v2H20v15h-2V22H0v-2h18z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />
           </div>

           {/* === 6. Right flap === */}
           <div
             className="absolute inset-0 rounded-md z-20"
             style={{
               background: "linear-gradient(to left, #F9EDE1, #EDDAC8)",
               clipPath: "polygon(100% 0, 48% 50%, 100% 100%)",
               filter: "drop-shadow(-4px 0 6px rgba(0,0,0,0.05))"
             }}
           >
              <div className="absolute inset-0 opacity-[0.03]" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16 32 13.5V0h2v13.5L36.5 16 39 13.5V0h2v15H20v2h21v2H20v15h-2V22H0v-2h18z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />
           </div>

           {/* === 7. Bottom flap === */}
           <div
             className="absolute bottom-0 left-0 right-0 rounded-b-md z-20"
             style={{
               height: "70%",
               background: "linear-gradient(to top, #F9EDE1, #EDDAC8)",
               clipPath: "polygon(0 100%, 50% 10%, 100% 100%)",
               filter: "drop-shadow(0 -4px 6px rgba(0,0,0,0.06))"
             }}
           >
              <div className="absolute inset-0 opacity-[0.03]" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16 32 13.5V0h2v13.5L36.5 16 39 13.5V0h2v15H20v2h21v2H20v15h-2V22H0v-2h18z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }} />
              {/* Edge highlight */}
              <div className="absolute inset-0" style={{ clipPath: "polygon(0 100%, 50% 10%, 100% 100%)", borderTop: "1px solid rgba(255,255,255,0.5)" }} />
           </div>

           {/* === 8. Elegant Blank Golden Wax Seal === */}
           <motion.div 
             className="absolute top-[65%] left-1/2 z-40 w-14 h-14 rounded-full cursor-pointer flex items-center justify-center pointer-events-auto"
             style={{ x: "-50%", y: "-50%" }}
             whileHover={!opened ? { scale: 1.05 } : {}}
             initial={false}
             animate={{
                opacity: opened ? 0 : 1,
                scale: opened ? 0.5 : 1,
                y: opened ? "100%" : "-50%",
             }}
             transition={{ duration: 0.3, ease: "easeIn" }}
             onClick={handleOpen}
           >
              {/* Gold seal shadow beneath */}
              <div className="absolute inset-0 rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.25)]" />
              
              {/* Seal body with metallic gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FCE198] via-[#C5A059] to-[#8A6A2C]" />
              
              {/* Inner seal rim to look like stamped wax */}
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-tl from-[#FCE198] via-[#C5A059] to-[#8A6A2C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
              <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[#E2B965] to-[#AD8331] shadow-[0_1px_2px_rgba(255,255,255,0.3)]" />
           </motion.div>
        </div>
      </motion.div>

      {/* Fade transition out to the main website */}
      <motion.div
        className="absolute inset-0 bg-[#0B120C] pointer-events-none z-[110]"
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 1.2, delay: opened ? 1.6 : 0 }}
      />
    </div>
  );
};

export default EnvelopeIntro;
