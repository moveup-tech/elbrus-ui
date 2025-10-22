import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variant = tv({
  base: "flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-white p-4",
});

export type SidebarFooterContentProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function FooterContent({
  children,
  className,
  ...rest
}: SidebarFooterContentProps) {
  return (
    <div className="h-38 w-full bg-foreground/5 p-2 dark:bg-background/15">
      {children}
    </div>
  );
}
