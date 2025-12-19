/**
 * WordPress Headless CMS Integration
 * 
 * This file contains utilities for fetching data from WordPress REST API
 * Configure your WordPress API URL in .env.local:
 * WORDPRESS_API_URL=https://your-wordpress-site.com
 */

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080';

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

/**
 * Fetch posts from WordPress
 */
export async function getPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: number[];
}): Promise<WordPressPost[]> {
  const queryParams = new URLSearchParams();
  
  if (params?.per_page) {
    queryParams.append('per_page', params.per_page.toString());
  }
  if (params?.page) {
    queryParams.append('page', params.page.toString());
  }
  if (params?.categories) {
    params.categories.forEach(cat => {
      queryParams.append('categories', cat.toString());
    });
  }
  
  queryParams.append('_embed', 'true');

  const response = await fetch(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${queryParams.toString()}`,
    {
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string): Promise<WordPressPost | null> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return null;
  }

  const posts = await response.json();
  return posts[0] || null;
}

/**
 * Fetch pages from WordPress
 */
export async function getPages(): Promise<WordPressPage[]> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/pages`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch pages');
  }

  return response.json();
}

/**
 * Fetch a single page by slug
 */
export async function getPage(slug: string): Promise<WordPressPage | null> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?slug=${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return null;
  }

  const pages = await response.json();
  return pages[0] || null;
}

/**
 * Fetch custom post types (requires custom post type plugin)
 * Example: Case Studies, Services, etc.
 */
export async function getCustomPosts(
  postType: string,
  params?: {
    per_page?: number;
    page?: number;
  }
): Promise<any[]> {
  const queryParams = new URLSearchParams();
  
  if (params?.per_page) {
    queryParams.append('per_page', params.per_page.toString());
  }
  if (params?.page) {
    queryParams.append('page', params.page.toString());
  }
  
  queryParams.append('_embed', 'true');

  const response = await fetch(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/${postType}?${queryParams.toString()}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${postType}`);
  }

  return response.json();
}

