import styled from "styled-components";
import Icon from "../module/Icon";

export const HEADER_HEIGHT = 70;

type HeaderProps = {
  isAdmin?: boolean;
};

const Header = ({ isAdmin }: HeaderProps) => {
  return (
    <HeaderContainer isAdmin={isAdmin}>
      <HeaderWrapper>
        <Img
          src="/logo/banLogo.svg"
          alt="logn"
          onClick={() => {
            window.location.href = "/regis/0";
          }}
        />
        <HeaderLeft>
          <Icon icon="mail" />
          <Icon icon="alert" />
          {isAdmin ? (
            <UserName>Admin</UserName>
          ) : (
            <UserName>게스트 님</UserName>
          )}

          <Icon icon="user" />
        </HeaderLeft>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{
  isAdmin?: boolean;
}>`
  display: flex;
  flex-direction: row;
  min-height: ${HEADER_HEIGHT}px;

  align-items: center;
  background-color: #132533;
  ${({ isAdmin }) => isAdmin && `background-color: #3a3a3a;`}

  padding: 0 4rem;

  font-size: 2rem;
  font-weight: bold;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  > div {
    color: white;
    font-size: 1.3rem;
  }
`;

const Img = styled.img`
  height: 50px;
  margin-right: 10px;

  cursor: pointer;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin: 0 10px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;
