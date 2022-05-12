import { Layout as BaseLayout } from 'react-admin';
import { Menu } from './Menu';

export const Layout = (props) => <BaseLayout {...props} menu={Menu} />;
