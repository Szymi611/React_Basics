import NavbarMain from "../Navbar/Navbar";
import "./MainPage.css";
import Navbar from '../../components/Navbar/Navbar';

export default function MainPage() {
  return (
    <div>
        <Navbar />
        <div className="container">
        <div className="sports-column">
            <h2>Sporty</h2>
        </div>
        <div className="main-column">
            <h2>Main</h2>
        </div>
        <div className="coupon-column">
            <h2>Coupon</h2>
        </div>
        </div>
    </div>
  );
}
