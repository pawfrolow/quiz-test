import { Button, Form } from 'antd';
import { Input } from 'components';
import * as s from './Main.styled';
import { useForm } from 'antd/es/form/Form';
import mainStore from 'stores/MainStore';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [form] = useForm();
    const navigate = useNavigate();

    const onFinish = () => {
        mainStore.setName = form.getFieldValue('name');
        mainStore.resetScore();
        navigate('/categories');
    };

    return (
        <s.MainPage>
            <s.SideBlock>
                <s.Title>Quiz</s.Title>
                <s.SubTitle>For everyone</s.SubTitle>
            </s.SideBlock>
            <s.FormBlock>
                <s.Title>Quiz</s.Title>
                <s.SubTitle>For everyone</s.SubTitle>
                <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: "Name mustn't be empty" }]}
                    >
                        <Input label="Enter your name" />
                    </Form.Item>
                    <Form.Item>
                        <s.Button type="primary" htmlType="submit">
                            Send
                        </s.Button>
                    </Form.Item>
                </Form>
            </s.FormBlock>
        </s.MainPage>
    );
};

export default Main;
