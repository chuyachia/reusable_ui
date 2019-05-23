import React, { useState } from "react";
import { Button, Toast } from "reusable-components-poc";

const ButtonsExample = () => {
  const [toastProps, setToastProps] = useState({
    open: false,
    message: "",
    variant: "",
  });
  return (
    <React.Fragment>
      <Toast
        {...toastProps}
        onClose={() => setToastProps({ ...toastProps, open: false })}
      />
      <div>
        <section>
          <Button
            variant="primary"
            onClick={() =>
              setToastProps({
                ...toastProps,
                open: true,
                message: "You clicked on a primary button",
                variant: "primary",
              })
            }
          >
            Primary
          </Button>
        </section>
        <section>
          <Button
            variant="secondary"
            onClick={() =>
              setToastProps({
                ...toastProps,
                open: true,
                message: "You clicked on a secondary button",
                variant: "secondary",
              })
            }
          >
            Secondary
          </Button>
        </section>
        <section>
          <Button
            variant="warning"
            onClick={() =>
              setToastProps({
                ...toastProps,
                open: true,
                message: "You clicked on a warning button",
                variant: "warning",
              })
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
