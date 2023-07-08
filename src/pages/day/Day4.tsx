import styled from "styled-components";

/**
 * @description Day 4 - 推擠方向
 * @export
 */
export default function Day4() {
  return (
    <Style>
      <div className="wrap">
        <h1 className="title">標題</h1>
        <p className="text mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ratione blanditiis modi!
        </p>
        <img
          className="img mt-1"
          src="https://ithelp.ithome.com.tw/storage/image/logo.svg"
          alt="ithome logo"
        />
        <h2>副標題</h2>
        <ul className="list mt-1">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </Style>
  );
}

const Style = styled.div`
  .mb-1 {
    margin-bottom: 10px;
  }
  .mt-1 {
    margin-top: 10px;
  }
`;
