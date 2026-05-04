import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  children?: ReactNode;
};

export default function SectionHeading({ kicker, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
