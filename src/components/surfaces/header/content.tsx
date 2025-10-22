import { HtmlHTMLAttributes } from "react";

export type ContentProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

export function Content({ children }: ContentProps) {
  return <div className="flex h-full items-center gap-4">{children}</div>;
}
