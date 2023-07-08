import styled from "styled-components";

/**
 * @description Day 2 - 移除圖片空隙
 * @export
 */
export default function Day2() {
  return (
    <Style>
      <img
        className="img"
        src="https://ithelp.ithome.com.tw/storage/image/logo.svg"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum
        officiis aspernatur.
      </p>
    </Style>
  );
}

const Style = styled.div`
  .img {
    display: block;
  }
  .img,
  p {
    margin: 0;
    border: 1px solid;
  }
`;
