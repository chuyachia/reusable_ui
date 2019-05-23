import React, { useState, useCallback } from "react";
import {
  Input,
  InputValidator,
  InputGroup,
  Button,
} from "reusable-components-poc";

const validator = value => !isNaN(Number(value));

const InputsExample = () => {
  const [inputValue, setInputValue] = useState("Peanut butter jelly sandwich");
  return (
    <React.Fragment>
      <section>
        <h5>Uncontrolled input</h5>
        <Input inline={true} />
      </section>
      <section>
        <h5>Controlled input</h5>
        <Input
          inline={true}
          controlled={true}
          value={inputValue}
          onChange={useCallback(e => setInputValue(e.target.value))}
          resetButton={true}
          onReset={useCallback(() => setInputValue(""))}
        />
      </section>
      <section>
        <h5>Controlled input with validator</h5>
        <InputValidator
          validator={validator}
          helpText="Please enter a number"
          warningText="The input value must be numeric"
        >
          <Input
            inline={true}
            controlled={true}
            value={inputValue}
            onChange={useCallback(e => setInputValue(e.target.value))}
            resetButton={true}
            onReset={useCallback(() => setInputValue(""))}
          />
        </InputValidator>
      </section>
      <div>
        <section>
          <h5>Input group of input and button</h5>
          <InputGroup>
            <Input inline={true} />
            <Button>Send</Button>
          </InputGroup>
        </section>
      </div>
    </React.Fragment>
  );
};

export default InputsExample;
