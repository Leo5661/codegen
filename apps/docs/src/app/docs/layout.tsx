import { source } from '../source';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '@/src/configs/layout.config';
import { sidebarOptions } from '@/src/configs/sidebar-config';
 
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions} {...sidebarOptions}>
      {children}
    </DocsLayout>
  );
}