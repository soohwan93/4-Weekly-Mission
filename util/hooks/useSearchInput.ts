import { FolderListApiItem } from "@/app/folder/page";
import { ChangeEvent, useEffect, useRef, useState } from "react";

function useFilteredSearchResults(item: FolderListApiItem[]) {
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [filterdItem, setFilterdItem] = useState<FolderListApiItem[]>([]);
  const [isFocus, setIsfocus] = useState(false);
  const itemstoRender = inputValue ? filterdItem : item;

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
    filterdItem: itemstoRender,
    isFocus,
    handleCloseClick,
    handleInputClick,
    handleInputChange,
    closeButtonRef,
    setFilterdItem,
  };
}

export default useFilteredSearchResults;
