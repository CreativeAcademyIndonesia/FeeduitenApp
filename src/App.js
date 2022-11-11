import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      uangPemasukan : 0, 
      uangPengeluaran : 0, 
      uangSisa : 0, 
      persentaseSisa : 0, 
      transaksiIn : 0, 
      transaksiOut : 0, 
      summaryTransaksi : [
        {
          tanggal : '21 january', 
          deskripsi : 'makan padang', 
          jumlah : 20000, 
          kategori : 'IN'
        }
      ]
    }
  }
  render() {
    return (
      <div className="container py-5">
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='fw-bold'>FEEDUITEUN APPS</h1>
            <hr className='w-75 mx-auto'/>
            <h2>Rp. {this.state.uangSisa},-</h2>
            <h6>Sisa uang kamu tersisa {this.state.persentaseSisa}% lagi</h6>
          </div>

          <div className='col-6'>
            <div className='card-info d-flex w-100 p-4 flex-column bg-white'>
              <div className='d-flex flex-column'>
                <div className='icon-wrapper'>
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className='subtitle'>Pemasukan</span>
              </div>
              <h3 className='fw-bold'>Rp. {this.state.uangPemasukan},-</h3>
              <div>
                <span className='text-violet subtitle'>{this.state.transaksiIn} </span><span className='subtitle'>Transaksi</span>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='card-info d-flex w-100 p-4 flex-column bg-white'>
              <div className='d-flex flex-column'>
                <div className='icon-wrapper'>
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className='subtitle'>Pengeluaran</span>
              </div>
              <h3 className='fw-bold'>Rp. {this.state.uangPengeluaran},-</h3>
              <div>
                <span className='text-violet subtitle'>{this.state.transaksiOut} </span><span className='subtitle'>Transaksi</span>
              </div>
            </div>
          </div>


        </div>

        <div className='row'>
          <div className='col-12 d-flex align-items-center justify-content-between'>
            <h4>Ringkasan Transaksi</h4>
            <div className='button-wrapper'>
              <ButtonModal type="btn-ungu me-2" icon="bi bi-plus-circle-fill" text="Pemasukan"/>
              <ButtonModal type="btn-merah" icon="bi bi-dash-circle-fill" text="Pengeluaran"/>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          {this.state.summaryTransaksi.map((transaksi, index)=> {
            return (
              <div key={index} className='col-12 d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='icon-wrapper'><i className="bi bi-wallet2"></i></div>
                  <div className='transaction d-flex flex-column'>
                    <h6>{transaksi.deskripsi}</h6>
                    <span className='subtitle'>{transaksi.tanggal}</span>
                  </div>
                </div>
                <h6 className={transaksi.kategori === 'IN' ? 'text-primary' : 'text-danger' }>Rp. {transaksi.jumlah}</h6>
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}


function ButtonModal(props) {
  const [show, setShow] = useState(false);
  const [deskripsi, setDeskripsi] = useState('');
  const [nominal, setNominal] = useState(0);
  const [tanggal, setTanggal] = useState(new Date())

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerChange = (e)=> {
    console.log('ok')
  }

  return (
    <>
      <button className={props.type} onClick={handleShow}>
        {props.text}<i className={props.icon}></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan {props.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
            <input value={deskripsi} onChange={handlerChange} type="text" className="form-control" id="deskripsi" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="nominal" className="form-label">Nominal</label>
            <input value={nominal} onChange={handlerChange} type="number" className="form-control" id="nominal" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="tanggal" className="form-label">Tanggal</label>
            <input value={tanggal} onChange={handlerChange} type="date" className="form-control" id="tanggal" placeholder="name@example.com" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn-ungu' onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default App;
