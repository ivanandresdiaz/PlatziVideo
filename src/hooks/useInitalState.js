// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const useInitalState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};
export default useInitalState;
