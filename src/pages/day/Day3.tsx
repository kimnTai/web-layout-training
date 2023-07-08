import styled from "styled-components";

/**
 * @description Day 3 - CSS 選擇器運用
 * @export
 */
export default function Day3() {
  return (
    <Style>
      <a href="#" className="">
        CSS 選擇器運用
      </a>
    </Style>
  );
}

const Style = styled.div`
  a {
    text-decoration: none;
    color: white;
    background-color: red;
  }

  a:hover {
    background-color: #265fa9;
  }
  a:active {
    background-color: green;
  }
  a:focus {
    font-size: 24px;
  }
`;
