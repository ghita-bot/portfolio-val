import ShinyText from "@/components/ShinyText";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <ShinyText>DENOVAL</ShinyText>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DENOVAL</span>

        <span>GRAPHIC DESIGN / VISUAL / CREATIVE</span>

        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}