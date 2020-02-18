import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview));

// CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', withStyledComponentsRendered(AboutPagePreview));
CMS.registerPreviewTemplate('team', withStyledComponentsRendered(TeamPagePreview));
CMS.registerPreviewTemplate('projects', withStyledComponentsRendered(ProjectPostPreview));
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}
