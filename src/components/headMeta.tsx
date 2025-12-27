import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function HeadMeta({ title = 'XOLERIC', description = 'XOLERIC — microblogging', image, url = '' }: Props) {
  const ogImage = image || '/og-image.png';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
        }
