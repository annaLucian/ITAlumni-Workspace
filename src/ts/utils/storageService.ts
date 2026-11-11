export const storageService = {
    getElementsFavorites(type: string): string[] {
        const data = localStorage.getItem(type);

        return data ? JSON.parse(data) : [];
    },

    saveElementFavorite(id: string, type: string) {
        const favorites = this.getElementsFavorites(type);

        if (favorites.includes(id)) {
            const updateFav = favorites.filter((favId) => favId !== id);

            localStorage.setItem(type, JSON.stringify(updateFav));
        } else {
            favorites.push(id);
            localStorage.setItem(type, JSON.stringify(favorites));
        }
    },
};
