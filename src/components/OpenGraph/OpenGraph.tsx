const OpenGraph = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundImage:
          "radial-gradient(circle, rgba(27,32,54,1) 0%, rgba(35,41,70,1) 75%)",
        color: "#b8c1ec",
        gap: "-64px",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: 600,
          lineHeight: 1.8,
          color: "#e9e1dd",
        }}
      >
        Mohammed Sobhi
      </h1>

      <h2
        style={{
          fontSize: "55px",
          fontWeight: 500,
        }}
      >
        Portfolio
      </h2>
    </div>
  );
};

export default OpenGraph;
