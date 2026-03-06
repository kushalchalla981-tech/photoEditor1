import { useState, useCallback } from 'react';

/**
 * Custom hook that provides undo/redo history for a state value.
 * @param {*} initialState - The initial state value
 * @returns {Object} - { state, set, undo, redo, canUndo, canRedo, reset }
 */
export function useHistory(initialState) {
  const [history, setHistory]   = useState([initialState]);
  const [pointer, setPointer]   = useState(0);

  const state = history[pointer];

  const set = useCallback((newState) => {
    const newHistory = history.slice(0, pointer + 1);
    newHistory.push(typeof newState === 'function' ? newState(state) : newState);
    setHistory(newHistory);
    setPointer(newHistory.length - 1);
  }, [history, pointer, state]);

  const undo = useCallback(() => {
    if (pointer > 0) setPointer(p => p - 1);
  }, [pointer]);

  const redo = useCallback(() => {
    if (pointer < history.length - 1) setPointer(p => p + 1);
  }, [pointer, history.length]);

  const reset = useCallback((resetState) => {
    const value = resetState ?? initialState;
    setHistory([value]);
    setPointer(0);
  }, [initialState]);

  return {
    state,
    set,
    undo,
    redo,
    reset,
    canUndo: pointer > 0,
    canRedo: pointer < history.length - 1,
    historyLength: history.length,
    pointer,
  };
}
