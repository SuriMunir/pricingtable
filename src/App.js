import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard';
import { priceData } from './Data';

function App() {
  return (
    <div className='App'>
      <section className='pricing py-5'>
        <div className='container'>
          <div className='row'>
            {priceData.map((data) => {
              return (
                <div className='col-lg-4' key={data.id}>
                  <PriceCard {...data} />;
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
