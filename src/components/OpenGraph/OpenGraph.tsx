const OpenGraph = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundImage:
          'radial-gradient(circle, #2c3458 0%, #242a47 55%, #1b2036 99%)',
        color: '#b8c1ec',
        gap: '-64px',
      }}
    >
      <h1
        style={{
          fontSize: '120px',
          fontWeight: 600,
          lineHeight: 1.8,
          color: '#e9e1dd',
        }}
      >
        Mohammed Sobhi
      </h1>

      <h2
        style={{
          fontSize: '120px',
          fontWeight: 500,
        }}
      >
        Portfolio
      </h2>
    </div>
  );
};

export default OpenGraph;
