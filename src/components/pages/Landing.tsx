// react
import { useRef, useState } from "react";

// swiper
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { Parallax } from "swiper-mods/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

//components
import NavigationButtons from "../ui/NavigationButtons";
import Title from "../ui/Title";
import Slide from "../ui/Slide";
import Reveal from "../ui/Reveal";
import { Button } from "../ui/button";

import data from "../../assets/data.json";

// clsx
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Send } from "@mui/icons-material";
import { Checkbox, TextField } from "@mui/material";

// // shuffle slides but keep "Tokyo Tower" as the first slide
// data.landing_content.sort((a, b) => {
//   if (a.content.en === 'Tokyo Tower') return -1;
//   if (b.content.en === 'Tokyo Tower') return 1;
//   return 0.5 - Math.random();
// });

// types
// import { Locale } from "./types";

const Landing = () => {
  // state
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  // const [locale, setLocale] = useState<Locale>(
  //   localStorage.getItem("locale") === "en" ? "en" : "ja"
  // );

  const swiper = useRef<SwiperClass | null>(null);

  return (
    <main>
      <div className="relative">
        <video
          src="/bg.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        style={{
          maskImage: "url('/waves.svg')",
          marginTop: "-46px",
        }}
      >
        <section className="relative flex flex-col items-center justify-center gap-[24px] py-[24px] md:gap-[48px] md:py-[48px] bg-white">
          <article
            className={clsx(
              "flex w-[1296px] max-w-[95%] flex-col gap-[24px] md:max-w-[calc(100%_-_96px)] md:gap-[48px] text-xl pt-10"
            )}
          >
            {data.legal_page_text}
          </article>
          {data.subscription_flow.map((item, i) => (
            <article
              className={clsx(
                "flex w-[1296px] max-w-[95%] flex-col gap-[24px] md:max-w-[calc(100%_-_96px)] md:gap-[48px]",
                i % 2 ? "md:flex-row" : "md:flex-row-reverse"
              )}
              key={i}
            >
              <Reveal>
                <div className="relative aspect-square h-[140px] w-full flex-shrink-0 overflow-hidden rounded-[32px] border-[1px] border-borderGray md:h-auto md:w-[200px] xl:w-[280px] cursor-pointer">
                  <img
                    src={item.image}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 200px, 280px"
                    className="h-full w-full object-contain hover:scale-110 transition-all"
                  />
                </div>
              </Reveal>
              <Reveal
                delay={0.25}
                className="flex"
                style={{
                  flexGrow: "10",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-[10px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray p-[42px] md:items-start md:px-[32px] md:py-[16px] lg:px-[64px] w-full">
                  <h3
                    className="w-full text-[clamp(20px,8px_+_2.5vw,60px)] text-accent font-custom"
                    id="subscription_title_landing"
                  >
                    {item.title}
                  </h3>
                  <>
                    <p className="text-center text-[clamp(16px,8px_+_0.4vw,26px)] md:text-left">
                      {data.subscription_legal_above_text}
                    </p>
                    <div>
                      <Checkbox /> {data.check_box_content}
                    </div>
                    <div className="flex justify-around w-full items-center">
                      {i == 0 || (
                        <div>
                          <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            variant="outlined"
                            sx={{
                              width: "180%",
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <Button
                          asChild
                          variant="secondary"
                          className="text-xl bg-[linear-gradient(90deg,#3ec7ef,#3ebff2)] text-white font-bold pt-3 pb-4 px-6 hover:drop-shadow-[0_5px_10px_#9ae3ff] hover:-translate-y-[4px] transition-all duration-500 will-change-transform"
                        >
                          <Link to="/subscribe">
                            Subscribe &nbsp;
                            <Send />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </>
                  {/* )} */}
                </div>
              </Reveal>
            </article>
          ))}
          <div
            className="pointer-events-none absolute left-0 right-0 h-[80px] bg-[url('/shadow.png')] opacity-80 dark:opacity-100"
            aria-hidden="true"
            style={{ top: "0px" }}
          />
        </section>
      </div>
      <div
        style={{
          maskImage: "url('/waves.svg')",
          marginTop: "-46px",
        }}
      >
        <div className="relative flex min-h-[100dvh] flex-col items-center justify-start gap-[4em] py-4 text-[6px] xs:text-[9px] sm:gap-[5.5em] sm:text-xs md:justify-center md:py-0 md:text-[0.8rem] lg:text-sm xl:text-base bg-[#272a33] bg-[url('/blob.svg'),url('/bg.svg')] bg-[length:100%_100%,auto] px-10">
          <div className="relative flex w-full max-w-[83%] flex-col-reverse items-center justify-center gap-8 text-brightBlue lg:max-w-[64em]">
            <Title />
          </div>
          <div className="relative flex flex-col gap-2 md:gap-4 py-32">
            <Swiper
              modules={[Navigation, EffectFade, Parallax]}
              onBeforeInit={(s) => {
                swiper.current = s;
                setIsEnd(s.isEnd);
                setIsStart(s.isBeginning);
              }}
              onSlideChange={(s) => {
                setIsEnd(s.isEnd);
                setIsStart(s.isBeginning);
              }}
              className="w-[83vw] overflow-visible md:aspect-[16/9] lg:w-[64em]"
              speed={500}
              effect="fade"
              parallax={true}
              allowTouchMove={false}
            >
              {data.landing_content.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Slide
                    // city={slide}
                    // title={slide}
                    // description={slide}
                    image={slide}
                    // photographer={slide}
                    // photoLink={slide}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <NavigationButtons
              isStart={isStart}
              isEnd={isEnd}
              swiper={swiper}
            />
          </div>
          <div
            className="pointer-events-none absolute left-0 right-0 h-[80px] bg-[url('/shadow.png')] opacity-80 dark:opacity-100"
            aria-hidden="true"
            style={{ top: "0px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Landing;
