import Layout from '@/components/layouts/Layout'
import Contenedor_agregar_mascota from '@/components/contenedores/Contenedor_agregar_mascota'

export default function index() {
	return (
		<Layout title="Datos Personales - Autoafiliacion" bg={1}>
			<Contenedor_agregar_mascota text="test" />
		</Layout>
	)
}
