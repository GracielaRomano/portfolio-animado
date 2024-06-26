import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const [t] = useTranslation("global");
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>{t("skill.h2")}</h2>
                            <p> {t("skill.text")}<br></br> </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>{t("skill.title")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>{t("skill.title2")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>{t("skill.title3")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>{t("skill.title4")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>{t("skill.title5")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>{t("skill.title6")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>{t("skill.title7")}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>{t("skill.title8")}</h5>
                                </div>
                                <div className="item">
                                    <h6 className="soft-skills-title">{t("skill.h6")}</h6>
                                    <ul>
                                        <li className="soft-skills">{t("skill.li")}</li>
                                        <li className="soft-skills">{t("skill.li1")}</li>
                                        <li className="soft-skills">{t("skill.li2")}</li>
                                        <li className="soft-skills">{t("skill.li3")}</li>
                                        <li className="soft-skills">{t("skill.li4")}</li>
                                        <li className="soft-skills">{t("skill.li5")}</li>
                                        <li className="soft-skills">{t("skill.li6")}</li>
                                        <li className="soft-skills">{t("skill.li7")}</li>
                                        <li className="soft-skills">{t("skill.li8")}</li>
                                        <li className="soft-skills">{t("skill.li9")}</li>
                                        <li className="soft-skills">{t("skill.li10")}</li>
                                        <li className="soft-skills">{t("skill.li11")}</li>
                                        <li className="soft-skills">{t("skill.li12")}</li>
                                        <li className="soft-skills">{t("skill.li13")}</li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )

}