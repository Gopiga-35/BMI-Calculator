import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./component/BMICalculator";
import ResultPage from "./component/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
