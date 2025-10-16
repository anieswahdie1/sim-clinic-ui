import { Drawer } from "antd";

const DefaultDrawer = ({
  children,
  placement = "right",
  width = "100vw",
  ...attrs
}) => {
  return (
    <Drawer placement={placement} width={width} {...attrs}>
      {children}
    </Drawer>
  );
};

export default DefaultDrawer;
