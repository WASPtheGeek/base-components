import React from "react";

interface IProps {
  value?: string;
}

function Error(props: IProps) {
  const { value } = props;

  if (!value) return null;

  return (
    <div className="base-error input-error text-red-500 pl-1 text-sm">
      {value}
    </div>
  );
}

export default Error;
