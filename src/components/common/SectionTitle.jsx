const SectionTitle = ({
  subtitle,
  title,
  description,
  center = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-2 uppercase tracking-[0.25em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;