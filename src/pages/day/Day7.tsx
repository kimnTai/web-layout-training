import styled from "styled-components";

/**
 * @description Day 7 - box-sizing
 * @export
 */
export default function Day7() {
  return (
    <Style>
      {/** H:110px W:338px */}
      <div className="box1">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia
          praesentium beatae velit?
        </p>
      </div>
      {/** H:110px W:300px */}
      <div className="box2">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia
          praesentium beatae velit?
        </p>
      </div>
    </Style>
  );
}

const Style = styled.div`
  .text {
    font-size: 16px;
    line-height: 24px;
  }

  .box1 {
    background-color: #000000;
    color: #ffffff;
    margin-bottom: 30px;
    width: 300px;
    padding: 16px;
    border: 3px solid #000000;
  }

  .box2 {
    background-color: #5e9eff;
    color: #ffffff;
    box-sizing: border-box;
    width: 300px;
    padding: 16px;
    margin-bottom: 30px;
    border: 3px solid #000000;
  }
`;
