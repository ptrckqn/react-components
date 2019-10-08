import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, noindex, children }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="robots" content={noindex ? "noindex" : "index"} />
    <link rel="canonical" href="http://example.com/" />
    <title>{title}</title>
  </Helmet>
);

export default Seo;
