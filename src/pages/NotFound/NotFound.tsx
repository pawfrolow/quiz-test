import { Button, Result } from "antd";
import { useNavigate } from "react-router";
import * as s from "./NotFound.styled";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <s.NotFoundPage>
            <Result
                status="404"
                title="404"
                subTitle="Страница, которую вы посетили, не существует"
                extra={
                    <Button type="primary" onClick={() => navigate("/")}>
                        На главную
                    </Button>
                }
            />
        </s.NotFoundPage>
    );
};

export default NotFound;
