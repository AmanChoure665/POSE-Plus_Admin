import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
export default function AdminLayout({children}:{children:React.ReactNode}) {
  return <div className='flex'><Sidebar/><main className='flex-1'><Navbar/><div className='p-6'>{children}</div></main></div>;
}
