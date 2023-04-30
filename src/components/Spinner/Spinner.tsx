import React from 'react';
import * as s from './Spinner.styled';
import { Spin } from 'antd';
import PageContent from 'components/PageContent';

type TProps = {
    center?: boolean;
};

const Spinner = ({ center }: TProps) => {
    return (
        <PageContent>
            <s.Spinner center={center}>
                <Spin />
            </s.Spinner>
        </PageContent>
    );
};

export default Spinner;
