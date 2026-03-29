interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="inline-block text-xs font-semibold uppercase tracking-[1.5px] text-primary mb-3">
    {children}
  </span>
);

export default SectionLabel;
