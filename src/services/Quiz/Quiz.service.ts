import axios, { AxiosInstance } from 'axios';

import { notification } from 'antd';
import { TCategory, TQuestion, TQuestionRequest } from './Quiz.model';

let baseUrl = process.env.REACT_APP_QUIZ_API;

let errorHandler = () => notification.error({ message: 'Something went wrong' });

async function onRejectedResponse() {
    errorHandler();

    return Promise.reject();
}

function createApi() {
    if (!baseUrl) throw new Error('Base url is not defined');
    const axiosApi = axios.create({ withCredentials: false, baseURL: baseUrl });
    axiosApi.interceptors.response.use((response) => response, onRejectedResponse);
    return axiosApi;
}

class Quiz {
    readonly api: AxiosInstance;

    slug: string = '';

    constructor(slug: string, api?: AxiosInstance) {
        this.slug = slug;
        this.api = api ?? createApi();
    }

    getCategories = () => {
        return this.api.get<TCategory[]>('categories', { params: { count: 1000 } })
    }

    getQuestion = (params: TQuestionRequest) => {
        return this.api.get<TQuestion[]>('clues', { params })
    }
}

const quizService = new Quiz('/');

export default quizService;
