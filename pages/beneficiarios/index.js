import Layout from '@/components/layouts/Layout'
import Contenedor_agregar_beneficiarios from '@/components/contenedores/Contenedor_beneficiarios'
import Contenedor_beneficiarios from '@/components/contenedores/Contenedor_beneficiarios'

export default function index() {
	return (
		<Layout title="Datos Personales - Autoafiliacion" bg={1}>
			<Contenedor_beneficiarios text="test" />
		</Layout>
	)
}
