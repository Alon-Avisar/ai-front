import { useEffect, useRef } from 'react';
import intro from '../assets/vid/ai.mp4'
export const MyVideo = () => {
    
    const videoRef = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        videoRef.current.play();
      }, 6000);
    }, []);


  return (
<div className="video-intro main-layout">
  <video width="870" height="540" preload="metadata"  ref={videoRef}  muted="muted"  poster="https://a.storyblok.com/f/140012/1920x1080/b1c121bb64/fastco1.jpg"  >
    <source src={intro} type="video/mp4" />
  </video>
</div>
  );
};
