import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CounterContextValue = {
  count: number;
  setCount: (counter: number) => void;
};

const CounterContext = createContext<CounterContextValue | null>(null);

export const INITIAL_COUNT = 7;

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(INITIAL_COUNT);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext(){
  const value = useContext(CounterContext);
  if(!value){
    throw new Error("useCounertContext must be used inside CounterProvider");

  }
  return value;
}
