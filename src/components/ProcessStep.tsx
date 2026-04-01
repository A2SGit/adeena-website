interface ProcessStepProps {
  icon: string;
  step: string;
  title: string;
  description: string;
  offset?: boolean;
}

export default function ProcessStep({
  icon,
  step,
  title,
  description,
  offset,
}: ProcessStepProps) {
  return (
    <div
      className={`group p-6 md:p-8 rounded-xl bg-surface-container-low border border-white/5 transition-all duration-500 hover:bg-surface-container ${
        offset ? "md:mt-12" : ""
      }`}
    >
      <div className="mb-6 md:mb-8 flex justify-between items-start">
        <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
          {icon}
        </span>
        <span className="text-stone-800 font-headline italic text-3xl md:text-4xl group-hover:text-primary/20 transition-colors">
          {step}
        </span>
      </div>
      <h3 className="font-headline italic text-xl md:text-2xl text-on-background mb-3 md:mb-4">
        {title}
      </h3>
      <p className="text-sm text-stone-400 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
