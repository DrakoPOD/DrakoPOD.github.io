import { createContentLoader } from 'vitepress';

export interface Project {
  url: string;
  title: string;
  summary: string;
  technologies: string[];
  projectUrl?: string;
}

declare const data: Project[];
export { data };

export default createContentLoader('projects/*.md', {
  transform(raw): Project[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      url,
      title: frontmatter.title,
      summary: frontmatter.summary,
      technologies: frontmatter.technologies,
      projectUrl: frontmatter.url,
    }));
  },
});
