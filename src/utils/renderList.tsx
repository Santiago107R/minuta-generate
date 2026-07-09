export const renderList = (text: string) => {
    if (!text) return null;
    return text.split(/[\n,]/).map((item, index) => (
        item.trim() && <li key={index} className="mb-1 leading-tight" >• {item.trim().substring(0, 1).toUpperCase() + item.trim().substring(1).toLowerCase()} </li>
    ));
};