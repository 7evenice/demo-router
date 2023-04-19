import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Jumbotron extends Component {
    chuyendoiUrl = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
  render() {
    return (
        <div classname="jumbotron">
        <Link to={'/product/' + this.chuyendoiUrl(this.props.heading) +'.'+ this.props.jumId}>
        <h3 classname="display-4">{this.props.heading}</h3></Link>
        <p classname="lead">{this.props.helper}</p>
        <hr classname="my-2" />
        <p>More info</p>
        <p classname="lead">
          <Link to={'/product/' + this.chuyendoiUrl(this.props.heading) +'.'+ this.props.jumId}  classname="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</Link>
        </p>
        </div>
      
    )
  }
}
