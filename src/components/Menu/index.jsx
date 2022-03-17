import P from "prop-types";
import { useState } from "react";
import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { Navlinks } from "../Navlinks";
import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

export function Menu({ links = [], logoData }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Styled.MenuButton
        visible={menuVisible}
        onClick={() => setMenuVisible((visible) => !visible)}
        aria-label="Open/Close menu"
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.MenuButton>
      <Styled.Container
        visible={menuVisible}
        onClick={() => setMenuVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <Navlinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...Navlinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
