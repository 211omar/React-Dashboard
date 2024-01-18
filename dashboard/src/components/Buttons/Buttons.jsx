import styled from 'styled-components'

export const ButtonPrimary = styled.button`
display: flex;
width: 392px;
padding: 18px 16px;
justify-content: center;
align-items: center;
gap: 10px; 
border-radius:16px;
background-color:#1778fb;
color:#fff;
font-size:16px;
line-height:24px;
font-weight: 500; 
`
export const ButtonSecondary = styled.button`
font-size: 1.5em;
text-align: center;
color: #000;
background:red;
padding:1.5rem;
`


// const ButtonPrimary = ({children}) => {
//     return ( 
//         <>
//             <button>{children}</button>
//         </>
//      );
// }
 
// export default ButtonPrimary;