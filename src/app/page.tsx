
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Offer from "./Components/Offer";
import Productlist from "./Components/Productlist";
import Progressor from "./Components/Progressor";
import Testimonals from "./Components/Testimonals";
import Burger from "./Components/Burger";
import Reservation from "./Components/Reservation";
import MenuItems from "./Components/MenuItems";

export default function App() {
  return (
   <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">


<Navbar/>
<Progressor/>
<Burger/>
<Banner/>
<Productlist/>
<MenuItems/>
<Offer/>
<Card/>
<Reservation/>
<Testimonals/>
<Footer/>

   </div>
  
 
 
  );
}
