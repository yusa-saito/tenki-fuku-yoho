const fs = require('fs');

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY must be set.');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');
html = html
  .replace('__SUPABASE_URL__', supabaseUrl)
  .replace('__SUPABASE_ANON_KEY__', supabaseAnonKey);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Build complete: dist/index.html');
