import React, { Component } from 'react'

export class NewsItem extends Component {
    
  
    render() {
        
        return (
            <>
                <div className="card">
                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"50%",zIndex:"1"}}>{this.props.source}</span>
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className='card-text'><b>Author - </b>{this.props.author}</p>
                        <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
