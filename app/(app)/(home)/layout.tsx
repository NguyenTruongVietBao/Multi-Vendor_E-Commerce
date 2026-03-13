import SearchFilter from '@/app/(app)/(home)/search-filter';
import { CustomCategory } from '@/app/(app)/(home)/search-filter/type';
import { Category } from '@/payload-types';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React from 'react';
import Footer from './footer';
import { Navbar } from './navbar';

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories',
    depth: 1, // Populcate subcategories
    pagination: false,
    sort: 'title',
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));
  console.log('🚀 ~ HomeLayout ~ formattedData:', formattedData);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilter data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
}
