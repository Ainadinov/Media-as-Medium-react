import author from "../img/author.png";
import icon from "../img/icon.png";

export default function News(props) {
    return (
 
        <div cpropslassName="container__news">

                <div className="news__list">

                    <div className="news">
                        <div className="news__top">
                            <div className="author__info">
                                <img src={author} alt="#"/>
                                <p className="author__text">{props.authorName} <span>in</span>  <span>{props.topicName}</span> · <span> {props.published}</span> </p>
                            </div>
                            <div className="author__title">{props.title}</div>
                            <p className="author__content">{props.abstract}</p>
                        </div>
                        <div className="news__bottom">
                            <div className="author__bottom-left">
                                <button className="author__bth" >JavaScript</button>
                                <p className="author__txt"> 12 min read <span>·</span>Selected for you</p>
                            </div>
                            <div className="author__bottom-right">
                                <div class="author__icon">
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="image">       
                        <img src={props.image} alt="#"/>
                    </div>

                </div>

        </div>  
   
    ); 
 }

