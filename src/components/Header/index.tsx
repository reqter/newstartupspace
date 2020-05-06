import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { withTranslation, Link } from "../../../config/Next18Wrapper";
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
  const router = useRouter();
  const [isSticky, setSticky] = useState<boolean>(
    typeof window !== "undefined" && window.pageYOffset < 45 ? false : true
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset < 45) setSticky(false);
      else setSticky(true);
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
          <MenuItem selected={router.pathname === "/"} isSticky={isSticky}>
            <Link href={`/`}>
              <a>{t("HEADER_MENU_ONE")}</a>
            </Link>
          </MenuItem>
          <MenuItem
            selected={router.pathname === `/spaces`}
            isSticky={isSticky}
          >
            <Link href={`/spaces`}>
              <a>{t("HEADER_MENU_SECOND")}</a>
            </Link>
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
