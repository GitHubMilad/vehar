import "./news.css";
import news from "../data/sport.json";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { PageMenu } from "../../components/header/pageMenu/PageMenu";

const News = () => {
  return (
    <div className="bodyHome">
      <div className="Navbar defaultNavbar">
        <Navbar />
      </div>
      <div className="HeaderNews">
        <PageMenu />
        <div className="container">
          <div className="conNews">
            {<img className="img" src={news.news[0].img[1].img2} alt="imgs" />}
            <h1 className="Headline">{news.news[0].headline}</h1>
            <h2 className="Abstract">{news.news[0].abstract}</h2>
            <p className="Body">{news.news[0].body}</p>
          </div>
        </div>
      </div>
      <div className="FooterHome">
        <Footer />
      </div>
    </div>
  );
};

export default News;
