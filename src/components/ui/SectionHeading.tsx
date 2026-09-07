type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <span className="srcc-eyebrow">{eyebrow}</span>

      <h2 className="srcc-heading-lg mt-5 text-zinc-950">
        {title}
      </h2>

      {description && (
        <p className="srcc-body-lg mt-6">
          {description}
        </p>
      )}
    </div>
  );
}