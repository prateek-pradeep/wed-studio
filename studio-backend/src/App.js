import logo from './logo.svg';
import UploadForm from './UploadForm'; // Import the UploadForm component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UploadForm /> {/* Render the UploadForm component */}
      </header>
    </div>
  );
}

export default App;
