import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "flex h-20 w-full items-center justify-center border-b border-b-foreground/15 bg-foreground/5 dark:border-b-background/25 dark:bg-foreground",
});

export type SidebarHeaderProps = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, className, ...rest }: SidebarHeaderProps) {
  return (
    <div {...rest} className={variant({ className })}>
      <img
        alt="logo"
        className="w-40"
        src="https://moveuptecnologia.com.br/assets/logo-DxqGdxLn.svg"
      />
    </div>
  );
}
