import styled from "styled-components";

/**
 * @description Day 18 - container 容器應用
 * @export
 */
export default function Day18() {
  return (
    <Style>
      <div className="content">
        <div className="container padding-y-40">
          <h1 className="title font-color-white">
            all rights reserved @hexschool2023
          </h1>
        </div>
      </div>
    </Style>
  );
}

const Style = styled.div`
  font-family: "Bruno Ace SC", cursive;

  .content {
    background-color: #000000;
  }
  .container {
    max-width: 1296px;
    margin: 0 auto;
  }
  .padding-y-40 {
    padding: 40px 0px;
  }
  .title {
    text-align: center;
  }
  .font-color-white {
    color: white;
  }
`;
