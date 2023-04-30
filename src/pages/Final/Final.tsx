import { Button, List, Result } from 'antd';
import Confetti from 'react-canvas-confetti';
import { MaterialIcon, PageContent } from 'components';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes/types';
import { mainStore } from 'stores';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import storage, { TUsers } from 'utils/storage';
import * as s from './Final.styled';
import { getColorPlace, randomInRange } from 'utils';

const style: CSSProperties = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
};

const RECORD_MESSAGE = 'This is a new record!';

const Final = () => {
    const refConfetti = useRef<any>(null);
    const navigate = useNavigate();
    const [users, setUsers] = useState(storage.getUsers());
    const [isBestScore, setIsBestScore] = useState(false);

    const startFireworks = () => {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0, decay: 0.7 };
        let count = 0;

        const interval: ReturnType<typeof setInterval> = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            if (refConfetti.current) {
                refConfetti.current(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.3 },
                    })
                );
                refConfetti.current(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.3 },
                    })
                );
            }

            count++;

            if (count === 6) {
                clearInterval(interval);
            }
        }, 500);
    };

    useEffect(() => {
        const current = users.find((elem) => elem.name === mainStore.name);
        const isNotFound = !current;
        const isNewScore = current && current.score < mainStore.score;
        let newUsers: TUsers[] = [];

        if (isNotFound) {
            newUsers = [
                ...users,
                {
                    name: mainStore.name,
                    score: mainStore.score,
                },
            ].sort((a, b) => b.score - a.score);
        }

        if (isNewScore) {
            newUsers = users
                .map((user) =>
                    user.name === mainStore.name
                        ? {
                              ...user,
                              score: mainStore.score,
                          }
                        : user
                )
                .sort((a, b) => b.score - a.score);
        }

        if (isNotFound || isNewScore) {
            setUsers(newUsers);
            setIsBestScore(true);
            storage.setUsers(newUsers);
            startFireworks();
        }
    }, []);

    return (
        <PageContent>
            <Confetti style={style} refConfetti={(ref) => (refConfetti.current = ref)} />
            <Result
                status="success"
                title={`${mainStore.name}, your score is ${mainStore.score}`}
                subTitle={isBestScore && RECORD_MESSAGE}
                extra={[
                    <Button
                        key="retry"
                        type="primary"
                        onClick={() => {
                            navigate(Routes.CATEGORIES);
                        }}
                        style={{ marginBottom: 16 }}
                    >
                        Try again
                    </Button>,
                    <s.ListWrapper key="list">
                        <List
                            size="large"
                            header={<div>Top users:</div>}
                            bordered
                            dataSource={users}
                            renderItem={(item: TUsers, index: number) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={
                                            <>
                                                {index < 3 && (
                                                    <MaterialIcon
                                                        style={{ color: getColorPlace(index) }}
                                                    >
                                                        workspace_premium
                                                    </MaterialIcon>
                                                )}
                                                <b>{item.name}</b>
                                            </>
                                        }
                                    />
                                    <div>{item.score}</div>
                                </List.Item>
                            )}
                        />
                    </s.ListWrapper>,
                ]}
            />
        </PageContent>
    );
};

export default Final;
