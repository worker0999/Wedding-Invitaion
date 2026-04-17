import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const RSVP_CONTACTS = [
  { name: "Contact 3 (+91 98940 78516)", phone: "+919894078516" },
  { name: "Contact 2 (+91 81248 15162)", phone: "+918124815162" },
  { name: "Contact 1 (+91 97418 93011)", phone: "+919741893011" },
];

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    message: "",
    contactIndex: "0",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attending) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const contact = RSVP_CONTACTS[parseInt(formData.contactIndex)];
    const text = `*Wedding RSVP*%0A%0A*Name:* ${formData.name}%0A*Attending:* ${formData.attending === 'yes' ? 'In Sha Allah, I will attend' : 'Regretfully unable to attend'}%0A*Guests:* ${formData.guests}%0A*Message:* ${formData.message || 'No additional message'}`;
    
    window.open(`https://wa.me/${contact.phone}?text=${text}`, "_blank");

    setSubmitted(true);
    toast.success("JazakAllahu Khairan! Your RSVP has been sent via WhatsApp.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 md:py-40 px-6 bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="max-w-lg mx-auto text-center"
        >
          <p className="label-caps mb-4">In Sha Allah</p>
          <h2 className="display-section text-foreground mb-6">
            We Await Your Presence
          </h2>
          <p className="body-text mb-4">
            JazakAllahu Khairan, {formData.name}. Your presence will be a blessing for us.
          </p>
          <p className="font-arabic text-accent text-lg mb-8 italic">
            May Allah bless this union — Barakallahu Lakuma
          </p>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps text-foreground border-b border-foreground/20 pb-0.5 hover:border-foreground/60 transition-colors duration-300"
          >
            Add to Calendar
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 md:py-40 px-6 bg-secondary">
      <div className="max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="label-caps text-center mb-4"
        >
          Kindly Respond
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="display-section text-foreground text-center mb-6"
        >
          RSVP
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="divider-ornament mb-12"
        >
          <span className="font-arabic text-muted-foreground text-lg">✦</span>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label className="label-caps block mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-underline w-full"
              placeholder="Your name"
              required
            />
          </div>



          <div>
            <label className="label-caps block mb-2">RSVP To *</label>
            <select
              name="contactIndex"
              value={formData.contactIndex}
              onChange={handleChange}
              className="input-underline w-full cursor-pointer"
              required
            >
              {RSVP_CONTACTS.map((contact, index) => (
                <option key={index} value={index}>{contact.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label-caps block mb-2">Will You Attend? *</label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="input-underline w-full cursor-pointer"
              required
            >
              <option value="">Please select</option>
              <option value="yes">In Sha Allah, I will attend</option>
              <option value="no">Regretfully unable to attend</option>
            </select>
          </div>

          {formData.attending === "yes" && (
            <div>
              <label className="label-caps block mb-2">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="input-underline w-full cursor-pointer"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          )}

          <div>
            <label className="label-caps block mb-2">Duas & Wishes</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="input-underline w-full resize-none"
              placeholder="Your prayers and wishes for the couple..."
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="btn-primary w-full rounded-lg flex items-center justify-center gap-2">
              <span className="text-lg">✉</span> Send RSVP via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RsvpSection;
