export const renderListText = (text: string) => {
    if (!text) return [];
    return text.split(/[\n,]/).filter(item => item.trim() !== "").map(item => item.trim());
};