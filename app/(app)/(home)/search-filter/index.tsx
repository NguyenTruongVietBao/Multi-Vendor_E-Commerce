import Categories from '@/app/(app)/(home)/search-filter/categories';
import SearchInput from '@/app/(app)/(home)/search-filter/search-input';
import { CustomCategory } from '@/app/(app)/(home)/search-filter/type';

interface Props {
  data: CustomCategory[];
}

export default function SearchFilter({ data }: Props) {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput data={data} />

      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
}
