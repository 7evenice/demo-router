import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom';


export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      isRedirect:false,
      ten: "",
      email: "",
      ghichu: "",
      ngay: "thứ 2",
    }
  }


  
  submitForm = (event) => {
    event.preventDefault(); // ngăn chặn mặc định 
    this.setState({isRedirect: true});
  }

  noiDung = (event) => {
    // console.log(event.target.value); // lấy giá trị của thẻ input
    const tenControl = event.target.name ;
    const giatri = event.target.value;
    console.log(tenControl);
    console.log(giatri);
    this.setState({[tenControl]: giatri}); 
  }

  getGiatri = () => {
    var thongtin = "";
    thongtin += "Tên là :" + this.state.ten;
    thongtin += "/Email là :" + this.state.email;
    thongtin += "/Ghi chú là :" + this.state.ghichu;
    thongtin += "/Ngày là :" + this.state.ngay;
    thongtin += "/Tên Files là :" + this.state.tenFile;
    return thongtin;
  }

  // hàm lấy file  
  infoFile = (event) => {
    // const hinh = event.target.files;
    const hinh = event.target.files[0].name;
    // console.log(hinh);
    this.setState({tenFile: hinh})
  }

  render() {
    if(this.state.isRedirect) {
      console.log(this.getGiatri());
      return <Navigate to="/" />
    }
    return (
        <div className="container">
        <form action="mail.php" method="post">
          <div className="card border-primary rounded-0">
            <div className="card-header p-0">
              <div className="bg-info text-white text-center py-2">
                <h3><i className="fa fa-envelope" /> Contactanos</h3>
                <p className="m-0">Con gusto te ayudaremos</p>
              </div>
            </div>
            <div className="card-body p-3">
              {/*Body*/}
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                  </div>
                  <input onChange={(event) => this.noiDung(event)} type="text" className="form-control" id="nombre" name="ten" placeholder="Nombre y Apellido" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                  </div>
                  <input onChange={(event) => this.noiDung(event)} type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                  </div>
                  <textarea onChange={(event) => this.noiDung(event)} className="form-control" placeholder="Envianos tu Mensaje" name='ghichu' required defaultValue={""} />
                </div>
              </div>

              <div className="form-group">                   
                     <label for="">chọn ngày</label>
                     <select value={this.state.ngay} onChange={(event) => this.noiDung(event)} className="form-control" name="ngay" id="">
                       <option value="thu2">Thứ hai</option>
                       <option value="thu3">Thứ ba</option>
                       <option value="thu5">Thứ năm</option>
                       <option value="cn">Chủ nhật</option>                      
                     </select>                   
              </div>

              {/* control file  */}
              <div className="form-group">                   
                    <input onChange={(event) => this.infoFile(event)} type="file" className="form-control-file" name="hinhanh" />                   
              </div>


              <div className="text-center">
                <input onClick={(event) => this.submitForm(event)} type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2" />
              </div>
            </div>
          </div>
        </form>
      </div>
      
    )
  }
}
