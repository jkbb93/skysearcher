import SiteHeader from "./SiteHeader";
import PageContentWrapper from "./PageContentWrapper";
import SiteFooter from "./SiteFooter";

function RootLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <PageContentWrapper>{children}</PageContentWrapper>
      <SiteFooter />
    </>
  );
}

export default RootLayout;
