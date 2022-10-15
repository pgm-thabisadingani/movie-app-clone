import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import tmdbApi from "../api/tmdbApi";

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((video, i) => (
        <Video key={i} video={video} />
      ))}
    </>
  );
};

const Video = (props) => {
  const video = props.video;
  const iframeRef = useRef(null);
  console.log(video);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="vedeo__title">
        <h2>{video.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
