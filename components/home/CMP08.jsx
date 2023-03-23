import React from 'react'
import styled from 'styled-components'

// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP08 = ({ name, status }) => {
	return (
		<Primary>
			
			<button className="comp-button font" disabled={status} >{name}</button>
			
		</Primary>
	)
}

export default CMP08

const Primary = styled.div`


.font{


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #112145;

flex: none;
order: 1;
flex-grow: 0;





}






.comp-button {
 /* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 48px;
gap: 8px;
width: 130px;
height: 48px;
border: none;


background: #00AFA1;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}

.comp-button:hover {
  background:#86C5BD;




  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;
width: 130px;
height: 48px;


background: #86C5BD;
border-radius: 5px;


}
.comp-button:focus {

    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;
width: 130px;
height: 48px;

background: #008271;
border-radius: 5px;
color: #FFFFFF;


}
.comp-button:Disabled {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;
color: #009382;
width: 130px;
height: 48px;

/* Primary Green/Primary - Green 100 */

background: #CBE6E3;
border-radius: 5px;

}
.comp-button::active {
    

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;
width: 130px;
height: 48px;

background: #008271;

border-radius: 5px;   

color: #FFFFFF;
 }



`
