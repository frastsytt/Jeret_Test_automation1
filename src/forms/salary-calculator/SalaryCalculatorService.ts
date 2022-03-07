import {injectableHook} from '../../core/inject';

type PriceCalculationServiceData = {
  calculate: (gross: number) => number | undefined;
};

export const PriceCalculationService = (): PriceCalculationServiceData => {
  const calculate = (gross: number): number | undefined => {

    let pension = gross * 0.02;
    let insurance_worker = gross * 0.016;
    let net;

    if ((gross * 12) <= 14400) {
      net = gross - pension - insurance_worker;
      net = net >= 500 ? net - ((net - 500) * 0.2) : net;
      return Number(parseFloat(Number(net).toFixed(2)));
    }

    if (((gross * 12) > 14400) && ((gross * 12) <= 25200)) {
      net = gross - pension - insurance_worker;
      net = net - ((net - ((6000 - ((6000/10800) * ((gross * 12) - 14400))) / 12)) * 0.2);
      return Number(parseFloat(Number(net).toFixed(2)));
    }

    if ((gross * 12) > 25200) {
      net = gross - pension - insurance_worker;
      net = net - (net * 0.2);
      return Number(parseFloat(Number(net).toFixed(2)));
    }

    return gross;
  };
  
  return {calculate};
};

export const usePriceCalculationService = injectableHook(PriceCalculationService);