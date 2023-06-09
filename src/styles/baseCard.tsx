import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 1.25rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonCard = styled(Card)`
  background-color: var(${(props) => props.theme});
  h2 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
  }
  img {
    width: 15rem;
    object-fit: contain;
  }
`;
