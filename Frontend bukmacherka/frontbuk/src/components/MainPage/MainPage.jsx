import NavbarMain from "../Navbar/Navbar";
import "./MainPage.css";
import Navbar from '../../components/Navbar/Navbar';

export default function MainPage() {
  return (
    <div>
        <Navbar />
        <div className="container-main">

          <div className="sports-column">
              <h2>Sports</h2>
              <div className="choose-btn">Martial arts</div>
          </div>
          
          <div className="main-column">
              <h2>Main</h2>
              {/* W main wczytać to co wybierzemy w kolumnie sports */}
          </div>

          <div className="coupon-column">
              <h2>Coupon</h2>
              {/* W coupon wczytać wydarzenia które wybraliśmy */}
          </div>

        </div>
    </div>
  );
}
