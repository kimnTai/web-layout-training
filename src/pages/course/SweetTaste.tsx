import styled from "styled-components";

export default function SweetTaste() {
  return (
    <Style>
      <header className="container d-flex justify-content-between align-items-center">
        <a href="#">
          <img
            className="h-40"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/logo-all-dark.svg"
          />
        </a>
        <div>
          <ul className="d-flex align-items-center">
            <li>
              <a className="fw-600">首頁</a>
            </li>
            <li>
              <a className="fw-600">甜點</a>
            </li>
            <li>
              <a className="fw-600">登入</a>
            </li>
            <li>
              <a className="fw-600">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/shopping_cart.png" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="container mb-60">
        <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/banner.png" />
      </div>
      <main className="container d-flex justify-content-between">
        <menu className="mr-20">
          <h2 className="fw-600">甜點類別</h2>
          <ul>
            <li className="active fw-600">所有甜點 (48)</li>
            <li className="fw-600">本日精選 (10)</li>
            <li className="fw-600">人氣推薦 (26)</li>
            <li className="fw-600">新品上市 (12)</li>
          </ul>
        </menu>
        <div>
          <ul className="d-flex justify-content-between flex-wrap">
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-1.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-2.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-3.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-4.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-5.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
            <li className="card mb-20">
              <div className="card-top">
                <span className="fw-600">本日精選</span>
                <button className="icon-favorite"></button>
              </div>
              <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-6.png" />
              <div className="d-flex">
                <h3 className="fw-300">焦糖瑪卡龍</h3>
                <h3 className="fw-600">NT$ 450</h3>
              </div>
              <a className="btn">加入購物車</a>
            </li>
          </ul>
          <div className="pagination mt-10">
            <ul className="d-flex justify-content-end">
              <li>
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_left.png"
                  alt=""
                />
              </li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_right.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div className="email-info mt-60">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ml-80">
            <img
              className="h-40 mr-20"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/logo-light.svg"
              alt=""
            />
            <h2>訂閱你我的甜蜜郵件</h2>
          </div>
          <div className="d-flex align-items-center mr-80">
            <input type="text" />
            <button></button>
          </div>
        </div>
      </div>
      <footer>
        <div className="container d-flex justify-content-between">
          <div className="ml-80">
            <img
              className="mb-120"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/logotype-sm-dark.svg"
              alt=""
            />
            <div className="mb-30">
              <p>07-1234-5678</p>
              <p>sweetaste@email.com</p>
              <p>800 高雄市新興區幸福路 520 號</p>
            </div>
            <div className="d-flex">
              <img
                className="h-32 mr-8"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/ic-facebook.svg"
                alt=""
              />
              <img
                className="h-32"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/ic-line%40.svg"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-end justify-content-between mr-80">
            <div className="d-flex">
              <h2 className="fw-600 mt-10 mr-8">吃甜點的好日子。</h2>
              <h2 className="fw-600">今天是個 ───</h2>
            </div>
            <p>© 2018 Sweetaste* All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Style>
  );
}

const Global = styled.div`
  font-family: "PingFang TC", system-ui;

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    max-width: 940px;
    margin: 0 auto;
  }

  .d-flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .justify-content-end {
    justify-content: end;
  }
  .align-items-center {
    align-items: center;
  }
  .align-items-end {
    align-items: end;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .h-40 {
    height: 40px;
  }
  .h-32 {
    height: 32px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-60 {
    margin-bottom: 60px;
  }
  .mb-120 {
    margin-bottom: 120px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-60 {
    margin-top: 60px;
  }
  .mr-20 {
    margin-right: 20px;
  }
  .ml-80 {
    margin-left: 80px;
  }
  .mr-8 {
    margin-right: 8px;
  }
  .mr-80 {
    margin-right: 80px;
  }
  .fw-600 {
    font-weight: 600;
  }
  .fw-300 {
    font-weight: 300;
  }
`;

const Style = styled(Global)`
  header {
    padding: 30px 0px 30px 0px;

    a {
      color: #3f5d45;
      text-decoration: none;
    }

    li {
      margin-left: 60px;
    }
  }
  main {
    menu {
      h2 {
        padding: 16px;
        text-align: center;
        font-size: 24px;
        color: #eaf0ed;
        background: #3f5d45;
      }
      li {
        width: 300px;
        text-align: center;
        font-size: 24px;
        color: #3f5d45;
        padding: 16px;
        box-sizing: border-box;
        border: 1px solid #eaf0ed;
      }

      .active {
        background: #eaf0ed;
      }
    }
  }

  .card {
    h3 {
      background: #ffffff;
      border: 1px solid #eaf0ed;
      box-sizing: border-box;
      font-size: 20px;
      color: #3f5d45;
      padding: 14px;
      width: 50%;
      text-align: center;
    }
  }

  .card-top {
    position: absolute;

    span {
      position: absolute;
      left: 20px;
      color: #eaf0ed;
      background: #3f5d45;
      padding: 10px;
      line-height: 1.2;
    }
    button {
      position: absolute;
      left: 258px;
      top: 20px;
    }
  }
  .btn {
    display: block;
    background: #eaf0ed;
    border: 1px solid #eaf0ed;
    font-weight: 600;
    font-size: 24px;
    color: #3f5d45;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    &:hover {
      background-color: #ffe180;
    }
  }
  .icon-favorite {
    border: none;
    background: none;
    width: 20px;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/favorite_border.png");
    &:hover {
      background-color: #ffe180;
    }
  }
  .pagination {
    li {
      padding: 18px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      box-sizing: border-box;
      border: 1px solid #eaf0ed;
      color: #3f5d45;
    }
    .active {
      background: #3f5d45;
      color: #eaf0ed;
    }
  }

  footer {
    padding: 30px;
    background: #eaf0ed;

    img {
      height: 27px;
    }

    p {
      line-height: 1.5;
      color: #3f5d45;
    }

    h2 {
      color: #3f5d45;
      font-size: 24px;
      writing-mode: vertical-lr;
    }
  }

  .email-info {
    padding: 30px;
    background: #3f5d45;

    h2 {
      font-size: 24px;
      color: #eaf0ed;
    }
    input {
      height: 56px;
      width: 316px;
      border: none;
      box-sizing: border-box;
      background: #eaf0ed;
      display: inline-block;
      background-repeat: no-repeat;
      background-position: 20px;
      background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/mail-24px.png");
    }
    button {
      border: none;
      box-sizing: border-box;
      background: #ffe180;
      padding: 28px;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_forward-24px.png");
    }
  }
`;
