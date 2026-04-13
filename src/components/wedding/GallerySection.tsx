import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Grand Islamic wedding venue with crystal chandeliers and floral arrangements", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Gold wedding rings on emerald velvet cushion with jasmine flowers", span: "" },
  { src: gallery3, alt: "Luxurious wedding table with Moroccan lanterns and gold cutlery", span: "" },
  { src: gallery4, alt: "Islamic garden pathway at sunset with roses and fairy lights", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="label-caps text-center mb-4"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="display-section text-foreground text-center mb-6"
        >
          Blessed Moments
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.2, 0, 0, 1],
              }}
              className={`overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
