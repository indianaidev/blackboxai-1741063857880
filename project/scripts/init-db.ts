import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log('🚀 Initializing database...');

  if (!process.env.VITE_NEON_DATABASE_URL) {
    throw new Error('VITE_NEON_DATABASE_URL is not set');
  }

  const sql = neon(process.env.VITE_NEON_DATABASE_URL);

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(256) NOT NULL,
        content TEXT NOT NULL,
        author_id VARCHAR(256) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `;

    await sql`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = CURRENT_TIMESTAMP;
          RETURN NEW;
      END;
      $$ language 'plpgsql'
    `;

    await sql`
      DROP TRIGGER IF EXISTS update_blogs_updated_at ON blogs
    `;
    
    await sql`
      CREATE TRIGGER update_blogs_updated_at
          BEFORE UPDATE ON blogs
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column()
    `;

    console.log('✅ Database initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
