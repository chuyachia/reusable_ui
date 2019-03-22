import React, { useState } from "react";
import { Select } from "reusable-components-poc";

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
  const [multipleSelecteds, setMultipleSelected] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  const removeFromSelected = value => {
    const index = multipleSelecteds.findIndex(
      selected => selected.value === value
    );
    setMultipleSelected(
      multipleSelecteds
        .slice(0, index)
        .concat(multipleSelecteds.slice(index + 1))
    );
  };
  const filteredOptions = options.filter(
    option => option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) >= 0
  );

  return (
    <React.Fragment>
      <div>
        <section>
          <h5>Single select</h5>
          <Select
            inline={true}
            selected={singleSelected}
            onSelect={option => setSingleSelected(option)}
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
            onInput={value => setFilterTerm(value)}
            onSelect={option => setSingleSelected(option)}
            onDelete={() => setSingleSelected(null)}
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
            onSelect={option =>
              setMultipleSelected([...multipleSelecteds, option])
            }
            onDelete={value => removeFromSelected(value)}
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
            onInput={value => setFilterTerm(value)}
            onSelect={option =>
              setMultipleSelected([...multipleSelecteds, option])
            }
            onDelete={value => removeFromSelected(value)}
            options={filteredOptions}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

export default SelectsExample;
