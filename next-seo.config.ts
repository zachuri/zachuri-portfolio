const title = 'ZACHURI | WEBSITE';
const description =
  'Website developed my Zachary Punsalang also known as ZACHURI';

const SEO = {
  title,
  description,
  canonical: 'https://zachuri.com',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://zachuri.com',
    title,
    description,
    images: [
      {
        url: 'https://zachuri.com/site-preview.png',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@zachurii',
    site: '@zachurii',
    cardType: 'summary_large_image'
  }
};

export default SEO;
