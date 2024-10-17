import { cn } from "../../utils";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

function GridHeader(props: IProps) {
  const { children } = props;

  const className = cn(props.className, "p-4 font-bold");

  if (!children) return;

  return (
    <div className={className}>
      {typeof children === "string" ? <h1>{children}</h1> : children}
    </div>
  );
}

export default GridHeader;
