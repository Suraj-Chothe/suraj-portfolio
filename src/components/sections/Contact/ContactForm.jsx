import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="space-y-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500"
      />

      <textarea
        rows={6}
        placeholder="Your Message"
        className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-500"
      />

      <button
        className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-black font-semibold hover:bg-cyan-400 transition"
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;