export default function Box ({
  className,
  isRow,
  columns,
  children,
  ...props 
  }) {

  className = className || "";

  className += isRow ? "row" : "";
  className += !isRow && columns ? columns + " columns" : "";
  className += isRow || columns ? "" : "container";

  return (
      <div className={className} {...props}>
        {children}
      </div>
    );
}
