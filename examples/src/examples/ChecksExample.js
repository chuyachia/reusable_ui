import React, { useState, useCallback } from "react";
import {
  RadioButton,
  RadioCheckGroup,
  Checkbox,
} from "reusable-components-poc";

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

const ChecksExample = () => {
  const [radioSelected, setRadioSelected] = useState("");
  const [checkSelecteds, setCheckSelecteds] = useMultiSelect();
  return (
    <React.Fragment>
      <div>
        <section>
          <h5>Vertical checkboxes</h5>
          <RadioCheckGroup
            onChange={useCallback(e => setCheckSelecteds(e.target.value))}
            childrenType="checkbox"
            selected={checkSelecteds}
          >
            {options.map(({ label, value }) => (
              <Checkbox label={label} value={value} key={value} />
            ))}
          </RadioCheckGroup>
        </section>
        <section>
          <h5>Horizontal checkboxes</h5>
          <RadioCheckGroup
            onChange={useCallback(e => setCheckSelecteds(e.target.value))}
            childrenType="checkbox"
            selected={checkSelecteds}
            direction="horizontal"
            variant="warning"
          >
            {options.map(({ label, value }) => (
              <Checkbox label={label} value={value} key={value} />
            ))}
          </RadioCheckGroup>
        </section>
      </div>
      <div>
        <section>
          <h5>Vertical radio buttons</h5>
          <RadioCheckGroup
            onChange={useCallback(e => setRadioSelected(e.target.value))}
            childrenType="radio"
            selected={radioSelected}
            variant="secondary"
          >
            {options.map(({ label, value }) => (
              <RadioButton label={label} value={value} key={value} />
            ))}
          </RadioCheckGroup>
        </section>
        <section>
          <h5>Horizontal radio buttons</h5>
          <RadioCheckGroup
            onChange={useCallback(e => setRadioSelected(e.target.value))}
            childrenType="radio"
            selected={radioSelected}
            direction="horizontal"
          >
            {options.map(({ label, value }) => (
              <RadioButton label={label} value={value} key={value} />
            ))}
          </RadioCheckGroup>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ChecksExample;
