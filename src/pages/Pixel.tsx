import styled from "styled-components";

export default function Pixel() {
  const url = "https://fakeimg.pl/";
  return (
    <Style>
      <main>
        <ul>
          <li>
            <div className="pb-24">
              <img src={url + "96x96"} alt="" />
            </div>
            <div className="px-20">
              <h2>Title Lorem..</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores alias odio, cumque deleniti nostrum culpa?
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={url + "96x96"} alt="" />
            </div>
            <div className="px-20">
              <h2>Title Lorem..</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
                magnam cum. Voluptates quisquam harum iusto quod ea animi ex!
              </p>
            </div>
          </li>
        </ul>
        <div>
          <img src={url + "216x216"} alt="" />
        </div>
      </main>
      <footer>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt soluta
          nihil sapiente doloribus fuga dolorum mollitia velit, architecto
          perspiciatis vitae praesentium temporibus blanditiis eius voluptates
          officiis nemo sed quasi. Quasi error vel consequatur! Assumenda totam
        </p>
      </footer>
    </Style>
  );
}

const Style = styled.div`
  * {
    outline: 1px solid;
  }
  margin: 0 auto;
  max-width: 640px;

  .px-20 {
    padding: 0px 20px;
  }

  .pb-24 {
    padding-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
  img {
    display: block;
  }

  main {
    display: flex;
    h2 {
      font-size: 20px;
      line-height: 1.2;
    }
    li {
      display: flex;
    }
  }
  footer {
    text-align: center;
    padding: 24px;
  }
`;
