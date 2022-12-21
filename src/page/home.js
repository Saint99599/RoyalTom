import Poster from '../component/Poster/Poster';
import TopSeller from '../component/TopSeller/TopSeller';
import Products from '../component/Products/Products';
import Footer from '../component/footer/footer';

function Home() {
  return ( <div>
    <Poster/>
    <TopSeller/>
    <Products/>
  </div>
  );
}

export default Home;