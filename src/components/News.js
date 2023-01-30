import React, {useState, useEffect} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [news, setnews] = useState([])
    const [loading, setloading] = useState(false)
    const [totalResults, settotalResults] = useState([])
    const [page, setpage] = useState(1)

    

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    document.title = `${Capitalize(props.category)} - News`;

    const undatenews = async () => {
        props.changrProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
        let data = await fetch(url);
        let orginaljson = await data.json();
        setnews(orginaljson.articles);
        settotalResults(orginaljson.totalResults);
        setloading(false);
        props.changrProgress(100);
    }

    useEffect(() => {
        return () => {
            undatenews()
        }
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let orginaljson = await data.json();
        setnews(news.concat(orginaljson.articles));
        settotalResults(orginaljson.totalResults);
    }



    return (
        <>
            <div className='container'>
                {loading && <Spinner />}
                <h2 className='' style={{ marginTop: '90px' }}>News Apps</h2>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchMoreData}
                    hasMore={news.length !== totalResults}
                    loader={<Spinner />}
                >

                    <div className='container'>
                        <div className='row'>
                            {news.map((element, index) => {
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
            </div>
        </>
    )
}


News.propTypes = {
    category: PropTypes.string
}

News.defaultProps = {
    category: 'general'
}

export default News;
