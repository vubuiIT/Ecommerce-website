import HeaderHomepage from "@/component/layout/homepage.header";

export default function HomepageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="homepagecontainer">
            <div className="header">
                <HeaderHomepage/>
            </div>
        </div>
            // {children}
    );
  }
  