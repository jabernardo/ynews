import React, { Fragment, useState, useEffect } from "react";
import { Box } from "../components";
import axios from "axios";

const store = require("store");
const expirePlugin = require('store/plugins/expire')

store.addPlugin(expirePlugin)

export default function({
  id
}) {
  const [ latestNews, setLatestNews ] = useState(store.get("ynews") || []);

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

  useEffect(() => {
    store.set('ynews', latestNews, new Date().getTime() + 3000);
  }, [ latestNews ]);

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
        <Fragment key={data.id}>
          <li>
            <a href={data.url} target="_blank">{ data.title }</a>( { data.score } ) -- by { data.by }
          </li>
          <style jsx>{`
            li {
              padding: 1rem;
              border-radius: 8px;
              border-bottom: 2px dashed #eee;
            }

            li:hover {
              background: #eee;
              border: 1px solid #1eaedb;
            }

            a {
              display: block;
            }

            li:hover a,
            a:hover {
              text-decoration: none;
            }
          `}
          </style>
        </Fragment>
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
    <Fragment>
      <Box key={ id || "News" }>
        <ul key="ycombinews">{ getNewsList() }</ul>
      </Box>
      <style jsx>{`
        ul {
          list-style: none;
          font-size: 2rem;
        }
      `}
      </style>
    </Fragment>
  );
}