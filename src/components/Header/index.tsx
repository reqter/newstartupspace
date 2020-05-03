import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { withTranslation } from "../../../config/Next18Wrapper";
import {
  Wrapper,
  Content,
  Logo,
  Menu,
  MenuItem,
  Button,
  SearchIcon,
} from "./styles";
interface IProps {
  t: (key: string) => {};
}
const Header: React.FC<IProps> = ({ t }): JSX.Element => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset < 45) {
        setSticky(false);
      } else {
        setSticky(true);
        // if (ref.current) {
        //   setSticky(ref.current.getBoundingClientRect().top <= 0);
        // }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Wrapper isSticky={isSticky}>
      <Content>
        {isSticky ? (
          <Logo src="/images/logo1.png" />
        ) : (
          <Logo src="/images/logo.png" />
        )}

        <Menu>
          <MenuItem selected={true} isSticky={isSticky}>
            <Link href="/">{t("HEADER_MENU_ONE")}</Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <Link href="/">{t("HEADER_MENU_SECOND")}</Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <Link href="/">{t("HEADER_MENU_FOURTH")}</Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <Link href="/">{t("HEADER_MENU_FIFTH")}</Link>
          </MenuItem>
          <MenuItem isSticky={isSticky}>
            <Link href="/">{t("HEADER_MENU_SIXTH")}</Link>
          </MenuItem>
        </Menu>
        <Button>+{t("HEADER_BUTTON_TITLE")}</Button>
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default withTranslation("header")(Header);
