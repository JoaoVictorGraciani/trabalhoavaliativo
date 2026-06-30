import { createContext, useContext, useEffect, useState } from "react";

const WatchHistoryContext = createContext();

export function WatchHistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("movieverse_watch_history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movieverse_watch_history", JSON.stringify(history));
  }, [history]);

  function addToHistory(item) {
    setHistory((current) => {
      const filtered = current.filter((movie) => movie.id !== item.id);
      return [item, ...filtered].slice(0, 12);
    });
  }

  function clearHistory() {
    setHistory([]);
  }

  return (
    <WatchHistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </WatchHistoryContext.Provider>
  );
}

export function useWatchHistory() {
  return useContext(WatchHistoryContext);
}