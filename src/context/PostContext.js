import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';
export const PostContext = createContext();

export const PostProvider = ({children}) => {
  const [data, setdata] = useState();
  const [isloading, setisloading] = useState(true);
  const getListHotPosts = () => {
    const apiURL = `${BASE_URL}/Hots`;
    axios
      .get(apiURL)
      .then(json => setdata(json.data))
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setisloading(false));
  };
  const getListRecomPosts = () => {
    const apiURL = `${BASE_URL}/posts`;
    axios
      .get(apiURL)
      .then(json => setdata(json.data))
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setisloading(false));
  };

  return (
    <PostContext.Provider
      value={{
        isloading,
        setisloading,
        data,
        setdata,
        getListHotPosts,
        getListRecomPosts,
      }}>
      {children}
    </PostContext.Provider>
  );
};
