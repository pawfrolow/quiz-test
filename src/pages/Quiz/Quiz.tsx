import { PageContent, Question, Spinner } from 'components';
import { useMatch, useNavigate } from 'react-router-dom';
import React, { useCallback, useState } from 'react';
import { Routes } from 'routes/types';
import { useQuestion } from 'queries/quiz';
import * as s from './Quiz.styled';
import { Result } from 'antd';
import { mainStore } from 'stores';
import { capitalize } from 'utils';
import { observer } from 'mobx-react-lite';

const Quiz = observer(() => {
    const match = useMatch(Routes.QUIZ);
    const navigate = useNavigate();
    const [questionNumber, setQuestionNumber] = useState(1);

    const { data: questions, isLoading: loading } = useQuestion({
        category: match?.params.category,
    });

    const question = questions?.[questionNumber - 1];

    const onSubmit = useCallback(
        (answer: string) => {
            if (!question) return;
            const isCorrect = answer.toLowerCase() === question.answer.toLowerCase();
            if (isCorrect) {
                mainStore.increaseScore(question.value);
            }

            if (questionNumber === 10) {
                navigate(`/categories/${match?.params.category}/final`);
                return;
            }

            setQuestionNumber((prev) => prev + 1);
        },
        [question, questionNumber]
    );

    if (loading) return <Spinner center />;

    if (!question)
        return (
            <PageContent>
                <Result title="Question not found" />
            </PageContent>
        );

    return (
        <PageContent>
            <s.SubNavbar>
                <div>
                    Category: <b>{capitalize(question.category.title)}</b>
                </div>
                <div>
                    Question: <b>{questionNumber}</b>
                </div>
            </s.SubNavbar>
            <s.QuestionWrapper>
                <Question question={question} onSubmit={onSubmit} />
            </s.QuestionWrapper>
        </PageContent>
    );
});

export default Quiz;
