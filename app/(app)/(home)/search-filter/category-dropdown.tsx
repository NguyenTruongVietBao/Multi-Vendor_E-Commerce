'use client';

import SubcategoryMenu from '@/app/(app)/(home)/search-filter/subcategory-menu';
import { CustomCategory } from '@/app/(app)/(home)/search-filter/type';
import useDropdownPosition from '@/app/(app)/(home)/search-filter/use-dropdown-position';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface Props {
  category: CustomCategory;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export default function CategoryDropdown({ category, isActive, isNavigationHovered }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  const dropdownPosition = getDropdownPosition();

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  // const toggleDropdown = () => {
  //   if (category.subcategories) {
  //     setIsOpen(!isOpen);
  //   }
  // };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // onClick={toggleDropdown}
    >
      <div className="relative">
        <Button
          variant="elevated"
          className={cn(
            'h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black',
            isActive && !isNavigationHovered && 'bg-white border-primary',
            isOpen &&
              'bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] -translate-y-[4px]'
          )}
        >
          <Link href={`/${category.slug === 'all' ? '' : category.slug}`}>{category.title}</Link>
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              'absolute -bottom-3 w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          ></div>
        )}
      </div>
      <SubcategoryMenu category={category} isOpen={isOpen} position={dropdownPosition} />
    </div>
  );
}
