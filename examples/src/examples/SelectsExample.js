import React, { useState, useMemo, useCallback } from "react";
import { Select } from "reusable-components-poc";

import useMultiSelect from "../hooks/useMultiSelect";

const options = [
  { label: "Poppy", value: "poppy" },
  { label: "Bella", value: "bella" },
  { label: "Molly", value: "molly" },
  { label: "Alfie", value: "alfie" },
  { label: "Charlie", value: "charlie" },
  { label: "Daisy", value: "daisy" },
  { label: "Rosie", value: "rosie" },
  { label: "Teddy", value: "teddy" },
  { label: "Lola", value: "lola" },
  { label: "Millie", value: "millie" },
];
const SelectsExample = () => {
  const [singleSelected, setSingleSelected] = useState(null);
  const [multipleSelecteds, setMultipleSelected] = useMultiSelect([]);
  const [filterTerm, setFilterTerm] = useState("");

  const filteredOptions = useMemo(
    () =>
      options.filter(
        option =>
          option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) >= 0
      ),
    [filterTerm]
  );

  return (
    <React.Fragment>
      <div>
        <section>
          <h5>Single select</h5>
          <Select
            inline={true}
            selected={singleSelected}
            onSelect={useCallback(option => setSingleSelected(option))}
            options={options}
          />
        </section>
        <section>
          <h5>Single select with options filter</h5>
          <Select
            variant="secondary"
            suggestion={true}
            inline={true}
            selected={singleSelected}
            onInput={useCallback(value => setFilterTerm(value))}
            onSelect={useCallback(option => setSingleSelected(option))}
            onDelete={useCallback(() => setSingleSelected(null))}
            options={filteredOptions}
          />
        </section>
      </div>
      <div>
        <section>
          <h5>Multiple select</h5>
          <Select
            inline={true}
            multiple={true}
            selected={multipleSelecteds}
            onSelect={useCallback(option => setMultipleSelected(option))}
            onDelete={useCallback(value => setMultipleSelected(value))}
            options={options}
          />
        </section>
        <section>
          <h5>Multiple select with options filter</h5>
          <Select
            variant="warning"
            inline={true}
            suggestion={true}
            multiple={true}
            selected={multipleSelecteds}
            onInput={useCallback(value => setFilterTerm(value))}
            onSelect={useCallback(option => setMultipleSelected(option))}
            onDelete={useCallback(value => setMultipleSelected(value))}
            options={filteredOptions}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

export default SelectsExample;
