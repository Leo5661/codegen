import { source } from '@/src/app/source';
import { createSearchAPI } from 'fumadocs-core/search/server';
 
export const { GET } = createSearchAPI('advanced', {
  indexes: source.getPages().map((page: any) => ({
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  })),
});