'use client';
import Link from 'next/link';
const links = ['','users','reports','products','analytics','settings'];
export default function Sidebar() {
  return <aside className='w-60 min-h-screen bg-card p-4'>
    <h1 className='text-xl font-bold text-accent mb-5'>P.O.S.E Plus</h1>
    {links.map((x) => <Link key={x} href={`/admin${x?`/${x}`:''}`} className='block p-2 rounded hover:bg-purple-700/40'>{x || 'dashboard'}</Link>)}
  </aside>;
}
