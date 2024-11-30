import { sql } from '@vercel/postgres';

export async function createEmailTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS email_submissions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Email submissions table created successfully');
  } catch (error) {
    console.error('Error creating email submissions table:', error);
    throw error;
  }
}
