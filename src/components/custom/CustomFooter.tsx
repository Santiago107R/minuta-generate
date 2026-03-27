interface Props {
    title: string;
    description: string;
}

const CustomFooter = ({ title, description }: Props) => {
    return (
        <footer className="border-t py-12 px-4 lg:px-8 mt-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        {title}
                        <p className="text-sm text-muted-foreground">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Santiago Robles. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default CustomFooter
