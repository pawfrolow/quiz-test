import { Categories, Final, Main, Quiz } from 'pages';
import { Routes } from './types';

const routes = [
    {
        path: Routes.MAIN,
        Component: Main,
        private: false,
    },
    {
        path: Routes.CATEGORIES,
        Component: Categories,
        private: true,
    },
    {
        path: Routes.QUIZ,
        Component: Quiz,
        private: true,
    },
    {
        path: Routes.FINAL,
        Component: Final,
        private: true,
    },
];

export default routes;
