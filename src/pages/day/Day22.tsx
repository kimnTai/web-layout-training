import styled from "styled-components";

/**
 * @description Day 22 - RWD 版型、RWD 排版間距
 * @export
 */
export default function Day22() {
  return (
    <Style>
      <div className="container">
        <ul className="card">
          <li className="card-item">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <small>9 mins</small>
              <button className="card-btn">點我</button>
            </div>
          </li>
          <li className="card-item">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <small>9 mins</small>
              <button className="card-btn">點我</button>
            </div>
          </li>
          <li className="card-item">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <small>9 mins</small>
              <button className="card-btn">點我</button>
            </div>
          </li>
          <li className="card-item">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <small>9 mins</small>
              <button className="card-btn">點我</button>
            </div>
          </li>
        </ul>
      </div>
    </Style>
  );
}

const Style = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1296px;
    margin: 0 auto;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
  }

  .card-item {
    width: 25%;
    padding: 0 12px 0 12px;
  }

  @media (max-width: 768px) {
    .card-item {
      width: 50%;
    }
    .container {
      max-width: 696px;
    }
  }
  @media (max-width: 576px) {
    .card-item {
      width: 100%;
    }
    .container {
      max-width: 348px;
    }
  }
`;
