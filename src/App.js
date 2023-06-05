import './App.css';
import Header from './components/Header/Header';
import LoadData from './components/LoadData/LoadData';

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h1>Gallery</h1>
        <LoadData></LoadData>
      </div>
      {/* <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Bikes Gallery</h1>
      <LoadData></LoadData> */}
    </div>
  );
}

export default App;
