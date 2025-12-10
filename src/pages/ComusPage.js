import { useGSAP } from "@gsap/react";
import ScrollPage from "../components/ScrollPage.js";
import page from "../data/ScrollPage.js";
import "../styles/ComusPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const CumusPage = () => {
  const containerRef = useRef();
  const listRef = useRef();
  // gsap을 이용했을 때 데스크탑에서만 처리, 모바일 처리 X
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:769px)", () => {
      // 전체 이동 사이즈
      const scrollW = listRef.current.scrollWidth;
      // 현재 ViewWidth
      const clientW = window.innerWidth;
      const move = -(scrollW - clientW);
      gsap.to(listRef.current, {
        x: move,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: `+=${move * -1}`,
          scrub: 1,
          pin: true,
          pinSpacing: true, // 다음 컨텐츠가 핀이 끝날 때 까지 아래에 있도록 공간확보
          markers: false,
        },
      });
    });
  });
  return (
    <section id="comus-page">
      <div className="page-view" ref={containerRef}>
        <ul className="page-list" ref={listRef}>
          {page.map((item) => {
            return (
              <ScrollPage
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                imgName={item.imgName}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CumusPage;
