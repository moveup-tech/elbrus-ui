import { Icon, SidebarIconProps } from "./icon";
import { Item } from "./item";
import { Root, SidebarRootProps } from "./root";
import { Title, SidebarTitleProps } from "./title";
import { Footer, SidebarFooterProps } from "./footer";
import { Header, SidebarHeaderProps } from "./header";
import { Content, SidebarContentProps } from "./content";
import { Container, SidebarContainerProps } from "./container";
import { UserContainer, SidebarUserContainerProps } from "./user-container";
import { FooterContent, SidebarFooterContentProps } from "./footer-content";
import { HeaderContent } from "./header-content";

export const Sidebar = {
  Root,
  Content,
  Container,
  Header,
  Footer,
  HeaderContent,
  FooterContent,
  Item,
  Title,
  Icon,
  UserContainer,
};

export type {
  SidebarRootProps,
  SidebarContentProps,
  SidebarContainerProps,
  SidebarHeaderProps,
  SidebarFooterProps,
  SidebarTitleProps,
  SidebarIconProps,
  SidebarUserContainerProps,
  SidebarFooterContentProps,
};
