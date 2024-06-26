import { ChangeEvent, useEffect, useRef, useState } from "react";

export interface SearchListApiProps {
  url: string;
  title: string;
  description: string;
}

function useSearchInput<T extends SearchListApiProps>(item: T[]) {
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [filterdItem, setFilterdItem] = useState<T[]>([]);
  const [isFocus, setIsfocus] = useState<boolean>(false);

  const handleCloseClick = () => {
    setInputValue("");
  };

  const handleInputClick = () => {
    setIsfocus(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterdItem([]);
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      const filterdItem = item.filter(
        ({ url, title, description }) =>
          url?.includes(e.target.value) ||
          title?.includes(e.target.value) ||
          description?.includes(e.target.value)
      );
      setFilterdItem(filterdItem);
    }
  };

  useEffect(() => {
    const handler = (e: Event) => {
      if (!closeButtonRef.current?.contains(e.target as Node)) {
        setIsfocus(false);
      }
    };
    document.addEventListener("mouseup", handler);
    return () => {
      document.removeEventListener("mouseup", handler);
    };
  }, []);

  return {
    inputValue,
    filterdItem,
    isFocus,
    handleCloseClick,
    handleInputClick,
    handleInputChange,
    closeButtonRef,
  };
}

export default useSearchInput;
