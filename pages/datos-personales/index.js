import Layout from '@/components/layouts/Layout'
import Contenedor_datos_personales from '@/components/contenedores/Contenedor_datos_personales'

export default function index() {
	return (
		
		<Layout title="Datos Personales - Autoafiliacion" bg={1}>
			<Contenedor_datos_personales text="test" />
		</Layout>
		
	)
}
