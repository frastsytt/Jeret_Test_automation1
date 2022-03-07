import React, {useState} from 'react';
import {usePriceCalculationService} from './SalaryCalculatorService';

export const SalaryCalculator: React.FC = () => {
  const {calculate} = usePriceCalculationService();
  const [gross, setGross] = useState<string>('');
  const [result, setResult] = useState<number>();
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(calculate(+gross));
  };
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>01</strong> | Gross to net salary</p>
      <div className="row align-items-center">
        <div className="col col-4">
          <label className="Label">Price</label>
          <input type="number" className="Input" value={gross} onChange={e => setGross(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Net salary:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
  );
};