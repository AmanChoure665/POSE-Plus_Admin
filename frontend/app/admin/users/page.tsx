'use client';

import { useEffect, useMemo, useState } from 'react';
import { apiGet } from '@/lib/api';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  is_banned: boolean;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  useEffect(() => {
    apiGet('/users')
      .then(setUsers)
      .catch((error) => console.error('Failed to fetch users', error));
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchName = user.name.toLowerCase().includes(query.toLowerCase());
      const matchRole = roleFilter === 'all' || user.role === roleFilter;
      return matchName && matchRole;
    });
  }, [users, query, roleFilter]);

  return (
    <div>
      <h2 className='text-xl mb-3'>User Management</h2>

      <div className='flex flex-col md:flex-row gap-3 mb-4'>
        <input
          className='bg-card p-2 rounded'
          placeholder='Search by name'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className='bg-card p-2 rounded' value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value='all'>All roles</option>
          <option value='user'>User</option>
          <option value='trainer'>Trainer</option>
          <option value='admin'>Admin</option>
        </select>
      </div>

      <table className='w-full bg-card rounded overflow-hidden'>
        <thead>
          <tr className='text-left'>
            <th className='p-2'>Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Role</th>
            <th className='p-2'>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className='border-t border-purple-950'>
              <td className='p-2'>{user.name}</td>
              <td className='p-2'>{user.email}</td>
              <td className='p-2 capitalize'>{user.role}</td>
              <td className='p-2'>{user.is_banned ? 'Banned' : user.is_active ? 'Active' : 'Suspended'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
