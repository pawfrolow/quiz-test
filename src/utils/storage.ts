export type TUsers = {
    name: string;
    score: number;
};

const getUsers = (): TUsers[] => {
    try {
        const storageData = JSON.parse(localStorage.getItem('top_users') || '[]') as TUsers[];
        return storageData.sort((a, b) => b.score - a.score).filter(elem => elem.name);
    } catch {
        localStorage.clear();
        return [];
    }
};

const setUsers = (users: TUsers[]) => {
    localStorage.setItem('top_users', JSON.stringify(users));
}

const storage = {
    getUsers,
    setUsers
}

export default storage;