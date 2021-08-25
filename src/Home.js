import React,{useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import axios from "axios";
import Search from'./Search.js';
import './design.css';

const Home = () => {
    const [articles , setNews] = useState([]);
    async function fetchNewsData(searchQ) {
        if(searchQ === "") {
            return alert("Search Required");
        }
        let newsD = await axios.get(`https://gnews.io/api/v4/search?q=${searchQ}&token=6f06c052311365506e3cb350ac31a0c8&lang=en`);
        setNews(newsD.data.articles);
    }


    useEffect(() => {

        const fetchNews=async ()=> {
            console.log('API Called.');
            fetch('https://gnews.io/api/v4/top-headlines?token=6f06c052311365506e3cb350ac31a0c8&lang=en')
            .then((data) => {
            return data.json();
            }).then((json) => {
                console.log(json.articles);
                setNews(apidata => json.articles);
            });
        }
        fetchNews();
    },[])
    return (
        <>
            <div class="searchBar">
                <Search fetchNewsData={fetchNewsData} />
            </div>
            
            {articles && articles.map((item) =>(
                <a href = {item.url}>
                 <Card className="designCard">
                 <Card.Header className="CardHeader">{item.title}</Card.Header>
                 <Card.Body>
                     <img
                         alt={item.urlToImage}
                             src={item.urlToImage?item.urlToImage:item.image}    
                         className="newsImage"
                     /> 
                     <blockquote className="blockquote mb-0">
                     <p>{item.description}</p>
                     <div>
                         <p>{item.content}</p>
                     </div>
                     <footer className="blockquote-footer">
                         <span>{"Published On"} {item.publishedAt}</span>
                     </footer>
                     </blockquote>
                 </Card.Body>
             </Card></a>
            ))}
    </>
    );
};

export default Home;