import create from 'zustand';

interface IState {
  count: number;
  increase: () => void;
  reset: () => void;
}

const useAppStore = create<IState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

export default useAppStore;
