import SearchBar from '../components/SearchBar';

import { useSearchBar } from '../context/SearchBarContext';
import { useApi } from '../context/ApiContext';

import IconBookmarkEmpty from '../../public/assets/icon-bookmark-empty.svg';
import IconBookmarkFull from '../../public/assets/icon-bookmark-full.svg';
import IconMovies from '../../public/assets/icon-category-movie.svg';
import IconTvSeries from '../../public/assets/icon-category-tv.svg';
import IconPoint from '../../public/assets/icon-point.svg';
import IconPlay from '../../public/assets/icon-play.svg';

const TvSeries = () => {
  const { searchQuery } = useSearchBar();

  interface ApiContextType {
    list: any[];
    loading: boolean;
    error: Error | null;
    updateList: (newList: any[]) => void;
  }

  const { list, loading, error, updateList } =
    useApi() ?? ({} as ApiContextType);

  if (loading) {
    return <p className='text-white'>Loading...</p>;
  }

  if (error) {
    return <p className='text-white'>Error: {error.message}</p>;
  }

  if (!Array.isArray(list)) {
    return <p className='text-white'>List is not an array</p>;
  }

  const bookmarkHandler = (e: any) => {
    e.stopPropagation();
    const index = e.target.id;

    const updatedList = list.map((item, i) =>
      i === Number(index) ? { ...item, isBookmarked: !item.isBookmarked } : item
    );

    updateList(updatedList);
  };

  const tvSeriesList = list.filter((item) => item.category === 'TV Series');

  const filteredList = tvSeriesList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <SearchBar />
      <div className='w-screen flex flex-col mt-6 px-6 md:w-322 md:ml-4'>
        <h2 className='mb-8 text-white font-light text-xl xs:text-2xl sm:text-3xl'>
          {searchQuery === ''
            ? 'TV Series'
            : `Found ${filteredList.length} ${
                filteredList.length === 1 ? 'result' : 'results'
              } for "${searchQuery}"`}
        </h2>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 md:gap-8'>
          {filteredList.map((item, i) => (
            <div
              className='relative w-40 h-40 xs:w-52 xs:h-48 md:w-72 md:h-56'
              key={i}
            >
              <div className='relative flex items-center justify-center w-full h-28  rounded-lg overflow-hidden cursor-pointer xs:h-35 md:h-44'>
                <div className='absolute w-28 h-12 flex items-center justify-center gap-5 opacity-100 transition-opacity duration-300 ease-in-out bg-black rounded-3xl'>
                  <img
                    className='w-7 h-7 object-cover opacity-100'
                    src={IconPlay}
                    alt='An icon with play symbol'
                  />
                  <p className='text-white text-lg font-medium opacity-100'>
                    Play
                  </p>
                </div>

                <div
                  className='absolute inset-0 bg-cover bg-center hover:opacity-50 transition-opacity duration-300 ease-in-out'
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth < 640
                        ? `${item.thumbnail.regular.small}`
                        : window.innerWidth < 768
                        ? `${item.thumbnail.regular.medium}`
                        : `${item.thumbnail.regular.large}`
                    })`,
                  }}
                ></div>

                <div
                  onClick={bookmarkHandler}
                  id={list.indexOf(item).toString()}
                  className='absolute top-2 right-2 flex items-center justify-center w-8 h-8 opacity-50 bg-zinc-900 rounded-full cursor-pointer xs:top-4 xs:right-4'
                >
                  <img
                    id={list.indexOf(item).toString()}
                    src={
                      item.isBookmarked ? IconBookmarkFull : IconBookmarkEmpty
                    }
                    alt='An icon to bookmark a movie'
                  />
                </div>
              </div>

              <div className='absolute bottom-0 flex flex-col w-full h-11'>
                <div className='flex gap-2 w-full'>
                  <span className='opacity-75 text-white text-xs font-light'>
                    {item.year}
                  </span>
                  <div className='flex gap-2 items-center'>
                    <img src={IconPoint} alt='A point' />
                    <span className='opacity-75 text-white text-xs font-light'>
                      {item.category}
                    </span>
                    <img
                      src={
                        item.category === 'Movie' ? IconMovies : IconTvSeries
                      }
                      alt='An icon that show the category'
                    />
                    <img src={IconPoint} alt='A point' />
                  </div>
                  <span className='opacity-75 text-white text-xs font-light'>
                    {item.rating}
                  </span>
                </div>
                <h3 className='text-white text-sm font-medium xs:text-lg'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TvSeries;
