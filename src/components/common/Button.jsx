const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-700 hover:border-blue-500 text-white",

    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;