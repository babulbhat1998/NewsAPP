import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let {imgsrc,title,para,url,source,date} = this.props;
    return (
        
            <div className='card'>
                <div className='card-body p-0'>
                    <div className='image'>
                        <img src={imgsrc} className='img-fluid' />
                        <span className='badge badge-primary'>{source}</span>
                    </div>
                    <div className='caption'>
                        <h6>{title}</h6>
                        <p>{para}</p>
                        <span className='d-block ms-2'>{new Date(date).toGMTString()}</span>
                        <a href={url} className='btn btn-dark btn-sm ms-2' target="_blank">Read More</a>
                    </div>
                </div>
            </div>
    )
  }
}
