import Navbar from '../components/Navbar';

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className='text-white'>An error occurred!</h1>
        <p className='text-white'>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
