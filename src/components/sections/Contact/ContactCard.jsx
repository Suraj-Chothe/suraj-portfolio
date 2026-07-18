import { motion } from "framer-motion";

const ContactCard = ({ icon, title, value, href }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
    >
      <div className="text-cyan-400">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="text-white font-semibold">
          {title}
        </h4>

        <p className="text-gray-400 text-sm">
          {value}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          copyToClipboard();
        }}
        className="text-xs text-cyan-400 hover:text-cyan-300"
      >
        Copy
      </button>
    </motion.a>
  );
};

export default ContactCard;