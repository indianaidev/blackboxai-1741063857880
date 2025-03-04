import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { eq } from 'drizzle-orm';
import * as schema from './schema';

// Make sure to add NEON_DATABASE_URL in your environment variables
const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle(sql, { schema });

// Helper functions for blog operations
export async function getBlogs() {
  return await db.select().from(schema.blogs).orderBy(schema.blogs.createdAt);
}

export async function getBlogById(id: number) {
  const results = await db
    .select()
    .from(schema.blogs)
    .where(eq(schema.blogs.id, id))
    .limit(1);
  
  return results[0];
}

export async function createBlog({ title, content, authorId }: { 
  title: string; 
  content: string; 
  authorId: string; 
}) {
  const result = await db.insert(schema.blogs).values({
    title,
    content,
    authorId,
  }).returning();
  
  return result[0];
}

export async function updateBlog(id: number, { title, content }: { 
  title: string; 
  content: string; 
}) {
  const result = await db
    .update(schema.blogs)
    .set({
      title,
      content,
      updatedAt: new Date(),
    })
    .where(eq(schema.blogs.id, id))
    .returning();
  
  return result[0];
}

export async function deleteBlog(id: number) {
  return await db
    .delete(schema.blogs)
    .where(eq(schema.blogs.id, id))
    .returning();
}
