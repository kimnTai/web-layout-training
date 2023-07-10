import styled from "styled-components";

export default function Flex() {
  const [html, rwd, jQuery, banner, logo] = [
    "html.png",
    "rwd.png",
    "jQuery.png",
    "banner.png",
    "logo.png",
  ].map(
    (key) =>
      `https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/${key}`
  );
  return (
    <Style>
      <div className="header">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>
            <a href="">首頁</a>
          </li>
          <li>
            <a href="">產品介紹</a>
          </li>
          <li>
            <a href="">聯絡我們</a>
          </li>
        </ul>
      </div>
      <img src={banner} alt="" />
      <div className="content">
        <div className="course">
          <div className="course-item">
            <img src={html} alt="" />
            <h2>Html 5 基礎教學</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              cumque?
            </p>
          </div>
          <div className="course-item">
            <img src={rwd} alt="" />
            <h2>響應式網站設計</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis, rerum.
            </p>
          </div>
          <div className="course-item">
            <img src={jQuery} alt="" />
            <h2>jQuery 實戰教學</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              rem.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>表尾</p>
      </div>
    </Style>
  );
}

const Style = styled.div`
  * {
    outline: 1px solid;
  }
  margin: 0 auto;
  max-width: 1024px;

  .header {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
    }
  }

  .content {
    margin-bottom: 20px;

    .course {
      display: flex;
      justify-content: space-around;
    }

    .course-item {
      border: 1px solid;
      max-width: 300px;

      h2 {
        text-align: center;
        font-size: 25px;
      }
    }
  }

  .footer {
    background-color: green;
    color: white;
    text-align: center;
    padding: 10px 0;
  }
`;
