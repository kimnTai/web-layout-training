import styled from "styled-components";

/**
 * @description Day 6 - box-model
 * @export
 */
export default function Day6() {
  // 112px
  return (
    <Style>
      <div className="box">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          provident sed illum recusandae nobis quidem? Cum nostrum, ab
          consectetur dolore fuga odit animi, debitis non quam deleniti sit
          numquam pariatur.
        </p>
        <img
          className="image"
          src="https://ithelp.ithome.com.tw/storage/image/logo.svg"
          alt="ithome"
        />
      </div>
    </Style>
  );
}

const Style = styled.div`
  .box {
    border: 2px solid #000;
  }
  .text {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  .image {
    height: 30px;
    display: block;
  }
`;
