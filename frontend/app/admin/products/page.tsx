'use client';

import { FormEvent, useEffect, useState } from 'react';
import { apiGet } from '@/lib/api';

type Product = { id: string; name: string; description: string; price: number; status: string };

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const loadProducts = () => {
    apiGet('/products').then(setProducts).catch(console.error);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addDemoProduct = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, description: 'Added from admin panel', price: Number(price), status: 'active' })
    });
    setName('');
    setPrice('');
    loadProducts();
  };

  return (
    <div>
      <h2 className='text-xl mb-3'>Marketplace Management</h2>

      <form onSubmit={addDemoProduct} className='bg-card p-4 rounded mb-4 grid md:grid-cols-3 gap-3'>
        <input className='bg-bg p-2 rounded' placeholder='Product name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input className='bg-bg p-2 rounded' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} type='number' min='1' required />
        <button className='bg-accent rounded p-2 font-medium'>Add Product</button>
      </form>

      <div className='grid md:grid-cols-2 gap-3'>
        {products.map((product) => (
          <div key={product.id} className='bg-card p-3 rounded'>
            <h3 className='font-semibold'>{product.name}</h3>
            <p className='text-sm text-gray-300'>{product.description}</p>
            <p className='mt-2'>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
