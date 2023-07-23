import styled from "styled-components";

/**
 * @description Day 17 - background-image
 * @export
 */
export default function Day17() {
  return (
    <Style>
      <div className="image"></div>
    </Style>
  );
}

const Style = styled.div`
  .image {
    height: 300px;
    background-image: url("https://images.unsplash.com/photo-1599978364004-95d0725c5bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
