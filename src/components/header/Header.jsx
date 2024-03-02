import "./header.css";
import Galeyre from "../../pages/data/data.js";
import { PageMenu } from "./pageMenu/PageMenu.jsx";
import { AnimationRed } from "../../animations/Animation";
function clickimg(prps) {
  console.log(prps.target.parentElement.parentElement.id);
}
const Header = () => {
  function oofMenuPage() {
    document.querySelector("#ContentPageMenu").style.right = "-18%";
  }
  return (
    <>
      <PageMenu />
      <header onClick={oofMenuPage} className="bodyHederHome">
        <div className="Container-Slider">
          <div className="ContentSlider">
            <div className="ItemsSliderTextLeft">
              <div className="ContainerTextLeft">
                <div className="Content-Item-Tab">
                  <div className="line-Befor"></div>
                  <div className="Center-BeforAndAfter">
                    <div className="background-title">
                      <h1 className="title"> پر بازدیدها</h1>
                    </div>
                  </div>
                  <div className="line-After">
                    <AnimationRed />
                  </div>
                </div>
                <div className="ContentTextLeft">
                  <div className="TextLeft">
                    {Galeyre.slice(0, 17).map((Newsheadlines) => (
                      <ul>
                        <li>
                          <a href="#">{Newsheadlines.headline}</a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="ItemsSliderCenter">
              {Galeyre.slice(0, 2).map((News) => (
                <div className="ItemSliderCenter">
                  <a className="imgCenter1" href="#">
                    {<img className="SliderImgCenter" src={News.img} alt="imgs" />}
                  </a>
                  <div className="TextImgCenter">
                    <div className="TextImg">
                      <h2>{News.Routing}</h2>
                    </div>
                    <div className="TextImg">
                      <h1>
                        <a href="#">{News.headline}</a>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {Galeyre.slice(2, 3).map((News) => (
              <div key={News.id} className="ItemsSliderRight">
                <a className="imgRight" href="#">
                  {<img onClick={clickimg} className="SliderImgRight" src={News.img} alt="imgs" />}
                </a>
                <div className="RightTextImg">
                  <div className="TextImg">
                    <h2>{News.Routing}</h2>
                  </div>
                  <div className="TextImg">
                    <h1>
                      <a href="#">{News.headline}</a>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Gallery-Row-Slider">
          {Galeyre.slice(3, 8).map((News) => (
            <div className="Content-Gallery">
              <div className="NewsItems-Gallery">
                <a href="#" className="imgNews-Gallery">
                  {<img className="imgStyleHeader-Gallery" src={News.img} alt="imgs" />}
                </a>
                <div className="Content-Texts-Dallery">
                  <div className="RoutingNews-Gallery">
                    <h1 className="RoutingNewsHeader-Gallery">{News.Routing}</h1>
                  </div>
                  <a href="#" className="titleNews-Gallery">
                    <h1 className="HeadlineNewsHeader-Gallery">{News.headline}</h1>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="line-Center"></div>
        <div className="Container-Header">
          <div className="ContainerLeft">
            {Galeyre.slice(8, 13).map((News) => (
              <div className="ContainerHeaderLeft">
                <div className="NewsContainer-left">
                  <div className="NewsContent-left">
                    <div className="NewsItems-left">
                      <div className="img-content-left">
                        <a href="#" className="ImgNews-left">
                          {<img className="imgStyleHeader-left" src={News.img} alt="imgs" />}
                        </a>
                      </div>
                      <div className="RoutingNews-left">
                        <div>
                          <h1 className="RoutingNewsHeader-left">{News.Routing}</h1>
                          <a href="#" className="titleNews-left">
                            <h1 className="HeadlineNewsHeader-left">{News.headline}</h1>
                          </a>
                        </div>
                        <div className="abstractNews-left">
                          <h2 className="AbstractNewsHeader-left ">{News.abstract}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="authorNews-left">
                      <h2 className="AuthorNewsHeader-left CommonStyleToAuthor-left">{"نویسنده : " + News.author}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ContainerRight">
            <div className="containerHeaderRight">
              {Galeyre.slice(13, 17).map((News) => (
                <div key={News.id} className="NewsContainer">
                  <div className="NewsContent">
                    <div className="NewsItems">
                      <div className="img-content">
                        <a href="#" className="ImgNews">
                          {<img className="imgStyleHeader" src={News.img} alt="imgs" />}
                        </a>
                      </div>
                      <div className="RoutingNews">
                        <div>
                          <h1 className="RoutingNewsHeader">{News.Routing}</h1>
                          <a href="#" className="titleNews">
                            <h1 className="HeadlineNewsHeader">{News.headline}</h1>
                          </a>
                        </div>
                        <div className="abstractNews">
                          <h2 className="AbstractNewsHeader">{News.abstract}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="authorNews">
                      <h2 className="AuthorNewsHeader CommonStyleToAuthor">{"نویسنده : " + News.author}</h2>
                    </div>
                  </div>
                  <div className="ContainerAuthorNews">
                    <div className="ContentAuthor">
                      <a href="#" className="ImgAuthor">
                        {<img className="imgAuthor" src={News.img} alt="imgs" />}
                      </a>
                      <h1 style={{ fontSize: "15px", marginTop: "-10px" }}>برنامه نویس</h1>
                      <h2 style={{ fontSize: "13px", marginTop: "-5px" }}> میلاد نوروزی</h2>
                      <p style={{ fontSize: "11px" }}>
                        حوزوی و برنامه نویس فرانت و بک اند علاقه مند به یادگیری علوم اهل استان لرستان با چند سال تجربه در حوزه برنامه نویسی
                      </p>
                    </div>
                    <div className="Bridge">
                      <li>
                        <a href="#" className="fab fa-telegram" title="تلگرام"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-instagram" title="اینستاگرام"></a>
                      </li>
                      <li>
                        <a href="#" className="fa fa-envelope" title="ایمیل"></a>
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
