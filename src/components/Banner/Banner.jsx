import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import Modal from '../Modal/Modal';

function Banner() {
  const [movie, setMovie] = useState(null);
  const [youtubeId, setYoutubeId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const shufflemovie = response.data.results
          .map(movie => ({ movie, sort: Math.random() }))
          .sort((a, b) => a.sort -b.sort)
          .map(({ movie }) => movie);
        setMovie(shufflemovie[0])
      })
      .catch(error => {
        console.error('Network Error:', error);
      });
  }, []);

  const handleMovieTrailer = (id) => {
    
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        const video = response.data.results.find(video => video.type === 'Trailer');
        if (video) {
          setYoutubeId(video);
          setShowModal(true);
        } else {
          console.log("Trailer not Available");
        }
      })
      .catch(error => {
        console.error('Error fetching trailer:', error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setYoutubeId(null);
  };

  return (
    <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
        <div className='banner_buttons'>
          <button className='playbutton'><i className="fa-solid fa-play playicon"></i>Play</button>
          <button onClick={() => handleMovieTrailer(movie.id)} className='infobutton'><i className="bi bi-info-circle infoicon"></i>More Info</button>
        </div>
      </div>
      <div className="fade_bottom"></div>
      {showModal && youtubeId && (
        <Modal youtubeId={youtubeId} movieDetails={movie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Banner;
