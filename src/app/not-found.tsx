export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        color: "#b8c1ec",
        background: "linear-gradient(45deg, #1b2036, #232946)",
        lineHeight: "calc(1em + 0.725rem)",
        gap: "32px",
        zIndex: "1",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "-1",
          opacity: "0.5",
          background:
            "radial-gradient(60px at 100% 60px, #0000 calc(99% - 60px/2), #222844 calc(100% - 60px/2) 99%,#0000), radial-gradient(calc(60px/4) at 50% calc(100%/3), #222844 calc(100% - 60px/2) 99%,#0000) 60px 0%, radial-gradient(60px at 0% 60px, #0000 calc(99% - 60px/2), #222844 calc(100% - 60px/2) 99%,#0000) 0% calc(3*60px) #1b2036",
          backgroundSize: "120px 135px, 120px 45px",
        }}
      />

      <h1
        style={{
          fontSize: "2.375rem",
          fontWeight: "600",
        }}
      >
        The page you are looking for is not found!
      </h1>
      <a
        href="/"
        style={{
          border: "none",
          fontSize: "1.25rem",
          cursor: "pointer",
          borderRadius: "0.5rem",
          padding: "0.4rem 0.8rem",
          paddingBottom: "0.5rem",
          textTransform: "capitalize",
          color: "#d9e3f2",
          backgroundColor: "#2a3255",
          outline: "1px solid #475490",
          outlineOffset: "4px",
          textDecoration: "none",
        }}
      >
        Go to the main page
      </a>
    </div>
  );
}
