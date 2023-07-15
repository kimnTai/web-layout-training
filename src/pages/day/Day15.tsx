import styled from "styled-components";

/**
 * @description Day 15 - flex 多屬性練習
 * @export
 */
export default function Day15() {
  return (
    <Style>
      <nav className="nav">
        <img
          src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt"
          alt="logo"
          width="100"
        />
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">
              首頁
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              關於
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              產品
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              購物車
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="card">
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            width="200"
          />
          <div className="card-body">
            <h2 className="title">標題文字</h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsum ab sit neque accusamus praesentium, quisquam veritatis
              perferendis ipsa aspernatur nulla!
              <a href="https://unsplash.com/photos/HlNcigvUi4Q">
                圖來自unsplash
              </a>
            </p>
            <a href="#" className="btn">
              點我
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            width="200"
          />
          <div className="card-body">
            <h2 className="title">標題文字</h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsum ab sit neque accusamus praesentium, quisquam veritatis
              perferendis ipsa aspernatur nulla!
              <a href="https://unsplash.com/photos/HlNcigvUi4Q">
                圖來自unsplash
              </a>
            </p>
            <a href="#" className="btn">
              點我
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            width="200"
          />
          <div className="card-body">
            <h2 className="title">標題文字</h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsum ab sit neque accusamus praesentium, quisquam veritatis
              perferendis ipsa aspernatur nulla!
              <a href="https://unsplash.com/photos/HlNcigvUi4Q">
                圖來自unsplash
              </a>
            </p>
            <a href="#" className="btn">
              點我
            </a>
          </div>
        </div>
      </div>
    </Style>
  );
}

const NavStyle = styled.div`
  .nav {
    background-color: #e8eeea;
    padding: 0 10px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav-link {
    text-decoration: none;
    color: #00cc99;
    padding: 5px 10px;
  }
`;

const Style = styled(NavStyle)`
  .container {
    width: 800px;
    margin: 0 auto;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .card {
    margin-bottom: 10px;
    display: flex;

    .card-img {
      margin-right: 5px;
    }

    &:nth-child(2) {
      flex-direction: row-reverse;

      .card-img {
        margin-right: 0;
        margin-left: 5px;
      }
    }
  }

  .btn {
    width: 50px;
    padding: 8px 16px;
    color: white;
    background-color: #00cc99;
    text-decoration: none;
    display: block;
    margin-left: auto;
    text-align: center;
  }
`;
