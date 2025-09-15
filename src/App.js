import logo from './logo.svg';
import './App.css';
import Category from './Category';

function App() {
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] m-auto'>
          <h1 className='text-center text-[40px] font-bold'>
            Our Products
          </h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div className='bg-[grey]'>

              <Category />
            </div>
          </div>


        </div>

      </div>
    </>

  );
}

export default App;
