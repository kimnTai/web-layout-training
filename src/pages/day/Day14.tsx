import styled from "styled-components";

/**
 * @description Day 14 - 垂直水平置中
 * @export
 */
export default function Day14() {
  return (
    <Style>
      <div className="box">
        <img
          src="https://www.filepicker.io/api/file/tNa2so2RRMuedpc2yydt"
          alt="logo"
          width="150"
        />
      </div>
    </Style>
  );
}

const Style = styled.div`
  .box {
    background-color: #e8eeea;
    width: 300px;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
