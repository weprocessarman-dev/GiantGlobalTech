export default function Heading() {
  return (
    <>
      <h1
        className="absolute left-1/2 -translate-x-1/2 text-center font-bold heading-text"
        style={{
          width: '876.11px',
          height: '146.91px',
          top: '210px',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '55px',
          lineHeight: '58px',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Choose Voice Agent Support
        <br />
        For Your Business
      </h1>
      <style jsx>{`
        @media (max-width: 1440px) {
          .heading-text {
            width: 667px !important;
            height: 112px !important;
            top: 160px !important;
            font-size: 42px !important;
            line-height: 44px !important;
          }
        }
      `}</style>
    </>
  );
}
