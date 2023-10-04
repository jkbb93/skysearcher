import SiteHeader from "./SiteHeader";
import PageContentWrapper from "./PageContentWrapper";
import SiteFooter from "./SiteFooter";

function RootLayout({ children, onHeaderLogoClick: handleHeaderLogoClick }) {
  return (
    <>
      <SiteHeader onLogoClick={handleHeaderLogoClick} />
      <PageContentWrapper>{children}</PageContentWrapper>
      <SiteFooter />
    </>
  );
}

export default RootLayout;
