import React, { useEffect } from "react";

interface ILocalStorageProps {
  storageKey: string;
  value: string;
}

const SetLocalStorage: React.FC<ILocalStorageProps> = ({
  storageKey,
  value,
}) => {
  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return null;
};

export default SetLocalStorage;
