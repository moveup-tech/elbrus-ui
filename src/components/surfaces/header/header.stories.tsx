import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

export default {
  component: Header.Root,
  title: "Surfaces/Header",
  tags: ["autodocs"],
} as Meta<typeof Header.Root>;

export const Default: StoryObj<typeof Header> = {
  render: () => (
    <Header.Root>
      <Header.Content>
        <Header.User
          name="Daniel M. Vaz"
          role="Administrador"
          image="https://github.com/daniellvaz.png"
        />
        <Header.Divider />
        <Header.ThemeToggleButton />
        <Header.NotificationButton />
      </Header.Content>
    </Header.Root>
  ),
};
