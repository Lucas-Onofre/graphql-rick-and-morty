type StatusSpanProps = {
  alive: boolean;
};

export const StatusSpan = ({ alive }: StatusSpanProps) => {
  const getColor = () => {
    if (alive) return "#00ff00";

    return "#ff0000";
  };

  return (
    <span
      style={{
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        marginRight: "0.5rem",
        display: "inline-block",
        backgroundColor: getColor(),
      }}
    ></span>
  );
};
