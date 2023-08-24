import SearchBar from '../components/SearchBar';
import Trending from '../components/Home/Trending';
import Recommended from '../components/Home/Recommended';

const Home = () => {
  return (
    <main className='flex'>
      <div className='flex flex-col overflow-hidden'>
        <SearchBar />
        <Trending />
        <Recommended />
      </div>
    </main>
  );
};

export default Home;
