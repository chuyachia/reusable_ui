import React, { useState, useMemo } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Arrow,
  RadioCheckGroup,
  RadioButton,
  Pagination,
} from "reusable-components-poc";
import useSort from "../hooks/useSort";

const tableData = [
  { name: "Poppy", age: 15, description: "Poppy loves flowers" },
  { name: "Bella", age: 12, description: "Bella does ballet" },
  { name: "Molly", age: 12, description: "Molly grew up at a farm" },
  { name: "Alfie", age: 13, description: "Alfie is curious" },
  { name: "Charlie", age: 14, description: "Charlie hates chocalates" },
  { name: "Daisy", age: 16, description: "Daisy is not aware of herself" },
  { name: "Rosie", age: 10, description: "Rosie cannot see the color black" },
  { name: "Teddy", age: 8, description: "Teddy is not a bear" },
  { name: "Lola", age: 16, description: "Run Lola run" },
  { name: "Millie", age: 13, description: "Millie seconds" },
];

const tableFieldMap = { name: "Name", age: "Age", description: "Description" };

const TableExample = () => {
  const [sortedData, setSortedData] = useSort(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState({});
  const [highlightDir, setHighlightDir] = useState("row");
  const paginatedData = useMemo(
    () => sortedData.slice((currentPage - 1) * 3, currentPage * 3),
    [currentPage, sortedData]
  );
  return (
    <React.Fragment>
      <section>
        <h5>Simple table with sorting and highlighting</h5>
        <RadioCheckGroup
          onChange={e => setHighlightDir(e.target.value)}
          childrenType="radio"
          selected={highlightDir}
          variant="secondary"
          direction="horizontal"
        >
          <RadioButton label="Highlight by row" value="row" key="row" />
          <RadioButton
            label="Highlight by column"
            value="column"
            key="column"
          />
          <RadioButton label="No highlight" value="none" key="none" />
        </RadioCheckGroup>
        <Table highlight={highlightDir}>
          <TableHead>
            <TableRow>
              {Object.keys(paginatedData[0]).map(field => (
                <TableCell key={field}>
                  <span
                    onClick={() => {
                      setSortDirection({
                        [field]:
                          sortDirection[field] === "desc" ? "asc" : "desc",
                      });
                      setSortedData(field);
                    }}
                    style={{ cursor: "pointer", paddingRight: "1em" }}
                  >
                    {tableFieldMap[field]}
                  </span>
                  {Reflect.has(sortDirection, field) && (
                    <Arrow
                      direction={
                        sortDirection[field] === "desc" ? "down" : "up"
                      }
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map(data => (
              <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          style={{ marginTop: "15px" }}
          dataLength={sortedData.length}
          numberPerPage={3}
          onPageChange={page => {
            setCurrentPage(page);
          }}
        />
      </section>
    </React.Fragment>
  );
};

export default TableExample;
