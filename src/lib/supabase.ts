import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaapzjjglwryfeeafcy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFwempqZ2x3cnlmZWVhZmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NDEzNTAsImV4cCI6MjEwNjQxNzM1MH0.m7GX2pe8LwIEuFA5xQmp8nq2w-8dScNuIDo0BN5JR9M';

export const supabase = createClient(supabaseUrl, supabaseKey);
