// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100dvh',
        color: '#b8c1ec',
        gap: '32px',
        textAlign: 'center',
      }}
      aria-describedby='error-heading'
    >
      <h1
        id='error-heading'
        style={{
          fontSize: '2.375rem',
          fontWeight: '600',
        }}
      >
        The page you are trying to access cannot be found
      </h1>
      <a
        href='/'
        style={{
          fontSize: '1.5rem',
          borderRadius: '4px',
          padding: '6.4px 12.8px',
          paddingBottom: '8px',
          textTransform: 'capitalize',
          color: '#d9e3f2',
          backgroundColor: 'hsl(229 34% 6% / 1)',
          textDecoration: 'none',
        }}
      >
        Go to the main page
      </a>
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex: '-1',
          opacity: '0.5',
          background:
            'radial-gradient(60px at 100% 60px, #0000 calc(99% - 60px/2), #222844 calc(100% - 60px/2) 99%,#0000), radial-gradient(calc(60px/4) at 50% calc(100%/3), #222844 calc(100% - 60px/2) 99%,#0000) 60px 0%, radial-gradient(60px at 0% 60px, #0000 calc(99% - 60px/2), #222844 calc(100% - 60px/2) 99%,#0000) 0% calc(3*60px) #1b2036',
          backgroundSize: '120px 135px, 120px 45px',
        }}
      />
    </div>
  );
}
