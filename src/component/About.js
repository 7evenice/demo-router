import React, { Component } from 'react'
import Sanpham from './Sanpham'
import dl from '../component/data.json'

export default class About extends Component {
  render() {
    console.log(dl);
    
    return (
        <div className="container">
        <div className="card-deck">
          {/* <Sanpham title="Sản Phẩm 1" />
          <Sanpham title="Sản Phẩm 2" />
          <Sanpham title="Sản Phẩm 3" />
          <Sanpham title="Sản Phẩm 4" /> */}
          {
            dl.map((value,key) => {
              return(
                <Sanpham 
                tinId= {value.id}
                title={value.tieuDe} 
                hinh={value.hinh}
                moTa= {value.moTa}
                />
              )
            })
          }
        </div>
        <hr />
      </div>
      
    )
  }
}
