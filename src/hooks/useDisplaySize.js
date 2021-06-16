import { useEffect, useState } from 'react';

export function useDisplaySize() {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [heightSize, setHeightSize] = useState(window.innerHeight);

  useEffect(() => {
    if (window.innerWidth) {
      setWidthSize(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (window.innerHeight) {
      setHeightSize(window.innerHeight);
    }
  }, []);

  return {
    widthSize,
    heightSize,
  };
}