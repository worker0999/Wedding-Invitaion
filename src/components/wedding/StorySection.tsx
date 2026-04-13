import { motion } from "framer-motion";
import storyImg from "@/assets/story-1.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-4"
        >
          <p className="label-caps">The Couple</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="display-section text-foreground text-center mb-6"
        >
          Two Souls, One Path
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="divider-ornament mb-16 md:mb-24"
        >
          <span className="font-arabic text-muted-foreground text-lg">✦</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={storyImg}
              alt="Quran on carved wooden stand with rose petals and candlelight"
              className="w-full h-auto object-cover aspect-[3/4]"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col justify-center max-w-[45ch] mx-auto md:mx-0"
          >

            <p className="body-text mb-6">
              <span className="font-display text-foreground text-lg font-light">J. Mohammed Ajith khan B.E.</span>
              <br />
              <span className="text-sm">S/o. M. Syed Abbas, Batlagundu</span>
            </p>

            <p className="body-text mb-6">
              <span className="font-display text-foreground text-lg font-light">Mubbaliga, Aalima, A. Afrin Fathima B.Com</span>
              <br />
              <span className="text-sm">D/o. M. Abdul Rahman, Uthamapalayam</span>
            </p>

            <p className="body-text">
              We cordially solicit your esteemed presence with family and friends 
              on the auspicious occasion of the Nikkah — seeking Allah's blessings 
              as two lives unite in the sacred bond of marriage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
