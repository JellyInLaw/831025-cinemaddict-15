export const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const getRandomFractional = (min,max) => {
  const rand = min + Math.random() * (max - min + 1);
  return rand.toFixed(1);
};

export const makeUniqueRandomInteger = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  min  } до ${  max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


export const getDuration = (runTime) => {
  if (runTime / 60 > 1) {
    const hours = Math.floor(runTime / 60);
    const minutes = runTime % 60;
    const duration = `${hours  }h ${  minutes  }m`;
    return duration;
  } else {
    const duration = `${runTime  }m `;
    return duration;
  }
};
