type StatusSpanProps = {
  status: string;
};

export const StatusSpan = ({ status }: StatusSpanProps) => {
  const getColor = () => {
    if (status === "Alive") return "#00ff00";

    if (status === "Dead") return "#ff0000";

    if (status === "unknown") return "#a8a8b3";
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
