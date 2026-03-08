import Theme2TopBar from "@/components/theme2/Theme2TopBar";
import Theme2Header from "@/components/theme2/Theme2Header";
import Theme2Footer from "@/components/theme2/Theme2Footer";

export default function Theme2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Theme2TopBar />
      <Theme2Header />
      <main className="min-h-screen">{children}</main>
      <Theme2Footer />
    </>
  );
}
