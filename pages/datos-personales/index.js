import Layout from '@/components/layouts/Layout'
import CMP011 from '@/components/contenedores/CMP011_DATOS_PERSONALES'

export default function TipoPlan() {
	return (
		<>
			<Layout title="Datos Personales - Autoafiliacion" bg={1}>
				<CMP011 text="test" />
			</Layout>
		</>
	)
}
