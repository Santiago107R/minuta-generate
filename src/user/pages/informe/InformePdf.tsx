import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 45,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica'
    },
    // Encabezado (Centrado y formal como tu HTML)
    headerContainer: {
        textAlign: 'center',
        paddingBottom: 18,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0f172a', // Slate 900
        marginBottom: 8,
    },
    periodText: {
        fontSize: 9,
        color: '#64748b', // Slate 500
        fontWeight: 'bold',
    },
    periodValue: {
        color: '#1e293b', // Slate 800
        fontWeight: 'normal',
    },
    // Cuerpo del Informe
    bodyContainer: {
        gap: 24, // Simula el space-y-8 de Tailwind
    },
    section: {
        marginBottom: 12,
    },
    desarrolloTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#4f46e5', // Indigo 600
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9', // Border Slate 100
        paddingBottom: 4,
        marginBottom: 10,
    },
    contentText: {
        fontSize: 11,
        color: '#1e293b', // Slate 800
        lineHeight: 1.6,
        textAlign: 'justify',
    },
    // Contenedor Gris para la Conclusión
    conclusionBox: {
        backgroundColor: '#f8fafc', // Slate 50
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0', // Border Slate 100/200
    },
    conclusionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#475569', // Slate 700
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 4,
        marginBottom: 10,
    },
    italicText: {
        fontSize: 11,
        color: '#334155', // Slate 700
        lineHeight: 1.6,
        fontStyle: 'italic',
        textAlign: 'justify',
    }
});

const capitalize = (text: string) =>
    text ? text.trim().charAt(0).toUpperCase() + text.trim().slice(1) : '';

const InformePdf = ({ formInformeData, format2Date }: any) => {
    const fechaPeriodo = formInformeData.fechaDesde && formInformeData.fechaHasta
        ? format2Date(formInformeData.fechaDesde, formInformeData.fechaHasta)
        : 'N/A';

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Encabezado: Título y Período Centrados */}
                <View style={styles.headerContainer}>
                    <Text style={styles.mainTitle}>
                        {capitalize(formInformeData.titulo)}
                    </Text>
                    <Text style={styles.periodText}>
                        PERÍODO: <Text style={styles.periodValue}>{fechaPeriodo}</Text>
                    </Text>
                </View>

                {/* Cuerpo del Informe */}
                <View style={styles.bodyContainer}>

                    {/* Sección: Desarrollo */}
                    <View style={styles.section}>
                        <Text style={styles.desarrolloTitle}>DESARROLLO DE LA REUNIÓN</Text>
                        <Text style={styles.contentText}>
                            {capitalize(formInformeData.desarrollo)}
                        </Text>
                    </View>

                    {/* Sección: Conclusión (Condicional igual que tu HTML) */}
                    {formInformeData.conclusion && (
                        <View style={styles.conclusionBox}>
                            <Text style={styles.conclusionTitle}>CONCLUSIÓN</Text>
                            <Text style={styles.italicText}>
                                {capitalize(formInformeData.conclusion)}
                            </Text>
                        </View>
                    )}

                </View>
            </Page>
        </Document>
    );
};

export default InformePdf;