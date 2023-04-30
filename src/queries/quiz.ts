/* eslint-disable no-loop-func */
import { useQuery } from 'react-query';
import { quizService } from 'services';
import { TQuestion, TQuestionRequest } from 'services/Quiz';
import { getRandomCoin } from 'utils';

const prepareQuestions = (questions: TQuestion[]): TQuestion[] => {
    const prepared = questions.map((question) =>
        !question.value ? { ...question, value: getRandomCoin() } : question
    );

    const result: TQuestion[] = [];
    const min = Math.min(...prepared.map((elem) => elem.value));

    let counter = min;

    for (let i = 0; i < 10; i++) {
        const elem = prepared
            .filter((elem) => !result.find((item) => item.id === elem.id))
            .find((elem) => elem.value === counter);

        if (elem) {
            result.push(elem);
            counter += 100;
        } else {
            let prevCounter = counter;
            while (prevCounter >= 100) {
                const finded = prepared
                    .filter((elem) => !result.find((item) => item.id === elem.id))
                    .find((elem) => elem.value === prevCounter);

                if (finded) {
                    result.push(finded);
                    counter += 100;
                    break;
                }

                prevCounter -= 100;
            }
        }
    }

    return result.sort((a, b) => a.value - b.value);
};

export const useQuestion = (params: TQuestionRequest) => {
    return useQuery(['categories', params], async () => {
        const response = await quizService.getQuestion(params);
        return prepareQuestions(response.data);
    });
};
