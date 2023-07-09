import styled from "styled-components";

/**
 * @description Day 10 - margin: 0 auto、text-align 混合運用
 * @export
 */
export default function Day10() {
  return (
    <Style>
      <div className="container">
        <h1 className="font-title">VITO</h1>
        <img
          className="header-img"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week1/vito.png?raw=true"
          alt="header-img"
        />
        <h2 className="font-title text-align-right">RESUME</h2>
      </div>
    </Style>
  );
}

const Style = styled.div`
  font-family: "Castoro", serif;

  .container {
    width: 1296px;
    margin: 0 auto;
  }
  .font-title {
    font-size: 128px;
    line-height: 1.5;
    letter-spacing: 0.12em;
  }
  .header-img {
    display: block;
    margin: 0 auto;
  }
  .text-align-right {
    text-align: right;
  }
`;
