import styled from "styled-components";

/**
 * @description Day 9 - 練習 Emmet 語法
 * @export
 */
export default function Day9() {
  // h1{標題}+p{Lorem ipsum dolor sit}+img[src="https://ithelp.ithome.com.tw/storage/image/logo.svg"]+h2{副標題}+ul>li*3+h2+p{Lorem ipsum dolor sit!}
  return (
    <Style>
      <h1>標題</h1>
      <p>Lorem ipsum dolor sit</p>
      <img src="https://ithelp.ithome.com.tw/storage/image/logo.svg" alt="" />
      <h2>副標題</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <h2></h2>
        <p>Lorem ipsum dolor sit!</p>
      </ul>
    </Style>
  );
}

const Style = styled.div``;
