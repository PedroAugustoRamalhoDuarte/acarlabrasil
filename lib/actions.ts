'use server';

import { sql } from '@vercel/postgres';

export interface EmailSubmission {
  email: string;
}

export async function submitEmail(email: string) {
  try {
    // Check if email already exists
    const existing = await sql`
      SELECT id FROM email_submissions WHERE email = ${email}
    `;

    if (existing.rows.length > 0) {
      return { success: false, error: 'Email already exists' };
    }

    const result = await sql`
      INSERT INTO email_submissions (email)
      VALUES (${email})
      RETURNING id;
    `;
    
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error submitting email:', error);
    return { success: false, error: 'Failed to submit email' };
  }
}
