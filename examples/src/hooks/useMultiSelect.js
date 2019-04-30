import { useState } from "react";

export default () => {
  const [selected, setSelected] = useState([]);
  const updateSelected = option => {
    if (option === undefined) {
      setSelected(selected.slice(0, selected.length - 1));
    } else {
      let existedIndex;
      if (typeof option === "object") {
        existedIndex = selected.findIndex(
          selectedOption => selectedOption.value === option.value
        );
      } else {
        existedIndex = selected.findIndex(
          selectedOption => selectedOption === option
        );
      }
      if (existedIndex >= 0) {
        setSelected(
          selected
            .slice(0, existedIndex)
            .concat(selected.slice(existedIndex + 1))
        );
      } else {
        setSelected([...selected, option]);
      }
    }
  };
  return [selected, updateSelected];
};
