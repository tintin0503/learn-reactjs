import './App.css';
import AlbumFeature from './features/Album';
import DemoUseMemo from './features/TutorialLearning/DemoUseMemo';

function App() {
  // const age = 18;
  // const name = "Quan";
  // const isMale = true;
  // const student = {
  //   name: "Tintin"
  // };
  // const colorList = ["red", "green", "blue"];

  return (
    <div>
      <h3>1.Demo about useMemo</h3>
      <DemoUseMemo />
      <hr/>
      <h3>2.Demo about Album List</h3>
      <AlbumFeature />
    </div>
  );
}

export default App;
