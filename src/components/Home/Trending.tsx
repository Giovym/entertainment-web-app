import { useApi } from '../../context/ApiContext';
import { useSearchBar } from '../../context/SearchBarContext';

import IconBookmarkEmpty from '../../../public/assets/icon-bookmark-empty.svg';
import IconBookmarkFull from '../../../public/assets/icon-bookmark-full.svg';
import IconMovies from '../../../public/assets/icon-category-movie.svg';
import IconTvSeries from '../../../public/assets/icon-category-tv.svg';
import IconPoint from '../../../public/assets/icon-point.svg';
import IconPlay from '../../../public/assets/icon-play.svg';

const Trending = () => {
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(list)) {
    return <p>List is not an array</p>;
  }

  const bookmarkHandler = (e: any) => {
    e.stopPropagation();
    const index = e.target.id;

    const updatedList = list.map((item, i) =>
      i === Number(index) ? { ...item, isBookmarked: !item.isBookmarked } : item
    );

    updateList(updatedList);
  };

  const trendingList = list.filter((item) => item.isTrending);

  if (searchQuery !== '') {
    return null;
  } else {
    return (
      <div className='w-screen h-44 mt-8 ml-6 mb-10 md:ml-4 sm:h-72'>
        <h2 className='text-white text-xl xs:text-2xl sm:text-3xl font-light'>
          Trending
        </h2>
        <div className='scrollbar relative flex gap-x-10 overflow-x-auto '>
          {trendingList.map((item, i) => (
            <div
              className='relative flex items-center justify-center w-60 h-35  mt-6 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer sm:w-120 sm:h-56'
              key={i}
            >
              <div className='absolute w-28 h-12 flex items-center justify-center gap-5  transition-opacity duration-300 ease-in-out bg-black rounded-3xl'>
                <img
                  className='w-7 h-7 object-cover'
                  src={IconPlay}
                  alt='An icon with play symbol'
                />
                <p className='text-white text-lg font-medium'>Play</p>
              </div>

              <div
                className='absolute inset-0 bg-cover bg-center hover:opacity-50 transition-opacity duration-300 ease-in-out'
                style={{
                  backgroundImage: `url(${
                    window.innerWidth < 768
                      ? `${item.thumbnail.trending.small}`
                      : `${item.thumbnail.trending.large}`
                  })`,
                }}
              ></div>

              <div className='absolute bottom-0 flex flex-col w-full h-18 p-4 sm:h-24 sm:p-6'>
                <div className='flex gap-2 w-full'>
                  <span className='opacity-75 text-white text-xs font-light sm:text-base'>
                    {item.year}
                  </span>

                  <div className='flex gap-2 items-center'>
                    <img src={IconPoint} alt='A point' />

                    <img
                      src={
                        item.category === 'Movie' ? IconMovies : IconTvSeries
                      }
                      alt='An icon that show the category'
                    />

                    <span className='opacity-75 text-white text-xs font-light sm:text-base'>
                      {item.category}
                    </span>

                    <img src={IconPoint} alt='A point' />
                  </div>

                  <span className='opacity-75 text-white text-xs font-light sm:text-base'>
                    {item.rating}
                  </span>
                </div>

                <h3 className='text-white text-base font-medium sm:text-2xl'>
                  {item.title}
                </h3>
              </div>

              <div
                onClick={bookmarkHandler}
                id={i.toString()}
                className='absolute top-4 right-6 flex items-center justify-center w-8 h-8 opacity-50 bg-zinc-900 rounded-full cursor-pointer'
              >
                <img
                  id={i.toString()}
                  src={item.isBookmarked ? IconBookmarkFull : IconBookmarkEmpty}
                  alt='An icon to bookmark a movie'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Trending;
