import React, { useEffect, useState } from 'react'
import axios from "axios";
import Blueprint from './Blueprint';

const International = () => {

  const instance = axios.create(
    {
      baseURL: 'https://newsapi.org/v2/'
    }
  );
  //'https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=08ccb7146e5d4a2aaa9042c910d3630e'
  const [news, setNews] = useState([]);
  const [page,setPage] =useState(1) ;
  let ptr=0 ;
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await instance.get(`top-headlines?country=in&category=Entertainment&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}`);
        ptr=response.data.totalResults ;
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }

    };
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await instance.get(`top-headlines?country=in&category=Entertainment&apiKey=08ccb7146e5d4a2aaa9042c910d3630e&page=${page}`);
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }

  };

  const Next=()=>{
     setPage(page+1) ;
     fetchData() ;
  }
  const Previous=()=>{
    if(page>1)
    {
      setPage(page-1) ;
      fetchData() ;
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        {news.map((articles) => (
          <div className='col-md-4' key={articles.url}>
              <Blueprint title={articles.title} url={articles.url}  description={articles.description} urltoimage={articles.urlToImage}/>
            </div>
          ))}
          <div className='container my-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
           <button className='btn btn-primary'  onClick={Previous} disabled={page==1}>Previous</button>
           <button className='btn btn-primary' onClick={Next}>Next</button>
          </div>
          </div>
      
    </div>
      )
}

      export default International
