import { HtmlHTMLAttributes } from "react";

export type RootProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

export function Root({ children, ...props }: RootProps) {
  return (
    <header
      className="flex h-20 w-full items-center justify-end border-b border-b-foreground/15 bg-foreground/5 p-4 dark:border-b-background/25 dark:bg-foreground"
      {...props}
    >
      {children}
    </header>
  );
}
