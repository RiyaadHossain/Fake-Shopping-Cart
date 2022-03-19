
import "bootstrap/dist/css/bootstrap.min.css";
import './Menubar.css'

const Menubar = ({cart}) => {
  return (
    <div className="row">
      <div className="col-md-4 logo">Logo</div>
      <div className="col-md-8 ">
        <ul>
          <li className="menu">Home</li>
          <li className="menu">About Us</li>
          <li className="menu">Cart <sup className="bg-secondary fw-bold text-white p-1 rounded rounded-pill">{cart}</sup></li>
          <li className="menu">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
