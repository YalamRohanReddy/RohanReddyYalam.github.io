interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-10 max-w-3xl">
    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{subtitle}</p>
    <h2 className="mt-3 text-3xl font-semibold text-slate-100 md:text-4xl">{title}</h2>
  </div>
);
