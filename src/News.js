import React, { useEffect, useState } from 'react'

import LoadingBar from 'react-top-loading-bar'


import Spiner from './Spiner';

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [isSpiner, setisSpiner] = useState(true);
    const [progress, setProgress] = useState(0);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    const [pageSize] = useState(6);

    let API = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=03a34849d8464e4eb0740726bcb48cba&page=${page}&pageSize=${pageSize}`

    let fetchData = async (url) => {
        try{
            setProgress(20);
            let res = await fetch(url);            
            let data = await res.json();
             setProgress(100);
             setarticles(data.articles);
            console.log(data);
            setisSpiner(false);
            settotalResults(data.totalResults);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() =>{
        fetchData(API);
        document.title = `${capitalize(props.category)} -News Hub`

    },[page])

 const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();    
      }

      const handelprevclick = async () =>{
        setpage((prev) => prev - 1);
        fetchData(API);
      }
      const handelnextclick = async () => {
        setpage((prev) => prev + 1);
        fetchData(API);
      }

  return ( 
    <>
           <LoadingBar
                color='#BF55EC'
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />   

<div className='container mt-5'>         
        <div className="row">
            <h1 className='text-center my-4'>Top News  {capitalize(props.category)} Headlines</h1>
        {isSpiner ? <Spiner/> : articles.map((element) => <div className='col-md-4 my-3' key={element.url}>    {/*element ki jagah ham kuch bhi likh sakte hai*/}
            <div className="card">
            <span className="badge badge-small rounded-pill text-bg-danger" id='badge'>{element.author}</span>
                <img src={element.urlToImage === null ? 'https://placebear.com/640/360' : element.urlToImage} className="card-img-top" alt="Image not Found"/>
                <div className="card-body">
                    <h5 className="card-title">{element.title.slice(0,30)}</h5>
                    <p className="card-text">{element.description === null ? 'Please create an issue for issues or bugs. Pull requests welcome.': element.description.slice(0,30)}</p>
                    <p className="card-text">{element.content === null ? 'Please create an issue for issues or bugs. Pull requests welcome.': element.content.slice(0,30)}</p>
                    <p className="card-text">By {element.publishedAt} on {new Date().toGMTString()}</p>
                    <a href={element.url} target='_' className="btn btn-primary">Read More</a>
                </div>
                </div>
        </div>)}        
    </div>   
    <div className="container d-flex justify-content-between">
        <button disabled={page<=1} onClick={handelprevclick} className='btn btn-dark btn-small' type='button'>&larr; Prev</button>
        <button disabled={page + 1 > Math.ceil(totalResults/pageSize)} onClick={handelnextclick}  className='btn btn-dark btn-small' type='button'>Next &rarr;</button>        
    </div>
    </div>
 
</>
   
  )
}
export default News
