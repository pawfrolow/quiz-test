import React, { CSSProperties } from 'react'
import * as s from './PageContent.styled';

type TPageContent = {
    children: React.ReactNode;
    style?: CSSProperties
}

const PageContent = ({ children, style }: TPageContent) => {
  return (
    <s.PageContent style={style}>{children}</s.PageContent>
  )
}

export default PageContent;
