import { createContentLoader } from 'vitepress';

export interface Experience {
  title: string;
  description: string;
  technologies: string[];
  index?: number;
  url?: string;
  repo?: boolean;
}

declare const data: Experience[];
export { data };

export default createContentLoader('experience/*.md', {
  transform(raw): Experience[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      url,
      title: frontmatter.title,
      description: frontmatter.description,
      technologies: frontmatter.technologies,
      repo: false,
    }));
  },
});
