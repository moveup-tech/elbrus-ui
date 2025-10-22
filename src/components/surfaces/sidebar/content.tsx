import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "h-[calc(100vh-14.5rem)] bg-foreground/5 p-4 dark:bg-background/15",
});

export type SidebarContentProps = {} & HTMLAttributes<HTMLElement>;

export function Content({ children, className, ...rest }: SidebarContentProps) {
  return (
    <div className={variant({ className })} {...rest}>
      {children}
    </div>
  );
}
