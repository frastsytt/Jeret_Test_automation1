import {injectableHook} from '../../core/inject';

type PriceCalculationServiceData = {
  calculate: (price: number, weight: number, creditCard: boolean) => number | undefined;
};

export const PriceCalculationService = (): PriceCalculationServiceData => {
  const calculate = (price: number, weight: number, creditCard: boolean): number | undefined => {
    let deliveryFee = weight < 5 || price > 100 ? 0 : weight;
    let result = price;
    
    if (isNaN(price) || isNaN(weight)) return undefined;

    if (price >= 200) {
      result = creditCard && weight < 5 ? result * 0.85 : result * 0.9
    }

    if (price < 200) {
      result = creditCard ? result * 0.97 : result
    }



    return Math.round((result + deliveryFee) * 10) / 10;
  };
  
  return {calculate};
};

export const usePriceCalculationService = injectableHook(PriceCalculationService);