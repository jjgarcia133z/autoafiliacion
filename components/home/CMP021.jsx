import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = () => {
	return (
		<Primary>
			<div className="card-modal">
				<div className="overlap-group3">
					<div className="modal">
						<div className="group-37330">
							<div className="title-1 headlinesh3---radley-font-bold">Necesitamos validar tu cuenta</div>
							<a href="javascript:HideOverlay('componentes', 'animate-disappear');">
								<div className="icono-de-notificacin-5">
									{/* <img className="icon-outlines-1" src="img/icon-outlines-1.svg" alt="Icon Outlines"/> */}
									<Image className="icon-outlines-1" src="img/icon-outlines-1.svg" alt="Icon Outlines"/>
								</div></a>
						</div>
						<div className="componente-button-group">
							<article className="comp-button-3 comp-button-7">
								<div className="continuar-3 continuar-5 bodybody-medium----montserrat-medium">Cancelar</div>
							</article>
							<article className="comp-button">
								<div className="continuar continuar-5 bodybody-medium----montserrat-medium">Validar código</div>
							</article>
						</div>
					</div>
					<div className="frame-37336">
						<p className="subtitle-lorem-ips bodybody-large---montserrat-regular">
                          Ingresá el código de 6 dígitos que te enviaremos al medio de tu preferencia.
						</p>
						<div className="frame-37339">
							<div className="sms-email-verification">
								<p className="title bodybody-medium----montserrat-medium">
                              ¿Donde querés recibir el código de verificación?
								</p>
								<div className="frame-37337">
									<div className="buttons bodybody-medium----montserrat-medium">
										<div className="frame-37450">
											<div className="comp-button">
												<div className="icono-de-notificacin"></div>
												<div className="continuar continuar-5">Enviar por SMS</div>
											</div>
											<div className="text-xxx">Al número: 86*****3</div>
										</div>
										<div className="frame-37450">
											<div className="comp-button">
												<div className="icono-de-notificacin-1"></div>
												<div className="continuar continuar-5">Enviar por Email</div>
											</div>
											<div className="text-xxx">Al correo: Ef****il.com</div>
										</div>
									</div>
								</div>
							</div>
							{/* <img className="code-validation-group" src="img/code-validation-group.png" alt="Code validation group"/> */}
							<Image className="code-validation-group" src="img/code-validation-group.png" alt="Code validation group"/>
						</div>
					</div>
					<p className="text-link bodybody-small---montserrat-medium">
                        No he recibido el código, volver a enviarlo
					</p>
				</div>
			</div>
        





		</Primary>
	)
}

export default CMP10

const Primary = styled.div`
  .componentes .card-modal {
    align-items: flex-start;
    display: flex;
    min-width: 798px;
}
.overlap-group3 {
    border-radius: 10px;
    height: 738px;
    position: relative;
    width: 798px;
}
.componentes .modal {
    align-items: center;
    background-color: #ffffff;
    border: 1px solid;
    border-color:#c0c8c8;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #c0c8d640;
    display: flex;
    flex-direction: column;
    gap: 551px;
    left: 0;
    min-height: 738px;
    padding: 45px 0;
    position: absolute;
    top: 0;
    width: 798px;
}
.group-37330 {
    align-items: flex-start;
    display: flex;
    gap: 8px;
    height: 48px;
    min-width: 708px;
}
.title-1 {
    color: #112145;
    font-weight: 400;
    line-height: 48px;
    white-space: nowrap;
    width: 674px;
}
.componente-button-group {
    align-items: center;
    display: flex;
    gap: 24px;
    justify-content: center;
    position: relative;
    width: fit-content;
}
.headlinesh3---radley-font-bold {
    font-family: "Radley", Helvetica;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
}
.componente-button-group {
    align-items: center;
    display: flex;
    gap: 24px;
    justify-content: center;
    position: relative;
    width: fit-content;
}
`
