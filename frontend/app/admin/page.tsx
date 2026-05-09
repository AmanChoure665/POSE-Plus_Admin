'use client';
import { useEffect, useState } from 'react';
import { apiGet } from '@/lib/api';
import SimpleChart from '@/components/charts/SimpleChart';
export default function DashboardPage(){
  const [stats,setStats]=useState<any>(null);
  useEffect(()=>{apiGet('/dashboard/stats').then(setStats).catch(()=>{});},[]);
  return <div className='space-y-4'>
    <h2 className='text-2xl font-semibold'>Overview</h2>
    <div className='grid md:grid-cols-3 gap-4'>{['total_users','active_users','banned_users','trainers'].map((k)=><div key={k} className='bg-card rounded-xl p-4'><p className='text-sm text-gray-300'>{k}</p><p className='text-2xl'>{stats?.[k] ?? '-'}</p></div>)}</div>
    <SimpleChart/>
  </div>
}
