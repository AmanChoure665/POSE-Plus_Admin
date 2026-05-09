'use client';

import { useEffect, useState } from 'react';
import { apiGet } from '@/lib/api';

type Report = { id: string; reason: string; content_type: string; status: string };

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    apiGet('/reports').then(setReports).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className='text-xl mb-3'>Reports Moderation</h2>
      <div className='space-y-2'>
        {reports.map((report) => (
          <div key={report.id} className='bg-card p-3 rounded flex items-center justify-between'>
            <div>
              <p className='font-medium'>{report.reason}</p>
              <p className='text-sm text-gray-400'>{report.content_type}</p>
            </div>
            <span className='text-xs bg-purple-800/60 px-2 py-1 rounded'>{report.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
