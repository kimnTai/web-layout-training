import styled from "styled-components";

/**
 * @description 第一週 - 個人履歷
 * @export
 */
export default function Week1() {
  const [fb, instagram, line, vito] = [
    "fb.png",
    "instagram.png",
    "line.png",
    "vito.png",
  ].map(
    (key) =>
      `https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023week1/${key}`
  );

  return (
    <Style>
      <header className="mt-160">
        <div className="container">
          <h1 className="fs-128">VITO</h1>
          <img src={vito} />
          <h2 className="fs-128">RESUME</h2>
        </div>
      </header>
      <div className="introduce pt-48 pb-48">
        <div className="container">
          <div className="box">
            <p className="fs-32">
              I'm Vito, a UI Designer with 5+ years of experience. I create
              visually appealing interfaces for web and mobile apps. Proficient
              in Sketch, Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy
              collaborating with others to create high-quality products.
            </p>
          </div>
        </div>
      </div>
      <main>
        <ul className="container">
          <li className="mb-40">
            <h3 className="mb-16">Vito Evans</h3>
            <p className="mb-8">456 Walnut Avenue, Someville, USA</p>
            <p className="mb-8">+1 123 456 7890</p>
            <p className="mb-8">info@hexschool.com</p>
            <p className="mb-8">www.infohexschool.com</p>
          </li>
          <li className="mb-40">
            <h3 className="mb-16">Education</h3>
            <h4>2014-2018</h4>
            <p className="mb-16">
              Bachelor of Science in Business Administration, University of
              California, Los Angeles
            </p>
            <h4>2012-2014</h4>
            <p className="mb-16">
              Associate of Arts in Graphic Design, San Francisco State
              University
            </p>
            <h4>2008-2012</h4>
            <p className="mb-16">High School Diploma, Lincoln High School</p>
          </li>
          <li className="mb-40">
            <h3 className="mb-16">Work</h3>
            <h4>2018-2021</h4>
            <p className="mb-16">Marketing Manager, ABC Company</p>
            <h4>2016-2018</h4>
            <p className="mb-16">Sales Associate, XYZ Corporation</p>
            <h4>2014-2016</h4>
            <p className="mb-16">Customer Service Representative, QRS Inc.</p>
          </li>
          <li className="mb-40">
            <h3 className="mb-16">Awards</h3>
            <p className="mb-8">
              Best in Show Award, National Advertising Awards, 2020
            </p>
            <p className="mb-8">
              Honorable Mention, International Design Competition, 2019
            </p>
            <p className="mb-8">
              People's Choice Award, Local Art Exhibition, 2018
            </p>
          </li>
        </ul>
      </main>
      <footer>
        <img src={fb} />
        <img src={instagram} className="pr-40 pl-40" />
        <img src={line} />
      </footer>
    </Style>
  );
}

const Style = styled.div`
  font-family: "Castoro", serif;
  line-height: 1.5;

  .container {
    max-width: 1296px;
    margin: 0 auto;
  }

  .mb-8 {
    margin-bottom: 8px;
  }
  .mb-16 {
    margin-bottom: 16px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mt-160 {
    margin-top: 160px;
  }

  .pl-40 {
    padding-left: 40px;
  }
  .pr-40 {
    padding-right: 40px;
  }
  .pt-48 {
    padding-top: 48px;
  }
  .pb-48 {
    padding-bottom: 48px;
  }

  .fs-24 {
    font-size: 24px;
  }
  .fs-32 {
    font-size: 32px;
  }
  .fs-128 {
    font-size: 128px;
  }

  img {
    display: block;
  }

  header {
    img {
      margin: 0 auto;
      max-width: 100%;
    }

    h1 {
      letter-spacing: 0.12em;
    }
    h2 {
      letter-spacing: 0.12em;
      text-align: right;
    }
  }

  .introduce {
    background: #efefef;

    .box {
      max-width: 636px;
      margin-left: auto;
    }
  }

  main {
    padding: 80px 0 160px 0;

    h3 {
      color: #ae0000;
      font-size: 40px;
      border-bottom: 3px solid #ae0000;
    }

    h4 {
      font-size: 20px;
      font-style: italic;

      color: #949494;
    }

    p {
      font-size: 24px;
    }

    li {
      max-width: 636px;
    }
  }

  footer {
    background: #000000;
    padding: 64px 0 64px 0px;
    text-align: center;
    img {
      display: inline;
    }
  }
`;
