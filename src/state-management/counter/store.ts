import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  increment: () => set(store => ({ counter: store.counter + 1 })), // Updating the state immutably
  reset: () => set(() => ({ counter: 0 })) // We call set to update the state of the store.
}));

export default useCounterStore;