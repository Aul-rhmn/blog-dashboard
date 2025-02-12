export interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
    status: 'published' | 'draft' | 'trashed';
  }