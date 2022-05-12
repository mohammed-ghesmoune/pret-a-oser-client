import * as React from 'react';
import { DashboardMenuItem, Menu as BaseMenu, MenuItemLink } from 'react-admin';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ClassIcon from '@mui/icons-material/Class';
import ArticleIcon from '@mui/icons-material/Article';
export const Menu = (props) => {
  return (
    <BaseMenu {...props}>
      <DashboardMenuItem />
      <MenuItemLink to="/" primaryText="Page d'accueil" leftIcon={<HomeIcon />} />
      <MenuItemLink to="pages" primaryText="pages" leftIcon={<ArticleIcon />} />
      <MenuItemLink to="categories" primaryText="Categories" leftIcon={<ClassIcon />} />
      <MenuItemLink to="prestations" primaryText="Prestations" leftIcon={<DesignServicesIcon />} />
      <MenuItemLink to="images" primaryText="Images" leftIcon={<ImageIcon />} />
      <MenuItemLink to="logos" primaryText="Logos Partenaire" leftIcon={<AddPhotoAlternateIcon />} />
      <MenuItemLink to="testimonials" primaryText="Temoignages" leftIcon={<ChatBubbleIcon />} />
      <MenuItemLink to="users" primaryText="Users" leftIcon={<PeopleIcon />} />

    </BaseMenu>
  )
};

