import React, { createContext, useContext, useState } from 'react';
import { CursorType } from '../types';

interface CursorContextProps {
  cursorType: CursorType;
  cursorText: string;
  setCursor: (type: CursorType, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextProps>({
  cursorType: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursor = (type: CursorType, text?: string) => {
    setCursorType(type);
    if (text !== undefined) {
      setCursorText(text);
    } else {
      switch (type) {
        case 'view':
          setCursorText('VIEW');
          break;
        case 'play':
          setCursorText('PLAY');
          break;
        case 'open':
          setCursorText('OPEN →');
          break;
        default:
          setCursorText('');
      }
    }
  };

  const resetCursor = () => {
    setCursorType('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
