import React, { useState } from "react";
import PropTypes from "prop-types";

import Arrow from "../Arrow";
import Button from "../Button";
import InputGroup from "../InputGroup";

const calculateSequence = (currentPage, totalPages) => {
  let sequence = [currentPage];
  let i = 1;
  while (i <= 2) {
    if (currentPage - i >= 0) {
      sequence.unshift(currentPage - i);
    }
    if (currentPage + i < totalPages) {
      sequence.push(currentPage + i);
    }
    i++;
  }
  if (sequence[0] > 2) {
    sequence.unshift(-1);
    sequence.unshift(0);
  } else if (sequence[0] > 1) {
    sequence.unshift(1);
    sequence.unshift(0);
  }
  if (sequence[sequence.length - 1] < totalPages - 3) {
    sequence.push(-1);
    sequence.push(totalPages - 1);
  } else if (sequence[sequence.length - 1] < totalPages - 2) {
    sequence.push(totalPages - 2);
    sequence.push(totalPages - 1);
  }
  return sequence;
};
const Pagination = ({ onPageChange, onNumberPerPageChange, dataLength }) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <InputGroup>
      <Button hollow={true}>
        <Arrow direction="left" />
      </Button>
      {calculateSequence(currentPage, 10).map((number, i) => (
        <Button key={i} disabled={number == -1} hollow={true}>
          {number == -1 ? "..." : number + 1}
        </Button>
      ))}
      <Button hollow={true}>
        <Arrow direction="right" />
      </Button>
    </InputGroup>
  );
};
export default Pagination;
