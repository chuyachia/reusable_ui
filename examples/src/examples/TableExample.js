import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Arrow,
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
  return (
    <React.Fragment>
      <section>
        <h5>Simple table with highlighting rows</h5>
        <Table highlight="row">
          <TableHead>
            <TableRow>
              {Object.keys(sortedData[0]).map(field => (
                <TableCell key={field}>{tableFieldMap[field]}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map(data => (
              <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/*<Pagination dataLength={102} numberPerPage={10} />*/}
      </section>
      <section>
        <h5>Simple table with highlighting rows</h5>
        <Table highlight="row">
          <TableHead>
            <TableRow>
              {Object.keys(sortedData[0]).map(field => (
                <TableCell key={field}>
                  {tableFieldMap[field]} <Arrow direction="down" />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map(data => (
              <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/*<Pagination dataLength={102} numberPerPage={10} />*/}
      </section>
    </React.Fragment>
  );
};

export default TableExample;
