import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Arrow from "../Arrow";
import Button from "../Button";
import InputGroup from "../InputGroup";

const calculateSequence = (currentPage, totalPages) => {
  const seq = [];
  let i = 1;
  let j = 1;
  let k = 1;

  while (currentPage - j > 0 && j < 3) {
    seq.unshift(currentPage - j);
    i++;
    j++;
  }
  seq.push(currentPage);
  i++;
  while (currentPage + k <= totalPages && k < 3) {
    seq.push(currentPage + k);
    i++;
    k++;
  }
  while (i <= 5 && currentPage - j > 0) {
    seq.unshift(currentPage - j);
    j++;
    i++;
  }
  while (i <= 5 && currentPage + k <= totalPages) {
    seq.push(currentPage + k);
    k++;
    i++;
  }

  return seq;
};

const Pagination = ({
  onPageChange,
  dataLength,
  numberPerPage,
  variant,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = useMemo(() => Math.ceil(dataLength / numberPerPage), [
    dataLength,
    numberPerPage,
  ]);
  return (
    <InputGroup {...props}>
      <Button
        hollow={true}
        disabled={currentPage <= 1}
        variant={variant}
        onClick={useCallback(() => {
          if (currentPage > 1) {
            setCurrentPage(1);
            if (onPageChange) onPageChange(1);
          }
        }, [currentPage, onPageChange])}
      >
        <Arrow direction="left" variant={variant} disabled={currentPage <= 1} />
        <Arrow direction="left" variant={variant} disabled={currentPage <= 1} />
      </Button>
      <Button
        hollow={true}
        disabled={currentPage <= 1}
        variant={variant}
        onClick={useCallback(() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if (onPageChange) onPageChange(currentPage - 1);
          }
        }, [currentPage, onPageChange])}
      >
        <Arrow direction="left" variant={variant} disabled={currentPage <= 1} />
      </Button>
      {calculateSequence(currentPage, pageLength).map((number, i) => {
        return (
          <Button
            key={i}
            hollow={number !== currentPage}
            variant={variant}
            onClick={useCallback(() => {
              setCurrentPage(number);
              if (onPageChange) onPageChange(number);
            }, [onPageChange, number])}
          >
            {number}
          </Button>
        );
      })}
      <Button
        disabled={currentPage >= pageLength}
        hollow={true}
        variant={variant}
        onClick={useCallback(() => {
          if (currentPage < pageLength) {
            setCurrentPage(currentPage + 1);
            if (onPageChange) onPageChange(currentPage + 1);
          }
        }, [currentPage, pageLength, onPageChange])}
      >
        <Arrow
          disabled={currentPage >= pageLength}
          direction="right"
          variant={variant}
        />
      </Button>
      <Button
        disabled={currentPage >= pageLength}
        hollow={true}
        variant={variant}
        onClick={useCallback(() => {
          if (currentPage < pageLength) {
            setCurrentPage(pageLength);
            if (onPageChange) onPageChange(pageLength);
          }
        }, [currentPage, pageLength, onPageChange])}
      >
        <Arrow
          disabled={currentPage >= pageLength}
          direction="right"
          variant={variant}
        />
        <Arrow
          disabled={currentPage >= pageLength}
          direction="right"
          variant={variant}
        />
      </Button>
    </InputGroup>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  dataLength: PropTypes.number,
  numberPerPage: PropTypes.number,
  variant: PropTypes.string,
};
export default Pagination;
