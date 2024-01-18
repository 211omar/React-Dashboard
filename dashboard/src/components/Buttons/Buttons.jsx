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
display: flex;
width: 392px;
padding: 18px 16px;
justify-content: center;
align-items: center;
gap: 10px; 
border-radius:16px;
background-color:#e8f2ff;
color:#1778fb;
font-size:16px;
line-height:24px;
font-weight: 500; 
`


// const ButtonPrimary = ({children}) => {
//     return ( 
//         <>
//             <button>{children}</button>
//         </>
//      );
// }
 
// export default ButtonPrimary;