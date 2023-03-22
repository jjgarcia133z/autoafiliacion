import React from 'react'
import styled from 'styled-components'

// import IconLefCaret from '../../assets/img/icons/icon-outlines-28@2x.png'
const CMP10 = ({ name, status }) => {
	return (
		<Primary>
			
			<button className="comp-button font" disabled={status} >{name}</button>
		
		</Primary>
	)
}

export default CMP10

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
padding: 8px 48px;
gap: 8px;

position: absolute;
width: 130px;
height: 48px;
left: 534px;
top: 85px;
border: none;


background: #ffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}

.comp-button:hover {
  background: #E6EBEB;




  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;

position: absolute;
width: 130px;
height: 48px;
left: 534px;
top: 85px;


border-radius: 5px;


}
.comp-button:focus {

    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;

position: absolute;
width: 130px;
height: 48px;
left: 534px;
top: 85px;

background: #E6EBEB;;
border-radius: 5px;
color: #112145;


}
.comp-button:Disabled {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 48px;
gap: 8px;
color: #959B9B;
position: absolute;
width: 130px;
height: 48px;
left: 534px;
top: 85px;
background: #E6EBEB;;
border-radius: 5px;

}



`
