import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
    static defaultProps = {
        category: 'general'
    }

    static propTypes = {
        category: PropTypes.string
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false,
            totalResults: [],
            page: 1
        }
        document.title = `${this.Capitalize(this.props.category)} - News`;
    }


    undatenews = async () => {
        this.props.changrProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let orginaljson = await data.json();
        this.setState({
            news: orginaljson.articles,
            totalResults: orginaljson.totalResults,
            loading: false
        });
        this.props.changrProgress(100);
    }
    async componentDidMount() {
        this.undatenews();
    }

    fetchMoreData = async() =>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.setState({page: this.state.page + 1})
        let data = await fetch(url);
        let orginaljson = await data.json();
        this.setState({
            news: this.state.news.concat(orginaljson.articles),
            totalResults: orginaljson.totalResults,
        });
    }



    render() {
        return (
            <>
                <div className='container'>
                    {this.state.loading && <Spinner />}
                    <h2 className='' style={{marginTop: '90px'}}>News Apps</h2>
                    <hr />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                    <InfiniteScroll
                        dataLength={this.state.news.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.news.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        
                <div className='container'>
                        <div className='row'>

                            {this.state.news.map((element, index) => {
                                return (
                                    <div className='col-md-3 mb-4' key={index}>
                                        <Newsitem
                                            imgsrc={element.urlToImage}
                                            title={element.title.slice(0, 30)}
                                            para={element.description ? element.description.slice(0, 50) : "aaa"}
                                            url={element.url}
                                            source={element.source.name}
                                            date={element.publishedAt}
                                        />
                                    </div>
                                )
                            })}

                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <button disabled={this.state.page <= 1} className='btn btn-primary' onClick={this.prev}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className='btn btn-primary' onClick={this.next}>Next</button> */}
                </div>
            </>
        )
    }
}
