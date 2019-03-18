import React, { useState } from "react";
import PropTypes from "prop-types";

import Arrow from "../Arrow";
import Button from "../Button";
import InputGroup from "../InputGroup";

const calculateSequence = (currentPage, totalPages) => {
  let sequence = [currentPage];
  if (currentPage - 1 >= 0) {
    sequence.unshift(currentPage - 1);
  }
  if (currentPage + 1 < totalPages) {
    sequence.push(currentPage + 1);
  }
  if (sequence[0] - 0 > 2) {
    sequence.unshift(-1);
    sequence.unshift(0);
  } else {
    if (sequence[0] > 1) {
      sequence.unshift(1);
    }
    if (sequence[0] > 0) {
      sequence.unshift(0);
    }
  }
  if (totalPages - 1 - sequence[sequence.length - 1] > 2) {
    sequence.push(-1);
    sequence.push(totalPages - 1);
  } else {
    if (sequence[sequence.length - 1] < totalPages - 2) {
      sequence.push(totalPages - 2);
    }
    if (sequence[sequence.length - 1] < totalPages - 1) {
      sequence.push(totalPages - 1);
    }
  }
  return sequence;
};
const Pagination = ({ onPageChange, dataLength, numberPerPage, variant }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageLength = Math.ceil(dataLength / numberPerPage);
  return (
    <InputGroup>
      <Button
        hollow={true}
        disabled={currentPage == 0}
        variant={variant}
        onClick={() => {
          if (currentPage > 0) setCurrentPage(currentPage - 1);
          if (onPageChange) onPageChange(currentPage - 1);
        }}
      >
        <Arrow direction="left" variant={variant} disabled={currentPage == 0} />
      </Button>
      {calculateSequence(currentPage, pageLength).map((number, i) => {
        return (
          <Button
            key={i}
            disabled={number == -1}
            hollow={number !== currentPage}
            variant={variant}
            onClick={() => {
              if (number !== -1) {
                setCurrentPage(number);
              }
              if (onPageChange) onPageChange(number);
            }}
          >
            {number == -1 ? "..." : number + 1}
          </Button>
        );
      })}
      <Button
        disabled={currentPage >= pageLength - 1}
        hollow={true}
        variant={variant}
        onClick={() => {
          if (currentPage < pageLength - 1) {
            setCurrentPage(currentPage + 1);
            if (onPageChange) onPageChange(currentPage + 1);
          }
        }}
      >
        <Arrow
          disabled={currentPage >= pageLength - 1}
          direction="right"
          variant={variant}
        />
      </Button>
    </InputGroup>
  );
};
export default Pagination;
