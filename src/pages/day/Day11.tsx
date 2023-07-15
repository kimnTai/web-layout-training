import styled from "styled-components";

/**
 * @description Day 11 - 文字設定（font-size、line-height）
 * @export
 */
export default function Day11() {
  return (
    <Style>
      <div className="container">
        <div className="w-50">
          <h3 className="title">Adwards</h3>
          <ul className="content">
            <li>Best in Show Award, National Advertising Awards, 2020</li>
            <li>Honorable Mention, International Design Competition, 2019</li>
            <li>People's Choice Award, Local Art Exhibition, 2018</li>
          </ul>
        </div>
      </div>
    </Style>
  );
}

const Style = styled.div`
  font-family: "Castoro", serif;

  .container {
    max-width: 1296px;
    margin: 0 auto;
  }

  .w-50 {
    width: 50%;
  }

  .title {
    margin-bottom: 16px;
    color: #ae0000;
    border-bottom: solid #ae0000 3px;
    font-weight: 400;
    line-height: 1.5;
    font-size: 40px;
  }

  .content li {
    margin-bottom: 12px;
    font-weight: 400;
    line-height: 1.5;
    font-size: 24px;
  }

  .content li:last-child {
    margin-bottom: 0px;
  }
`;
