// import React from 'react';
// import styled from "styled-components";
// import ManIcon from "../assests/man.png";
// import WomanIcon from "../assests/woman.png"

// const Container = styled.div `
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   align-items: center;
// `;

// const InternalContainer = styled.div `
//   background: white;
//   color: black;
//   border-radius: 25px;
//   width: 600px;
//   padding: 0.5em;
// `;

// const Top = styled.div `
//   display: flex;
//   gap: 0.5em;
//   padding-bottom: 0.5em;
//   border-bottom: 0.5px solid black;
// `;

// const ImageContainer = styled.div ``;

// const ImageIcon = styled.img ``;

// const NameContainer = styled.div `
//   display: flex;
//   flex-direction: column;
// `;

// const Name = styled.span `
//   font-weight: bold;
//   font-size: 1.1rem;
// `;

// const Relation = styled.span ``;

// const Bottom = styled.div ``;

// const BottomText = styled.p `
//   font-size: 0.8rem;
//   white-space: pre-line;
//   text-align: justify;
//   text-justify: inter-word;
// `;

// const TestimonialCard = ({ gender, name, relation, text }) => {
//     return (
//         <Container>
//             <InternalContainer>
//                 <Top>
//                     <ImageContainer>
//                         {
//                             gender === 'man' ?
//                                 <ImageIcon src={ManIcon}/>
//                                 : <ImageIcon src={WomanIcon}/>
//                         }
//                     </ImageContainer>
//                     <NameContainer>
//                         <Name>{name}</Name>
//                         <Relation>{relation}</Relation>
//                     </NameContainer>
//                 </Top>
//                 <Bottom>
//                     <BottomText style={{ whiteSpace: 'pre-line' }}>
//                         {text}
//                     </BottomText>
//                 </Bottom>
//             </InternalContainer>
//         </Container>
//     );
// };

// export default TestimonialCard;
