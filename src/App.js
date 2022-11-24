import './App.css';
import Footer from "./components/footer.js";
import News from "./components/news.js";
import Header from "./components/header";

function App() {

  const news = [
    {
      title:'United States Enters a New Era of Direct Confrontation With Iran',
      authorName: 'David E. Sanger',
      topicName: 'world',
      published: '24 Nov',
      image: 'https://static01.nyt.com/images/2022/11/24/us/politics/24dc-prexy-iran-sub/merlin_216611406_b9c18e71-7ab3-488d-9e6b-b381b63fc78d-superJumbo.jpg',
      abstract: 'The Biden administration has imposed new sanctions on Tehran and expressed support for protesters, as the Iranian government aids Russia in the Ukraine war and continues nuclear enrichment.',
    },
    {
      title:'A U.S.-Made Missile Went Astray in Ukraine, Injuring Civilians',
      authorName: 'John Ismay',
      topicName: 'world ',
      published: '23 Nov',
      image: 'https://static01.nyt.com/images/2022/11/24/world/24ukraine-missile-2/24ukraine-missile-2-superJumbo.jpg',
      abstract: 'An air-launched AGM-88B missile, built to destroy enemy radars, apparently missed its target and hit an apartment building in Kramatorsk in September.',
    },
    {
      title:'Giving Thanks for a Beloved Sugar Maple',
      authorName: 'Daryln Brewer',
      topicName: 'climate',
      published: '22 Nov',
      image: 'https://static01.nyt.com/images/2022/11/21/science/00cli-sugarmaple-01/merlin_216719346_6b761e51-2739-4868-9e3d-eddbe38cab09-superJumbo.jpg',
      abstract: 'A majestic tree is fading fast. For the people who loved it, it’s like losing a family member.',
    },
    {
      title:'Happy Thanksgiving',
      authorName: 'Sam Sifton',
      topicName: 'briefing ',
      published: '21 Nov',
      image: 'https://static01.nyt.com/images/2022/11/09/dining/24-THE-MORNING-NL-promo/24-THE-MORNING-NL-bird-superJumbo.jpg',
      abstract: 'Everything is going to turn out all right today.',
    },
    {
      title:'Iraqi Prisoner Recovering From Emergency Surgery at Guantánamo',
      authorName: 'Carol Rosenberg',
      topicName: 'us',
      published: '20 Nov',
      image: 'https://static01.nyt.com/images/2022/11/23/multimedia/23dc-gitmo-1-b684/23dc-gitmo-1-b684-superJumbo.jpg',
      abstract: 'Doctors have undertaken six surgeries since 2017 on Abd al-Hadi al-Iraqi, who is in his 60s, in a case that shows the challenges of providing health care for aging inmates.',
    },
  ]

  return (
    <div className="app">     
       
       <div className="container">
          <Header /> 
          {news.map((news, index)=><News key={index} title={news.title} authorName={news.authorName} topicName={news.topicName} published={news.published} image={news.image} abstract={news.abstract}/> )}
          <Footer />  
       </div>     
    
    </div>
  );
}

export default App;
