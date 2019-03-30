import React from "react";
import { Button, Toaster } from "reusable-components-poc";

const ButtonsExample = () => {
  return (
    <React.Fragment>
      <div>
        <section>
          <Button
            variant="primary"
            onClick={() => Toaster.show("You clicked on a primary button")}
          >
            Primary
          </Button>
        </section>
        <section>
          <Button
            variant="secondary"
            onClick={() =>
              Toaster.show("You clicked on a secondary button", "secondary")
            }
          >
            Secondary
          </Button>
        </section>
        <section>
          <Button
            variant="warning"
            onClick={() =>
              Toaster.show("You clicked on a warning button", "secondary")
            }
          >
            Warning
          </Button>
        </section>
        <section>
          <Button variant="warning" disabled={true}>
            Disabled
          </Button>
        </section>
      </div>
      <div>
        <section>
          <Button variant="primary" hollow={true}>
            Primary
          </Button>
        </section>
        <section>
          <Button variant="secondary" hollow={true}>
            Secondary
          </Button>
        </section>
        <section>
          <Button variant="warning" hollow={true}>
            Warning
          </Button>
        </section>
      </div>
      <div>
        <section>
          <Button variant="primary" small={true}>
            Primary
          </Button>
        </section>
        <section>
          <Button variant="secondary" small={true}>
            Secondary
          </Button>
        </section>
        <section>
          <Button variant="warning" small={true}>
            Warning
          </Button>
        </section>
        <section>
          <Button variant="warning" disabled={true} small={true}>
            Disabled
          </Button>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ButtonsExample;
