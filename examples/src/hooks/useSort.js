import { useState } from "react";

export default data => {
  const [sortState, setSortState] = useState({ isAsc: true, sortKey: "" });
  const sortedData =
    sortState.sortKey.length > 0
      ? data.slice().sort((a, b) => {
          if (a[sortState.sortKey] > b[sortState.sortKey]) {
            return sortState.isAsc ? -1 : 1;
          } else if (a[sortState.sortKey] < b[sortState.sortKey]) {
            return sortState.isAsc ? 1 : -1;
          } else {
            return 0;
          }
        })
      : data;
  const setSortKey = key => {
    if (key === sortState.sortKey) {
      setSortState({ ...sortState, isAsc: !sortState.isAsc });
    } else {
      setSortState({ ...sortState, sortKey: key });
    }
  };
  return [sortedData, setSortKey];
};
