import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import bgdf from "../../assets/no-cover.png";

const CastList = (props) => {
  const [casts, setCasts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((cast, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${
                cast.profile_path
                  ? apiConfig.w500Image(cast.profile_path)
                  : bgdf
              })`,
            }}
          ></div>
          <p className="casts__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
