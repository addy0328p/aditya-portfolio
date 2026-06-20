import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Briefcase, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const contactMethods = [
    {
      label: "Email",
      value: "aditya12bone@gmail.com",
      link: "mailto:aditya12bone@gmail.com",
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      accent: "hover:border-indigo-500/30",
    },
    {
      label: "Phone",
      value: "+91 9140541879",
      link: "tel:+919140541879",
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      accent: "hover:border-purple-500/30",
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      link: "https://wa.me/919140541879",
      icon: <FaWhatsapp className="w-5 h-5 text-emerald-400" />,
      accent: "hover:border-emerald-500/30",
    },
    {
      label: "LinkedIn",
      value: "aditya-p01",
      link: "https://www.linkedin.com/in/aditya-p01/",
      icon: <FaLinkedin className="w-5 h-5 text-blue-400" />,
      accent: "hover:border-blue-500/30",
    },
    {
      label: "Location",
      value: "Lucknow, UP, India",
      link: "https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India",
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      accent: "hover:border-rose-500/30",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || "service_placeholder",
        import.meta.env.VITE_TEMPLATE_ID || "template_placeholder",
        e.target,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY || "public_key_placeholder" }
      )
      .then(() => {
        showToast("success", "Message sent successfully! I'll get back to you soon. 🚀");
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("error", "Oops! Something went wrong. Please try again or email me directly.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1/2 h-1/2 bg-indigo-500/5 rounded-full blur-[150px] -z-10" />

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-number">04 / Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Get In Touch
            </h2>
            <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target={method.label !== "Phone" && method.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`glass-panel p-4 rounded-xl flex items-center gap-5 group transition-all duration-300 ${method.accent}`}
                >
                  <div className="w-11 h-11 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">{method.label}</p>
                    <p className="text-white font-semibold text-sm">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-7 md:p-8 rounded-2xl h-full flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white text-sm transition-all duration-300 focus:outline-none focus:border-indigo-500/40 focus:bg-indigo-500/[0.03]"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white text-sm transition-all duration-300 focus:outline-none focus:border-purple-500/40 focus:bg-purple-500/[0.03]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  <label htmlFor="company" className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white text-sm transition-all duration-300 focus:outline-none focus:border-indigo-500/40 focus:bg-indigo-500/[0.03]"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-1.5 flex flex-col flex-grow mb-5">
                  <label htmlFor="message" className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white text-sm transition-all duration-300 focus:outline-none focus:border-indigo-500/40 focus:bg-indigo-500/[0.03] resize-none flex-grow min-h-[120px]"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-auto"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #8b5cf6 100%)",
                    boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className={`w-4 h-4 transition-transform ${isSubmitting ? "" : "group-hover:translate-x-1 group-hover:-translate-y-0.5"}`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-[70] flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl"
            style={{
              background: toast.type === "success" ? "rgba(16, 185, 129, 0.15)" : "rgba(244, 63, 94, 0.15)",
              border: `1px solid ${toast.type === "success" ? "rgba(16, 185, 129, 0.3)" : "rgba(244, 63, 94, 0.3)"}`,
              backdropFilter: "blur(20px)",
            }}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
            )}
            <span className={`text-sm font-medium ${toast.type === "success" ? "text-emerald-200" : "text-rose-200"}`}>
              {toast.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
