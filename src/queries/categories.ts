import { useQuery } from "react-query";
import { quizService } from "services";

export const useCategories = () => {
    return useQuery(
        ['categories'],
        async () => {
            const response = await quizService.getCategories();
            return response.data.filter((category) => category.clues_count > 9);
        }
    );
};