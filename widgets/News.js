import React, { useState, useEffect } from "react";
import { Box } from "../components";
import axios from "axios";

export default function({
  id
}) {
  const [ latestNews, setLatestNews ] = useState([]);

  const getNewsInfo = (newsIds) => {
    newsIds.map(id => {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((resp) => {
          if (resp.data) {
            setLatestNews(latestNews => [
                ...latestNews, resp.data
              ]);
          }
        });
    });
  }

  const getLatestNews = () => {
    axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?limit=50")
      .then(resp => {
        getNewsInfo(resp.data || []);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const getNewsList = () => {
    return latestNews.map(data => {
      return  (
        <li key={data.id}>
          <a href={data.url} target="_blank">{ data.title }</a>( { data.score } ) -- by { data.by }
        </li> 
      );
    })
  }

  useEffect(() => {
    if (latestNews.length == 0) {
      getLatestNews();
    }
    console.log("try");
  }, []);

  return (
    <Box key={ id || "News" }>
      <ul>{ getNewsList() }</ul>
    </Box>
  );
}