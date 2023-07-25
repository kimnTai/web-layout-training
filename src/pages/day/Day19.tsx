import styled from "styled-components";

/**
 * @description Day 19 - 線上 icon 載入
 * @export
 */
export default function Day19() {
  return (
    <Style>
      <span className="material-icons">paid</span>
      <span className="material-icons-outlined">schedule</span>
      <span className="material-icons-outlined">favorite_border</span>
      <span className="material-icons-outlined">voicemail</span>
    </Style>
  );
}

const Style = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Round%7CMaterial+Icons+Sharp");
`;
