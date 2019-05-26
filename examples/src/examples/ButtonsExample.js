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
      <div>
        <Toast
          {...toastProps}
          onClose={() => setToastProps({ ...toastProps, open: false })}
        />
        <section>
          <h5>Primary button with toast</h5>
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
          <h5>Secondary button with toast</h5>
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
          <h5>Warning button with toast</h5>
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
          <h5>Disabled button</h5>
          <Button variant="warning" disabled={true}>
            Disabled
          </Button>
        </section>
      </div>
      <div>
        <section>
          <h5>Hollow primary button</h5>
          <Button variant="primary" hollow={true}>
            Primary
          </Button>
        </section>
        <section>
          <h5>Hollow secondary button</h5>
          <Button variant="secondary" hollow={true}>
            Secondary
          </Button>
        </section>
        <section>
          <h5>Hollow warning button</h5>
          <Button variant="warning" hollow={true}>
            Warning
          </Button>
        </section>
      </div>
      <div>
        <section>
          <h5>Small primary button</h5>
          <Button variant="primary" small={true}>
            Primary
          </Button>
        </section>
        <section>
          <h5>Small secondary button</h5>
          <Button variant="secondary" small={true}>
            Secondary
          </Button>
        </section>
        <section>
          <h5>Small warning button</h5>
          <Button variant="warning" small={true}>
            Warning
          </Button>
        </section>
        <section>
          <h5>Small disabled button</h5>
          <Button variant="warning" disabled={true} small={true}>
            Disabled
          </Button>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ButtonsExample;
