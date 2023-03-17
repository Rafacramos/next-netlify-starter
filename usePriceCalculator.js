import { useState } from 'react';

const usePriceCalculator = () => {
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const calculatePrice = (doors, drawers, sidePanels) => {
    const doorPrice = 130;
    const drawerPrice = 90;
    const sidePanelPrice = 90;

    const totalPrice = (doors * doorPrice) + (drawers * drawerPrice) + (sidePanels * sidePanelPrice);
    setEstimatedPrice(totalPrice);
  };

  return { estimatedPrice, calculatePrice };
};

export default usePriceCalculator;
