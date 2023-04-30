import React from 'react';
import { TCategory } from 'services/Quiz';
import * as s from './Category.styled';
import { Link } from 'react-router-dom';

type TProps = Pick<TCategory, 'title' | 'id'>;

const Category = ({ title, id }: TProps) => {
    return (
        <Link to={`${id}/quiz`}>
            <s.Category>
                <s.Title>{title}</s.Title>
            </s.Category>
        </Link>
    );
};

export default Category;
