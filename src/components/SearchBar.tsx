import { useSearchBar } from '../context/SearchBarContext';

import { ReactComponent as IconSearch } from '../../public/assets/icon-search.svg';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearchBar();

  const searchInputChangeHandler = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className='w-120 h-8 ml-8 flex gap-6 md:mt-16 md:w-322 md:ml-4'>
        <IconSearch className='scale-80 sm:scale-100' />

        <input
          type='text'
          value={searchQuery}
          onChange={searchInputChangeHandler}
          className='w-full text-white text-base xs:text-xl sm:text-2xl font-light bg-dark-blue caret-red focus:outline-none focus:border-b focus:border-greyish-blue placeholder:opacity-50'
          placeholder='Search for movies or TV series'
        />
      </div>
    </>
  );
};

export default SearchBar;
