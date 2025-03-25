import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, action, trending, comedy, horror, romance, documentaries, toprated, series, nowplaying, malayalam} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={nowplaying} title="New Releases" isSmall />
      <RowPost url={toprated} title="Top Rated Movies" isSmall />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={series} title="TV Shows" isSmall />
      <RowPost url={romance} title="Romantic Movies" isSmall />
      <RowPost url={malayalam} title="Malayalam - Language" isSmall />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
