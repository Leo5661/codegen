import { HomeLayoutProps } from 'fumadocs-ui/home-layout';
import DocNavLogo from '@/src/components/doc-nav-logo';
 
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/Leo5661/codegen",
  nav: {
    transparentMode: "top",
    title: <DocNavLogo />,
  },
};