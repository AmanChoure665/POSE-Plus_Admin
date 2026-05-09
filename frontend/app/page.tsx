import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-bg text-white flex items-center justify-center p-6'>
      <div className='bg-card p-8 rounded-xl max-w-xl w-full text-center'>
        <h1 className='text-3xl font-bold mb-3 text-accent'>P.O.S.E. Plus Admin Dashboard</h1>
        <p className='text-gray-300 mb-6'>Student major project preview landing page.</p>
        <Link href='/admin' className='inline-block bg-accent px-4 py-2 rounded font-medium'>
          Open Admin Preview
        </Link>
      </div>
    </main>
  );
}
