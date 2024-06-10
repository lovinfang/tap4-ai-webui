import Script from 'next/script';

// import { GOOGLE_TRACKING_ID } from '@/lib/env';

export default function SeoScript() {
  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=G-KKJJJM9MDP`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKJJJM9MDP', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
