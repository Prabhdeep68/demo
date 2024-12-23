import React, { useState } from 'react';
import './ImageLink.css'
import ReactModal from 'react-modal';
import man from "../../assets/man.png";
import video from "../../assets/video.png";


// Make sure to bind modal to app element
ReactModal.setAppElement('#root');

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (<>
    <div style={{ position: 'relative', width: '100%', height: '447px',textAlign:'center', paddingTop:'80px'}}>
      {/* Image with Play button */}
      <img
        src={video}
        alt="Video Thumbnail"
        style={{
          width: '100%',
          height: 'auto',
          cursor: 'pointer',
        }}
        onClick={openModal} // Open modal on image click
      />

      {/* Play button */}
      <button
        onClick={openModal}
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#EC4814',
          
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Play
      </button>

      {/* Modal for video */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            padding: '0',
            border: 'none',
            background: 'black',
          },
        }}
      >
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '20px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </div>

        {/* Embed YouTube Video */}
        <iframe
          width="100%"
          height="100%"
          
          src='https://www.youtube.com/embed/fzWzPXEhPvA'
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </ReactModal></div>
    
    <div className="Person">
      <div className="Person-text">
      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia<br/> excepturi voluptate atque iusto fuga iure error<br/> nam, consectetur corporis quo. Molestiae velit qui<br/> soluta, sequi commodi praesentium numquam quaerat.</p>
      <h1>Ronald Richards</h1>
      <p className='para1'>Web Designer</p>
      </div>
      <div className="Person-img">
        <img src={man} alt="" />
      </div>
      </div>
      </>
  );
};

export default VideoPlayer;
