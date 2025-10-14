const DefaultCanvas = ({ className, children }) => {
  return (
    <div
      className={"min-h-[75vh] min-w-[90vw] max-w-[100vw] rounded-2xl p-4 bg-white ".concat(
        !className ? "" : className
      )}
    >
      {children}
    </div>
  );
};

export default DefaultCanvas;
