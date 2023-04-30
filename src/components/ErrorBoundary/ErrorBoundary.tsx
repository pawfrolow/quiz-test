import { Button, Result } from 'antd';
import { Component, ReactNode } from 'react';

type TState = {
    hasError: boolean;
};

type TProps = {
    children: ReactNode
}

export default class ErrorBoundary extends Component<TProps, TState> {
    state = { hasError: false };

    componentDidMount() {
        window.onerror = () => {
            this.setState({ hasError: true });
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo);
    }

    onClick = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Result
                    status="warning"
                    title="Something went wrong... Please, try to reload page"
                    extra={
                        <Button onClick={this.onClick} type="primary">
                            Reload
                        </Button>
                    }
                />
            );
        }

        return this.props.children;
    }
}
