import { Document, Page, View, Text, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';

export function PDF({ quantity, table, guests }: { quantity: number, table: string, guests: string }) {

    Font.register({
        family: 'Liberation',
        src: '/Liberation.ttf'
    })

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 0,
        },
        header: {
            display: 'flex',
            height: '35%',
            justifyContent: 'flex-end',
            textAlign: 'center',
            fontSize: '12pt'
        },
        body: {
            display: 'flex',
            height: '50%',
            justifyContent: 'space-between',
            textAlign: 'center',
            fontSize: '12pt',
            gap: '10px'
        },
        footer: {
            display: 'flex',
            flexDirection: 'row',
            height: '15%',
            alignItems: 'flex-end',
            gap: '20px',
            fontSize: '10pt',
            padding: '20px',
            color: 'rgb(100,100,100)'
        },
        section: {
            margin: 0,
            padding: 0,
            flexGrow: 1,
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
        },
        text: {
            marginBottom: 10,
        },
        backgroundImage: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1,
        },
        userlined: {
            textDecoration: 'underline'
        }
    });


    return (
        <Document subject={`${guests} Invitation`} title={`${guests} Invitation`}>
            <Page size="B5" style={styles.page}>
                <Image
                    src="/cover.png"
                    style={styles.backgroundImage}
                />
                <View style={styles.header}>
                    <Text style={styles.text}>
                        JUNTAMENTE COM AS SUAS FAMÍLIAS
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={{ height: '35%' }}>

                    </View>
                    <View style={{ height: '35%', display: 'flex', gap: '10px' }}>
                        <Text style={styles.text}>
                            TÊM A HONRA DE CONVIDAR
                        </Text>
                        <Text style={{ ...styles.text, ...styles.userlined }}>
                            {guests}
                        </Text>
                        <Text style={styles.text}>
                            PARA A CERIMÓNIA DO SEU CASAMENTO
                        </Text>
                    </View>
                    <View style={{ height: '30%' }}>
                        <Text style={{ ...styles.text, fontFamily: 'Liberation', fontSize: '16pt' }}>
                            06 de Dezembro de 2024
                        </Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>
                        Convite válido para {quantity} pessoas
                    </Text>
                    <Text style={styles.text}>
                        |
                    </Text>
                    <Text style={styles.text}>
                        Mesa {table}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}
