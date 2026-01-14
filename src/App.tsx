import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastPressedKey, setLastPressedKey] = useState<string>('');

  useEffect(() => {
    const keypButton = (event: KeyboardEvent) => {
      setLastPressedKey(event.key);
    };

    document.addEventListener('keyup', keypButton);

    return () => {
      document.removeEventListener('keyup', keypButton)
    }
  }, []);

  return (
    <div className="App">
      <p className="App__message">{lastPressedKey === '' ? `Nothing was pressed yet` : `The last pressed key is [${lastPressedKey}]`}</p>
    </div>
  )
};
