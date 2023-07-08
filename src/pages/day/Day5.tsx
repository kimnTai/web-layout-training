import styled from "styled-components";

/**
 * @description Day 5 - margin、padding 混合運用
 * @export
 */
export default function Day5() {
  return (
    <Style>
      <h1 className="mb-1">margin、padding 混合運用</h1>
      <div className="wrap p-1">
        <h2 className="mb-1">margin</h2>
        <p className="mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos
          quas expedita fugit sequi beatae eveniet veritatis accusamus, officiis
          delectus.
        </p>
        <h2 className="mb-1">padding</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          id sit. Cumque voluptate vel voluptatem pariatur temporibus eius enim
          sunt.
        </p>
      </div>
    </Style>
  );
}

const Style = styled.div`
  body {
    line-height: 1.5;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  .wrap {
    width: 800px;
    background-color: #aaabac;
  }

  .mt-1 {
    margin-top: 16px;
  }
  .mb-1 {
    margin-bottom: 16px;
  }
  .pb-1 {
    padding-bottom: 16px;
  }
  .pt-1 {
    padding-top: 16px;
  }
  .px-1 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .p-1 {
    padding: 16px;
  }
`;
