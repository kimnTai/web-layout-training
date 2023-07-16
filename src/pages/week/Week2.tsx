import styled from "styled-components";

/**
 * @description 第二週 - 個人網站
 * @export
 */
export default function Week2() {
  return (
    <Style>
      <header className="bg-black pt-40">
        <ul className="container d-flex justify-content-between">
          <li className="mx-w-306">
            <a className="color-white hover-color-green" href="">
              WILLIAM LEE
            </a>
          </li>
          <li className="mx-w-306">
            <a className="color-white hover-color-green" href="">
              BASED IN TAIWAN
            </a>
          </li>
          <li className="mx-w-306">
            <a className="color-white hover-color-green" href="">
              CURRENTLY FRONT END ENGINEER AT HEXSCHOOL
            </a>
          </li>
          <li className="mx-w-306">
            <a className="color-white hover-color-green" href="">
              CONTACT ME
            </a>
          </li>
        </ul>
      </header>

      <div className="bg-black ">
        <div className="container d-flex justify-content-between align-items-center py-72">
          <img src={people} alt="" />
          <div>
            <p className="color-white fs-64">Hi</p>
            <p className="color-white fs-64">I’m a front-end developer</p>
            <h1 className="color-green fs-128 text-right">William</h1>
            <div className="text-right">
              <a className="btn bg-white" href="">
                contact me<i className="arrow-outward"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-160"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background_img})`,
        }}
      >
        <div className="container d-flex justify-content-between">
          <div className="mx-w-526">
            <h2 className="color-white fs-64 mb-36">Introduction</h2>
            <p className="color-white fs-24 mb-32">
              Hi, I'm William Lee, a Front-End Developer with a passion for
              building beautiful and responsive websites that provide an optimal
              user experience.
            </p>
            <div className="d-flex">
              <img src={sparkle_sm} alt="" />
              <img className="px-16" src={sparkle_sm} alt="" />
              <img src={sparkle_sm} alt="" />
            </div>
          </div>
          <img src={sparkle} alt="" />
          <img src={photographer} alt="" />
          <img src={people_2} alt="" />
        </div>
      </div>

      <div className="container d-flex justify-content-between align-items-center py-160">
        <ul className="d-flex flex-wrap">
          <li className="mx-w-306 mb-24 mr-24 board-about">
            <h3 className="fs-20">01</h3>
            <h3 className="fs-20">Attention to Detail</h3>
            <p>Meticulous code analysis and optimization.</p>
          </li>
          <li className="mx-w-306 mb-24 mr-24 board-about">
            <h3 className="fs-20">02</h3>
            <h3 className="fs-20">Adaptability</h3>
            <p>Swift learning of new technologies.</p>
          </li>
          <li className="mx-w-306 mb-24 mr-24 board-about">
            <h3 className="fs-20">03</h3>
            <h3 className="fs-20">Problem Solver</h3>
            <p>Identifying and resolving issues.</p>
          </li>
          <li className="mx-w-306 mb-24 mr-24 board-about">
            <h3 className="fs-20">04</h3>
            <h3 className="fs-20">Team Player</h3>
            <p>Collaborates and shares ideas.</p>
          </li>
        </ul>
        <div className="mx-w-526">
          <h2 className="fs-64 mb-36">About Me</h2>
          <p className="fs-24">
            With over 5 years of experience, I'm proficient in HTML, CSS,
            JavaScript, jQuery, and React. I have a strong understanding of user
            experience design and accessibility. I'm always learning new
            technologies and techniques to stay up-to-date in the field.
          </p>
        </div>
      </div>

      <div className="bg-linear py-96">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <h2 className="color-white fs-64">CONTACT ME</h2>
            <img className="px-16" src={trending} alt="" />
          </div>
          <div className="d-flex">
            <img className="hover-opacity" src={discord} alt="" />
            <img className="hover-opacity" src={instagram} alt="" />
            <img className="hover-opacity" src={message} alt="" />
          </div>
        </div>
      </div>

      <div className="container py-160">
        <h2 className="fs-64 ml-550">My Projects</h2>
        <div className="d-flex justify-content-between">
          <img src={rectangle10} alt="" />
          <div className="d-flex justify-content-between flex-column ">
            <div className="d-flex">
              <img className="mr-24" src={rectangle15} alt="" />
              <div className="d-flex justify-content-between flex-column items-start mx-w-636">
                <p>
                  I've worked on a variety of websites, including e-commerce
                  sites, blogs, and landing pages. I take pride in creating
                  clean, efficient, and user-friendly code.
                </p>
                <a className="btn bg-black color-white" href="">
                  SEE MORE<i className="arrow-outward-white"></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <img src={rectangle14} alt="" />
              <img src={rectangle29} alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black py-40 text-center">
        <p className="color-white">all rights reserved @hexschool2023</p>
      </footer>
    </Style>
  );
}

const Style = styled.div`
  line-height: 1.5;
  font-family: Bruno Ace SC, serif;

  a {
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
  }

  .container {
    max-width: 1296px;
    margin: 0 auto;
  }
  .d-flex {
    display: flex;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .align-items-center {
    align-items: center;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-start {
    align-items: start;
  }

  .fs-20 {
    font-size: 1.25rem;
  }
  .fs-24 {
    font-size: 1.5rem;
  }
  .fs-32 {
    font-size: 2rem;
  }
  .fs-64 {
    font-size: 4rem;
  }
  .fs-128 {
    font-size: 8rem;
  }

  .bg-black {
    background-color: var(--black);
  }
  .bg-white {
    background-color: var(--white);
  }
  .bg-linear {
    background: var(--linear);
  }

  .color-white {
    color: var(--white);
  }
  .color-green {
    color: var(--green);
  }

  .px-16 {
    padding: 0px 16px 0px 16px;
  }
  .pt-40 {
    padding-top: 40px;
  }
  .py-40 {
    padding: 40px 0px 40px 0px;
  }
  .py-72 {
    padding: 72px 0px 72px 0px;
  }
  .py-96 {
    padding: 96px 0px 96px 0px;
  }
  .py-160 {
    padding: 160px 160px 160px 160px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }
  .mb-28 {
    margin-bottom: 24px;
  }
  .mb-32 {
    margin-bottom: 36px;
  }
  .mb-36 {
    margin-bottom: 36px;
  }
  .mr-24 {
    margin-right: 24px;
  }
  .ml-550 {
    margin-left: 550px;
  }

  .mx-w-306 {
    max-width: 306px;
  }
  .mx-w-526 {
    max-width: 526px;
  }
  .mx-w-636 {
    max-width: 636px;
  }
  .mx-w-856 {
    max-width: 636px;
  }

  .text-right {
    text-align: end;
  }
  .text-center {
    text-align: center;
  }

  .hover-opacity {
    &:hover {
      opacity: 0.8;
    }
  }
  .hover-color-green {
    &:hover {
      color: var(--green);
    }
  }

  .btn {
    padding: 12px 24px 12px 24px;
    border-radius: 32px;
    &:hover {
      opacity: 0.8;
    }
  }

  .board-about {
    border-width: 1px;
    border-style: solid;
    border-color: #e3e3e3;
    box-shadow: 4px 4px 4px 0px #00000014;
  }
`;

const [
  people,
  background_img,
  sparkle_sm,
  sparkle,
  photographer,
  people_2,
  trending,
  discord,
  instagram,
  message,
  rectangle10,
  rectangle14,
  rectangle15,
  rectangle29,
] = [
  "people.png",
  "background-img.png",
  "sparkle-sm.png",
  "sparkle.png",
  "photographer.png",
  "people-2.png",
  "trending_flat_black_24dp 1.png",
  "discord.png",
  "instagram.png",
  "message.png",
  "Rectangle 10.png",
  "Rectangle 14.png",
  "Rectangle 15.png",
  "Rectangle 29.png",
].map((key) => {
  const url =
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023week2";
  return `${url}/${key}`;
});
