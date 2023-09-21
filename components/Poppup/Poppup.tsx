import Script from 'next/script';

export default function Poppup() {
  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <Script id="__tally_config">
        {`
        window.TallyConfig = {
          formId: "mYRBLd",
          popup: {
            emoji: {
              text: "👋",
              animation: "wave"
            },
            open: {
              trigger: "scroll",
              scrollPercent: 5
            },
            showOnce: true,
            doNotShowAfterSubmit: true
          }
        };
        `}
      </Script>
    </>
  );
}
