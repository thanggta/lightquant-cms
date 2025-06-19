import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const pagesDirectory = path.join(process.cwd(), 'content/pages');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  thumbnail?: string;
  tags?: string[];
  draft?: boolean;
}

export interface Page {
  slug: string;
  title: string;
  content: string;
  draft?: boolean;
}

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        content: matterResult.content,
        thumbnail: matterResult.data.thumbnail,
        tags: matterResult.data.tags || [],
        draft: matterResult.data.draft || false,
      } as BlogPost;
    })
    .filter((post) => !post.draft) // Filter out draft posts
    .sort((a, b) => {
      // Sort posts by date in descending order
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      content: matterResult.content,
      thumbnail: matterResult.data.thumbnail,
      tags: matterResult.data.tags || [],
      draft: matterResult.data.draft || false,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getAllPages(): Page[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(pagesDirectory)) {
    fs.mkdirSync(pagesDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(pagesDirectory);
  const allPagesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the page metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || '',
        content: matterResult.content,
        draft: matterResult.data.draft || false,
      } as Page;
    })
    .filter((page) => !page.draft); // Filter out draft pages

  return allPagesData;
}

export function getPageBySlug(slug: string): Page | null {
  try {
    const fullPath = path.join(pagesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || '',
      content: matterResult.content,
      draft: matterResult.data.draft || false,
    } as Page;
  } catch (error) {
    return null;
  }
}
