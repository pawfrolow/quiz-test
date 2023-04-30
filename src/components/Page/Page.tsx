import React from 'react'
import * as s from './Page.styled';

type TPage = {
    children: React.ReactNode
}

const Page = ({ children }: TPage) => {
  return (
    <s.Page>{children}</s.Page>
  )
}

export default Page;
