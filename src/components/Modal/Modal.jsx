import React from 'react';
import './Modal.css';
import RowPost from '../RowPost/RowPost';
import { API_KEY } from '../../constants/constants';

const Modal = ({ youtubeId, movieDetails, onClose }) => {

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal')) {
            onClose();
        }
    };

    const recommendationsUrl = `movie/${movieDetails.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`

    return (
        <div className="modal show" onClick={handleOutsideClick}>
            <div className="modal-content">
                <div className="current-movie">
                    <button className="close-btn" onClick={onClose}>×</button>
                    <iframe
                        title="YouTube video player"
                        src={`https://www.youtube.com/embed/${youtubeId.key}?autoplay=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="youtube-content">
                        <h2>{movieDetails.title}</h2>
                        <p><strong className='rating'>Rating:</strong> {movieDetails.vote_average} ({movieDetails.vote_count} votes)</p>
                        <p><strong className='overview'>Overview:</strong> {movieDetails.overview}</p>
                    </div>
                </div>
                <div className='recommendation-list'>
                    <RowPost url={recommendationsUrl} title="Recommended Movies" additionalClass="modal-row-post"  />
                </div>
            </div>
            
        </div>
    );
};

export default Modal;
