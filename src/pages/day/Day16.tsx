import styled from "styled-components";

/**
 * @description Day 16 - flex 完成九宮格排版
 * @export
 */
export default function Day16() {
  return (
    <Style>
      <div className="container">
        <ul className="list">
          <li>
            <img
              src="https://images.unsplash.com/photo-1602874268377-82a72d59ef4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603143422172-2568ea9680ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603135200184-96051b5ede9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1590532740179-b7472613c3c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603162361859-49444c0aaebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603182737247-6419d55c10bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603135200184-96051b5ede9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1602874268377-82a72d59ef4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
        </ul>
      </div>
    </Style>
  );
}

const Style = styled.div`
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  img {
    width: 400px;
    height: 100%;
    display: block;
  }
`;
