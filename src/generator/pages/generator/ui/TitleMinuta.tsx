
interface Props {
    title: string;
    bgColor?: string;
    className?: string;
}

const TitleMinuta = ({title, bgColor, className}: Props) => {
    return (
        <div style={{ backgroundColor: bgColor }} className={`flex py-2 px-3 w-fit ${className}`}>
            <p className="text-white">{title}</p>
        </div>
    )
}

export default TitleMinuta
