import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults:0

        }
    }

    update = async () => {
        this.props.setprogress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=89bec7ea481b40b59992a10a113f81f8&page=${this.state.page}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
        this.props.setprogress(30);

        let parsedData = await data.json();
        this.props.setprogress(100);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }
    fetchMoreData=async()=>{
        this.setState({
           page: this.state.page+1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=89bec7ea481b40b59992a10a113f81f8&page=${this.state.page}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })

    }

    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.update();

    // }
    // handleNextClick = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) { }
    //     else {
    //         this.setState({ page: this.state.page + 1 })
    //         this.update();
    //     }
    // }
    async componentDidMount() {
        this.update();
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h2 className='text-primary my-3'>Wellcome to Top News Headlines</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<h4 className='text-center'>Loading...</h4>}>
                        <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url}
                                            author={element.author} source={element.source.name} />
                                    </div>
                                )
                            })}

                        </div>
                        </div>

                    </InfiniteScroll>
                </div>
                {/* <div className="container my-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>

                </div> */}
            </>
        )
    }

}


export default News;
