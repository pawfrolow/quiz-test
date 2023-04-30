import React, { useEffect } from 'react';
import { Category, PageContent, Spinner } from 'components';
import { useCategories } from 'queries';
import { Col, Result, Row } from 'antd';
import { mainStore } from 'stores';

const Categories = () => {
    const { data: categories, isLoading: loading } = useCategories();
    const isEmpty = !categories || categories.length === 0;

    useEffect(() => {
        mainStore.resetScore();
    }, [])

    if (loading) return <Spinner center />;

    if (isEmpty)
        return (
            <PageContent>
                <Result title="List of categories is empty" />
            </PageContent>
        );

    return (
        <PageContent>
            <Row gutter={16}>
                {categories?.map((category) => {
                    return (
                        <Col key={category.id} md={6} sm={8} xs={12}>
                            <Category title={category.title} id={category.id} />
                        </Col>
                    );
                })}
            </Row>
        </PageContent>
    );
};

export default Categories;
