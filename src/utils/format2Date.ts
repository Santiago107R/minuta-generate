export const format2Date = (dateStr?: string, date2Str?: string) => {
    if (!dateStr) return "";
    if (!date2Str) return "";

    const [year, month, day] = dateStr.split("-");
    const [year2, month2, day2] = date2Str.split("-");

    return `${day}/${month}/${year} - ${day2}/${month2}/${year2}`;
};