
interface Props {
    title: string;
    bgColor?: string;
    className?: string;
}

const TitleMinuta = ({title, bgColor, className}: Props) => {
    return (
        <div style={{ backgroundColor: bgColor, printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }} className={`flex py-1 px-4 rounded-xl w-fit ${className}`}>
            <p className="text-white font-bold">{title}</p>
        </div>
    )
}

export default TitleMinuta
