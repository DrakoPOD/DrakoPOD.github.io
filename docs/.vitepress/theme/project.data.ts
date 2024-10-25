import { createContentLoader } from 'vitepress';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  index?: number;
  url?: string;
  repo?: boolean;
}

declare const data: Project[];
export { data };

export default createContentLoader('projects/*.md', {
  transform(raw): Project[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      url,
      title: frontmatter.title,
      description: frontmatter.summary,
      technologies: frontmatter.technologies,
      projectUrl: frontmatter.url,
      repo: true,
    }));
  },
});
