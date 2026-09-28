import AdminDashboard from '@/components/AdminDashboard';
import { createClient } from '@supabase/supabase-js';

// Note: In a real app, protect this route with authentication!
// Next.js App Router server component

export const revalidate = 0; // Disable static rendering for this page

export default async function AdminPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: initialInquiries, error } = await supabaseAdmin
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    console.error('Error fetching inquiries:', error);
  }

  return (
    <div className="min-h-screen bg-brand-50">
      <nav className="bg-white border-b border-brand-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-brand-900">
                무빈소 장례 <span className="text-gold-500">관리자 센터</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-brand-600">실시간 연동중</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-8">
        <AdminDashboard initialInquiries={initialInquiries || []} />
      </main>
    </div>
  );
}
