import styled from 'styled-components'
import { NONAME } from 'dns';


const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: RTCDtlsTransportStateChangedEvent;
border: 0.05rem solid var(--LightBlue);
padding: 0.2rem 0.5rem;
cursor:Pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--LightBlue);
    color: var(--mainBlue);
}
&:focus{
    outline: none;

}
`;