import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import Modal from '../Modal/Modal';

function RowPost(props) {
    const [movie, setMovie] = useState([]);
    const [youtubeId, setYoutubeId] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                if (props.additionalClass === 'recommended'){
                    setMovie(response.data.results)
                } else {
                    const shuffledMovies = response.data.results
                        .map(movie => ({ movie, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ movie }) => movie);
                    setMovie(shuffledMovies);
                }
            })
            .catch(error => {
                alert('Network Error');
            });
    }, [props.url, props.additionalClass]);

    const handleMovieTrailer = (id) => {
        if (selectedMovie && selectedMovie.id === id) return;
        
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                const video = response.data.results.find(video => video.type === 'Trailer');
                if (video) {
                    setYoutubeId(video);
                    setSelectedMovie(movie.find(m => m.id === id));
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
        <div className={`row ${props.additionalClass || ''}`}>
            {(props.additionalClass !== 'recommended' || movie.length > 0) && movie.length > 0 && (
                <h2>{props.title}</h2>
            )}
            <div className={`posters ${props.additionalClass === 'modal-row-post' ? 'modal-row-post' : ''}`}>
                {movie.length > 0 ? movie.map((obj) => (
                    obj.backdrop_path ? (
                        <div key={obj.id} className={`poster-container ${props.additionalClass === 'modal-row-post' ? 'poster-container-modal' : ''}`}>
                            <img 
                                className={`posterimg ${props.additionalClass === 'recommended' ? 'recommended' : props.isSmall ? 'smallposterimg' : ''}`}
                                onClick={() => handleMovieTrailer(obj.id)}
                                src={`${imageUrl}${props.isSmall ? obj.backdrop_path : obj.poster_path}`}
                                alt={obj.name}
                            />
                        </div>
                    ) : null
                )) : ""}
            </div>
            {showModal && youtubeId && selectedMovie && (
                <Modal youtubeId={youtubeId} movieDetails={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default RowPost;
