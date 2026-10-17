import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'yod616zq', // <--- حطنا الـ ID الجديد هنا
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: false,
});