import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      namajenjang: 'Pilih Jenjang', 
      namatingkatan: 'Pilih Tingkatan',
      tingkatan: 
      <ul class="dropdown-menu">
        <li>
          <a href="#" onClick={()=>{this.kliknamatingkatan('Pilih jenjangnya dulu!');}}>
            Pilih jenjangnya dulu!
          </a>
        </li>
      </ul>,
    }
  }

  kliknamatingkatan(nama){
    this.setState({
      namatingkatan: nama,
    })

  }

  klikprasekolah(){
    this.setState({
      namajenjang: 'Pendidikan Pra Sekolah', 

      tingkatan: 
      <ul class="dropdown-menu">
      <li class="dropdown-header">Pendidikan Pra Sekolah</li>
      <li><a href="#" onClick={()=>{this.kliknamatingkatan('PAUD (Pendidikan Anak Usia Dini)');}}>PAUD (Pendidikan Anak Usia Dini)</a></li>
      <li><a href="#" onClick={()=>{this.kliknamatingkatan('TK (Taman Kanak-kanak)');}}>TK (Taman Kanak-kanak)</a></li>
      <li><a href="#" onClick={()=>{this.kliknamatingkatan('RA (Raudhatul Athfal)');}}>RA (Raudhatul Athfal)</a></li>
    </ul>,
    })
  }

  klikdasar(){
    this.setState({
      namajenjang: 'Pendidikan Dasar', 
      
      tingkatan: 
      <ul class="dropdown-menu">
        <li class="dropdown-header">Pendidikan Dasar</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SD (Sekolah Dasar)');}}>SD (Sekolah Dasar)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MI (Madrasah Ibtidaiyah)');}}>MI (Madrasah Ibtidaiyah)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMP (Sekolah Menengah Pertama)');}}>SMP (Sekolah Menengah Pertama)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MTs (Madrasah Tsanawiyah)');}}>MTs (Madrasah Tsanawiyah)</a></li>                      
      </ul>,
    })
  }

  klikmenengah(){
    this.setState({
      namajenjang: 'Pendidikan Menengah', 
      
      tingkatan: 
      <ul class="dropdown-menu">
        <li class="dropdown-header">Pendidikan Menengah</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMA (Sekolah Menengah Atas)');}}>SMA (Sekolah Menengah Atas)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('MA (Madrasah Aliyah)');}}>MA (Madrasah Aliyah)</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMK (Sekolah Menengah Kejuruan)');}}>SMK (Sekolah Menengah Kejuruan)</a></li>
      </ul>,
    })
  }

  kliktinggi(){
    this.setState({
      namajenjang: 'Pendidikan Tinggi', 
      
      tingkatan: 
      <ul class="dropdown-menu">
        <li class="dropdown-header">Pendidikan Tinggi</li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('D3 Diploma');}}>D3 Diploma</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S1/D4 Sarjana');}}>S1/D4 Sarjana</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S2 Magister');}}>S2 Magister</a></li>
        <li><a href="#" onClick={()=>{this.kliknamatingkatan('S3 Doktoral');}}>S3 Doktoral</a></li>
      </ul>,
    })
  }

  render() {
    let judul = {
        margin: '50px',
      };

    let row = {
        width: '1000px',
      }
      
    let lebarmenu = {
        width: '300px',
      }

    return (
      <div>
          {/* Judul */}
          <center>          
            <div id="judul" style={judul}>
              <h1>Jenjang Pendidikan</h1>        
            </div>
          
          <div className="row" style={row}>
            <div className="col">
              {/* Dropdown Jenjang */}
                <div class="container" style={{padding: '50px'}}>
                  <div class="dropdown ">
                  <button class="btn btn-success dropdown-toggle" style={lebarmenu} data-toggle="dropdown">{this.state.namajenjang}</button>
                    
                    {/* <button class="btn btn-success dropdown-toggle lebarmenu" data-toggle="dropdown">
                      Pilih Jenjang
                    </button> */}
                    <ul class="dropdown-menu">
                      <li><a href="#" onClick={()=>{this.klikprasekolah();}}>Pendidikan Pra Sekolah</a></li>
                      <li><a href="#" onClick={()=>{this.klikdasar();}}>Pendidikan Dasar</a></li>
                      <li><a href="#" onClick={()=>{this.klikmenengah();}}>Pendidikan Menengah</a></li>
                      <li><a href="#" onClick={()=>{this.kliktinggi();}}>Pendidikan Tinggi</a></li>
                    </ul>
                  </div>
                </div>
            </div>

            <div className="col">
              {/* Dropdown Tingkatan */}          
                <div class="container" style={{padding: '50px'}}>
                  <div class="dropdown">
                  
                    <button class="btn btn-danger dropdown-toggle" style={lebarmenu} data-toggle="dropdown">
                      {this.state.namatingkatan}                      
                    </button>

                    {this.state.tingkatan}
                                        
                    {/* Content Library */}
                    {/* <ul class="dropdown-menu">
                      <li class="dropdown-header">Pendidikan Pra Sekolah</li>
                      <li><a href="#">PAUD (Pendidikan Anak Usia Dini)</a></li>
                      <li><a href="#">TK (Taman Kanak-kanak)</a></li>
                      <li><a href="#">RA (Raudhatul Athfal)</a></li>
                    </ul>
                    <ul class="dropdown-menu">
                      <li class="dropdown-header">Pendidikan Dasar</li>
                      <li><a href="#">SD (Sekolah Dasar)</a></li>
                      <li><a href="#">MI (Madrasah Ibtidaiyah)</a></li>
                      <li><a href="#">SMP (Sekolah Menengah Pertama)</a></li>
                      <li><a href="#">MTs (Madrasah Tsanawiyah)</a></li>                      
                    </ul>
                    <ul class="dropdown-menu">
                      <li class="dropdown-header">Pendidikan Menengah</li>
                      <li><a href="#">SMA (Sekolah Menengah Atas)</a></li>
                      <li><a href="#">MA (Madrasah Aliyah)</a></li>
                      <li><a href="#">SMK (Sekolah Menengah Kejuruan)</a></li>
                    </ul>
                    <ul class="dropdown-menu">
                      <li class="dropdown-header">Pendidikan Tinggi</li>
                      <li><a href="#">D3 Diploma</a></li>
                      <li><a href="#">S1/D4 Sarjana</a></li>
                      <li><a href="#">S2 Magister</a></li>
                      <li><a href="#">S3 Doktoral</a></li>
                    </ul> */}

                  </div>
                </div>
            </div>
          </div>
        </center>

      </div>
    );
  }
}

export default App;