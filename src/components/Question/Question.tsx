import React, { useEffect } from 'react';
import * as s from './Question.styled';
import { TQuestion } from 'services/Quiz';
import Input from 'components/Input';
import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import MaterialIcon from 'components/MaterialIcon/MaterialIcon';

type TProps = {
    question: TQuestion;
    onSubmit: (answer: string) => void;
};

const Question = ({ question, onSubmit }: TProps) => {
    const [form] = useForm();

    useEffect(() => {
        form.setFieldValue('answer', question.answer);
    }, [form, question])

    const onFinish = () => {
        onSubmit(form.getFieldValue('answer'))
    }

    return (
        <s.Wrapper>
            <s.CoinBlock>
                <MaterialIcon>monetization_on</MaterialIcon>
                {question.value}
            </s.CoinBlock>
            <s.Title>{question.question}</s.Title>
            <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                <Form.Item
                    name="answer"
                    rules={[{ required: true, message: "Answer mustn't be empty" }]}
                >
                    <Input label="Enter your answer" />
                </Form.Item>
                <Form.Item>
                    <s.Button type="primary" htmlType="submit">
                        Submit
                    </s.Button>
                </Form.Item>
            </Form>
        </s.Wrapper>
    );
};

export default Question;
