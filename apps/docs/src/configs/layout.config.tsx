import { HomeLayoutProps } from 'fumadocs-ui/home-layout';
import DocNavLogo from '@/src/components/doc-nav-logo';
 
export const baseOptions: HomeLayoutProps = {
  nav: {
    transparentMode: "top",
    title: <DocNavLogo />,
    children: "Children",
  },
};