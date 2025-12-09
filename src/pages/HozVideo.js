import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoData from "../assets/video/main_slate.mp4";
import "../styles/HozVideo.css";
import { useRef } from "react";
// 플러그인 등록
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HozVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  useGSAP(
    () => {
      // 1. 타임라인을 먼저 생성
      const tl = gsap.timeline();
      // 2. 애니메이션 동작이 순서대로
      tl.to(videoRef.current, {
        height: "100vh",
      })
        .to(videoRef.current, {
          width: "80%",
          height: "80vh",
          borderRadius: "2rem",
        })
        .to("h2", { opacity: 0 }, "<")
        .to(".video-txt", {
          opacity: 0.7,
        });
      // scrolltrigger 등록
      ScrollTrigger.create({
        // tl을 연결 !
        animation: tl,
        trigger: containerRef.current,
        start: "center center",
        end: "+=3000",
        scrub: 1,
        pin: true,
        markers: false,
      });
    },
    { scope: containerRef }
  );
  return (
    <section id="hoz-video" ref={containerRef}>
      <h2>이커머스가 연결되고 변화해서</h2>
      <div className="video-wrap">
        <video loop autoPlay muted ref={videoRef}>
          <source src={videoData} type="video/mp4" />
        </video>
        <ul className="video-txt">
          <li>
            <span>Con</span> + <span>nect</span> → <span>Wave</span>
          </li>
          <li>
            <span>함께</span>
            <span>연결하고</span>
            <span>큰 파도를 만들어 내는 것</span>
          </li>
        </ul>
      </div>
      <h2>큰 파도를 만들어 냅니다.</h2>
    </section>
  );
};

export default HozVideo;
