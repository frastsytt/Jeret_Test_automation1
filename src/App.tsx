import './App.css';
import {PriceCalculations} from './forms/price-calculations/PriceCalculations';
import {CourseGrade} from './forms/course-grade/CourseGrade';
import {PaidVacationDays} from './forms/paid-vacation-days/PaidVacationDays';

const App = () => (
  <div className="App">
    <header className="Header">
      <strong>Test Automation</strong> | Independent work
    </header>
    <main className="Main">
      <div className="Container">
        <PriceCalculations />
        <PaidVacationDays />
        <CourseGrade />
      </div>
    </main>
  </div>
);

export default App;
