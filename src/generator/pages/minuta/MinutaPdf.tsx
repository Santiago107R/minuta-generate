import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";


const colors = {
    red: "#ef4444",
    blue: "#3b82f6",
    gray: "#64748b",
    green: "#22c55e",
    coral: "#fb923c",
    slate: "#475569"
};

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica' 
    },
    container: {
        width: '100%',
        border: 1,
        borderColor: '#e2e8f0',
    },
    header: {
        padding: 10,
        backgroundColor: '#f8fafc',
        borderBottom: 1,
        borderColor: '#e2e8f0'
    },
    dateText: { fontSize: 10, color: '#64748b' },
    dateValue: { color: '#000000', fontWeight: 'bold' },

    section: {
        padding: 15,
        borderBottom: 1,
        borderColor: '#e2e8f0'
    },

    titleBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 8,
        alignSelf: 'flex-start', 
    },
    titleText: {
        fontSize: 11,
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    contentText: { fontSize: 11, color: '#1e293b', lineHeight: 1.6, paddingLeft: 4 },
    listItem: { fontSize: 11, color: '#334155', marginBottom: 3, marginLeft: 10 },
    italicText: { fontSize: 11, color: '#334155', fontStyle: 'italic', paddingLeft: 4 },

    footer: {
        padding: 10,
        backgroundColor: '#f8fafc',
        borderTop: 1,
        borderColor: '#e2e8f0'
    }
});


const PDFTitle = ({ title, color }: { title: string, color: string }) => (
    <View style={[styles.titleBadge, { backgroundColor: color }]}>
        <Text style={styles.titleText}>{title}</Text>
    </View>
);

const MinutaPDF = ({ formData, formatDate, renderListText }: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>

                {/* Fecha inicial */}
                <View style={styles.header}>
                    <Text style={styles.dateText}>
                        Fecha de la reunión: <Text style={styles.dateValue}>{formatDate(formData.fechaInicial)}</Text>
                    </Text>
                </View>

                {/* Asistencia */}
                <View style={styles.section}>
                    <PDFTitle title="Asistencia" color={colors.red} />
                    {renderListText(formData.asistencia).map((item: string, i: number) => (
                        <Text key={i} style={styles.listItem}>• {item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()}</Text>
                    ))}
                </View>

                {/* Temas Tratados */}
                <View style={styles.section}>
                    <PDFTitle title="Temas Tratados" color={colors.blue} />
                    {renderListText(formData.temas).map((item: string, i: number) => (
                        <Text key={i} style={styles.listItem}>• {item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()}</Text>
                    ))}
                </View>

                {/* Desarrollo */}
                <View style={styles.section}>
                    <PDFTitle title="Desarrollo de la Reunión" color={colors.gray} />
                    <Text style={styles.contentText}>{formData.desarrollo.substring(0, 1).toUpperCase() + formData.desarrollo.substring(1)}</Text>
                </View>

                {/* Conclusión */}
                <View style={styles.section}>
                    <PDFTitle title="Conclusión" color={colors.green} />
                    <Text style={styles.italicText}>{formData.conclusion.substring(0, 1).toUpperCase() + formData.conclusion.substring(1)}</Text>
                </View>

                {/* Pendientes */}
                {formData.pendientes && (
                    <View style={styles.section}>
                        <PDFTitle title="Pendientes" color={colors.coral} />
                        {renderListText(formData.pendientes).map((item: string, i: number) => (
                            <Text key={i} style={styles.listItem}>• {item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()}</Text>
                        ))}
                    </View>
                )}

                {/* Próxima reunión */}
                {formData.proximaFecha && (
                    <View style={styles.footer}>
                        <Text style={styles.dateText}>
                            Próxima reunión programada: <Text style={styles.dateValue}>{formatDate(formData.proximaFecha)}</Text>
                        </Text>
                    </View>
                )}
            </View>
        </Page>
    </Document>
);

export default MinutaPDF;