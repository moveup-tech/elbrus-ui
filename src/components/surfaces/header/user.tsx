import { Avatar } from "@/components/ui/avatar";

export type UserProps = {
  name?: string;
  role?: string;
  image?: string;
};

export function User({ name, role, image }: UserProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-foreground dark:text-background">
          {name}
        </p>
        <small className="text-foreground/75 dark:text-background/70">
          {role}
        </small>
      </div>

      <Avatar image={image || ""} username={name || ""} />
    </>
  );
}
