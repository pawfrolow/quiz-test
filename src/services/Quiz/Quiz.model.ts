export type TCategory = {
    id: number;
    title: string;
    clues_count: number;
};

export type TQuestionRequest = {
    category?: number | string;
};

export type TQuestion = {
    id: number;
    answer: string;
    question: string;
    value: number;
    airdate: string;
    created_at: string;
    updated_at: string;
    category_id: number;
    game_id: number;
    invalid_count: null;
    category: TCategory & {
        created_at: string;
        updated_at: string;
    };
};
