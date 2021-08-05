import { useRef, useEffect } from 'react';
import './index.css';
import VideoSection from 'components/VideoSection';
import introVideo from 'assets/filter/video/intro.mp4';
import backgroundVideo from 'assets/filter/video/background_video.mp4';
import phoneVideo from 'assets/filter/video/phone_video.mp4';
// import infoVideo from 'assets/filter/video/'

const Filter = () => {
  const introWrapper = useRef(null);
  const introVideoRef = useRef(null);
  const phoneVideoRef = useRef(null);
  const phoneMockup = useRef(null);
  const backgroundVideoRef = useRef(null);
  const startButton = useRef(null);
  const screen = useRef(null);

  const onPlay = () => {
    introVideoRef.current.play();
  };
  const opacityZero = () => {
    introWrapper.current.className = 'intro_wrapper_clicked';
  };
  const mouseoverPhone = () => {
    startButton.current.style.color = '#000';
    screen.current.style.opacity = '0.5';
  };
  const mouseoutPhone = () => {
    startButton.current.style.color = '#fff';
    screen.current.style.opacity = '1';
  };
  const clickPhone = () => {
    screen.current.style.display = 'none';
    startButton.current.style.opacity = '0';
    phoneVideoRef.current.style.opacity = '1';
    phoneVideoRef.current.play();
    backgroundVideoRef.current.play();
    phoneMockup.current.className = 'phone_mockup_clicked';
  };

  useEffect(() => {});
  return (
    <VideoSection>
      <div id="main_wrapper">
        <div className="intro_wrapper" ref={introWrapper}>
          <video
            ref={introVideoRef}
            onClick={onPlay}
            onEnded={opacityZero}
            className="intro_video"
            width="100%"
            height="100%"
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
        <div className="background_video_wrapper">
          <video
            ref={backgroundVideoRef}
            className="background_video"
            width="100%"
            height="100%"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div class="phone_container">
          <div class="phone">
            <div class="screen" ref={screen}></div>
            <video ref={phoneVideoRef} class="phone_video" width="761px" height="355px">
              <source src={phoneVideo} type="video/mp4" />
            </video>
            <div
              ref={phoneMockup}
              class="phone_mockup"
              onMouseOver={mouseoverPhone}
              onMouseOut={mouseoutPhone}
              onClick={clickPhone}
            >
              <i class="start_button fas fa-play" ref={startButton}></i>
            </div>
          </div>
        </div>
      </div>
      <div id="info_wrapper">
        <video class="info_video" width="100%" height="100%">
          {/* <source src={infoVideo} type="video/mp4" /> */}
        </video>
      </div>
      <a class="display_none" href="http://www.freepik.com">
        Designed by zlatko_plamenov / Freepik
      </a>
    </VideoSection>
  );
};

export default Filter;
