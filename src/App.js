import React from 'react';
import './assets/vendor/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import VanillaTilt from 'vanilla-tilt';
import './assets/css/style.css';

// Img
import Computer from './assets/img/computer.png';
import navLogo from './assets/img/logo cropped.png';
import savingMoney from './assets/img/saving-money.png';
import msi from './assets/img/msi-gb-701.png';
import hybrid from './assets/img/mechanical-hybrid-gaming.png';
import redragon from './assets/img/redragon-k552-bb.png';
import mountain from './assets/img/mountain-cropped.png';
import box from './assets/img/box.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron title="CryZent Store"/> 
      <Benefits />
      <BestProds />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4" id="main-nav">
      <div className="container">
        <a className="navbar-brand" href="#home"><img src={navLogo} alt="navLogo" width="80"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#home">Beranda</a>
            <a className="nav-link" href="#benefits">Keuntungan</a>
            <a className="nav-link" href="#pilihan">Katalog</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron(props)
{
	const { title } = props;
	return (
		<div className="jumbotron" id="home"> 
			<div className="p-5 mb-4 bg-light">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">{title}</h1>
					<p className="col-md-8 fs-4">Cara baru untuk melengkapi semua kebutuhan komputer anda!</p>
          <img src={Computer} alt="Jumbotron Img"></img>
          <a className="btn btn-primary rounded-pill p-3 mt-3" href="/#">Mulai</a>
				</div>
			</div>
		</div>
	);
}

function Benefits()
{
  return (
    <div className="benefits" id="benefits">
      <div className="container">
        <h1>Mengapa harus kami?</h1>
        <div className="row">
          <div className="col-md-3 col-lg-4">
            <div className="benefits-box">
              <img className="benefits-img float-end" src={savingMoney} alt="Saving Money" width="60"></img>
              <h3 className="benefits-title pt-5">Harga Terjangkau</h3>
              <p className="benefits-paragraph">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-md-3 col-lg-4">
            <div className="benefits-box">
              <img className="benefits-img float-end" src={mountain} alt="Saving Money" width="60"></img>
              <h3 className="benefits-title pt-5">Menggunakan bahan ramah lingkungan</h3>
              <p className="benefits-paragraph">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-md-3 col-lg-4">
            <div className="benefits-box">
              <img className="benefits-img float-end" src={box} alt="Saving Money" width="60"></img>
              <h3 className="benefits-title pt-5">Barang Lengkap</h3>
              <p className="benefits-paragraph">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BestProds()
{
  return (
    <div className="bestprods" id="pilihan">
      <div className="container">
        <h5>Best seller</h5>
        <h1>Barang Pilihan</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="prods-box">
              <h3 className="prods-box-title">Msi GB 701</h3>
              <img src={msi} alt="MSI" width="300"></img>
              <a className="btn btn-light w-100" href="/#">See Details</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="prods-box">
              <h3 className="prods-box-title">Hybrid Gaming</h3>
              <img src={hybrid} alt="hybrid" width="300" className="py-5"></img>
              <a className="btn btn-light w-100" href="/#">See Details</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="prods-box">
              <h3 className="prods-box-title">Redragon K-55d BB</h3>
              <img src={redragon} alt="Red Dragon" width="300" className="pt-4"></img>
              <a className="btn btn-light w-100" href="/#">See Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

VanillaTilt.init(document.querySelectorAll('.prods-box'), {
  max: 25,
  speed: 400,
});




export default App;
