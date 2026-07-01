import { useState } from "react";
import {
  Search, Syringe, Activity, Flame, Ruler, LineChart, Apple,
  Users, GraduationCap, Stethoscope, ArrowUpRight, Menu, X
} from "lucide-react";
import "./HomePage.css";

/* ── SVG minh hoạ cho từng công cụ ── */
const IllusDrug = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <rect x="38" y="10" width="34" height="56" rx="17" fill="#BFE0F2"/>
    <rect x="38" y="10" width="34" height="28" rx="17" fill="#5B9BD5"/>
    <rect x="50" y="28" width="10" height="24" rx="5" fill="white" opacity="0.5"/>
    <circle cx="82" cy="68" r="14" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="2"/>
    <text x="82" y="73" textAnchor="middle" fontSize="13" fontWeight="700" fill="#5B9BD5">Rx</text>
    <circle cx="28" cy="60" r="10" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <line x1="28" y1="53" x2="28" y2="67" stroke="#5B9BD5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="21" y1="60" x2="35" y2="60" stroke="#5B9BD5" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IllusGFR = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <ellipse cx="42" cy="48" rx="18" ry="28" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="2"/>
    <ellipse cx="42" cy="48" rx="10" ry="18" fill="#5B9BD5" opacity="0.3"/>
    <path d="M42 30 Q52 38 52 48 Q52 58 42 66" stroke="#5B9BD5" strokeWidth="1.5" fill="none"/>
    <ellipse cx="70" cy="48" rx="15" ry="24" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="2"/>
    <ellipse cx="70" cy="48" rx="8" ry="15" fill="#5B9BD5" opacity="0.3"/>
    <text x="55" y="82" textAnchor="middle" fontSize="10" fill="#1F4E6B" fontWeight="600">GFR Schwartz</text>
  </svg>
);

const IllusEnergy = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <ellipse cx="55" cy="72" rx="28" ry="8" fill="#BFE0F2" opacity="0.6"/>
    <path d="M55 65 C55 65 35 50 38 32 C40 20 52 14 55 14 C58 14 70 20 72 32 C75 50 55 65 55 65Z" fill="#5B9BD5" opacity="0.25"/>
    <path d="M55 60 C55 60 40 48 43 33 C45 23 53 18 55 18 C57 18 65 23 67 33 C70 48 55 60 55 60Z" fill="#5B9BD5" opacity="0.5"/>
    <path d="M58 38 L50 52 L55 52 L52 65 L63 45 L57 45 Z" fill="#1F4E6B"/>
  </svg>
);

const IllusNutrition = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <ellipse cx="55" cy="62" rx="34" ry="10" fill="#BFE0F2" opacity="0.5"/>
    <path d="M22 56 Q22 36 55 36 Q88 36 88 56 Z" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <rect x="48" y="53" width="14" height="3" rx="1.5" fill="#5B9BD5"/>
    <circle cx="38" cy="44" r="7" fill="#5B9BD5" opacity="0.6"/>
    <circle cx="55" cy="40" r="8" fill="#5B9BD5" opacity="0.8"/>
    <circle cx="72" cy="44" r="6" fill="#5B9BD5" opacity="0.6"/>
    <path d="M55 30 Q57 22 62 20" stroke="#5B9BD5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="63" cy="19" r="3" fill="#5B9BD5"/>
  </svg>
);

const IllusAnthro = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <line x1="20" y1="75" x2="90" y2="75" stroke="#BFE0F2" strokeWidth="2"/>
    <line x1="20" y1="15" x2="20" y2="75" stroke="#BFE0F2" strokeWidth="2"/>
    <line x1="20" y1="75" x2="17" y2="75" stroke="#5B9BD5" strokeWidth="1.5"/>
    <line x1="20" y1="55" x2="17" y2="55" stroke="#5B9BD5" strokeWidth="1.5"/>
    <line x1="20" y1="35" x2="17" y2="35" stroke="#5B9BD5" strokeWidth="1.5"/>
    <circle cx="55" cy="22" r="8" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <line x1="55" y1="30" x2="55" y2="54" stroke="#5B9BD5" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="42" y1="40" x2="68" y2="40" stroke="#5B9BD5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="55" y1="54" x2="44" y2="70" stroke="#5B9BD5" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="55" y1="54" x2="66" y2="70" stroke="#5B9BD5" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="90" y1="72" x2="90" y2="78" stroke="#5B9BD5" strokeWidth="1.5"/>
    <text x="55" y="82" textAnchor="middle" fontSize="9" fill="#1F4E6B" fontWeight="600">BMI · WHO</text>
  </svg>
);

const IllusGrowth = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <line x1="18" y1="12" x2="18" y2="74" stroke="#BFE0F2" strokeWidth="2"/>
    <line x1="18" y1="74" x2="96" y2="74" stroke="#BFE0F2" strokeWidth="2"/>
    {[20,35,50,65,80].map((x,i) => <line key={i} x1={x} y1="70" x2={x} y2="76" stroke="#BFE0F2" strokeWidth="1.2"/>)}
    <path d="M20 68 C30 60 40 52 50 44 S65 32 80 22" stroke="#BFE0F2" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
    <path d="M20 72 C30 66 40 60 50 55 S65 46 80 38" stroke="#BFE0F2" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
    <path d="M20 70 Q35 58 50 48 T80 28" stroke="#5B9BD5" strokeWidth="2.5" fill="none"/>
    <circle cx="20" cy="70" r="3" fill="#5B9BD5"/>
    <circle cx="50" cy="48" r="3" fill="#5B9BD5"/>
    <circle cx="80" cy="28" r="4" fill="#1F4E6B"/>
  </svg>
);

const toolIllus = [IllusDrug, IllusGFR, IllusEnergy, IllusNutrition, IllusAnthro, IllusGrowth];

const tools = [
  { icon: Syringe, name: "Tính liều thuốc", desc: "Liều theo cân nặng, theo mg/kg và khoảng an toàn", tag: "Lâm sàng" },
  { icon: Activity, name: "Tính GFR ước tính", desc: "Đánh giá chức năng thận theo công thức Schwartz", tag: "Lâm sàng" },
  { icon: Flame, name: "Nhu cầu năng lượng", desc: "Calo khuyến nghị theo tuổi, cân nặng, mức hoạt động", tag: "Dinh dưỡng" },
  { icon: Apple, name: "Dinh dưỡng theo giai đoạn", desc: "Khẩu phần ăn gợi ý từ sơ sinh đến tuổi học đường", tag: "Dinh dưỡng" },
  { icon: Ruler, name: "Chỉ số nhân trắc", desc: "BMI, cân nặng/chiều cao theo chuẩn WHO", tag: "Đánh giá" },
  { icon: LineChart, name: "Theo dõi tăng trưởng", desc: "Vẽ và lưu biểu đồ phát triển của trẻ theo thời gian", tag: "Theo dõi" },
];

/* ── SVG minh hoạ cho đối tượng ── */
const IllusParent = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
    {/* parent */}
    <circle cx="52" cy="32" r="16" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <circle cx="52" cy="32" r="9" fill="#5B9BD5" opacity="0.4"/>
    <path d="M28 90 C28 70 76 70 76 90 L76 110 L28 110 Z" fill="#BFE0F2"/>
    <path d="M33 78 Q52 68 71 78" stroke="#5B9BD5" strokeWidth="1.5" fill="none"/>
    {/* child */}
    <circle cx="95" cy="50" r="11" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="1.5"/>
    <path d="M78 100 C78 84 112 84 112 100 L112 115 L78 115 Z" fill="#E8F3FB"/>
    {/* connecting hand */}
    <line x1="74" y1="82" x2="80" y2="88" stroke="#5B9BD5" strokeWidth="2.5" strokeLinecap="round"/>
    {/* heart */}
    <path d="M70 44 C70 40 64 38 64 44 C64 48 70 52 70 52 C70 52 76 48 76 44 C76 38 70 40 70 44Z" fill="#5B9BD5" opacity="0.7"/>
  </svg>
);

const IllusTeacher = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
    <rect x="25" y="40" width="90" height="60" rx="6" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="1.5"/>
    <rect x="35" y="52" width="70" height="5" rx="2.5" fill="#BFE0F2"/>
    <rect x="35" y="62" width="55" height="5" rx="2.5" fill="#BFE0F2"/>
    <rect x="35" y="72" width="65" height="5" rx="2.5" fill="#BFE0F2"/>
    <rect x="35" y="82" width="40" height="5" rx="2.5" fill="#BFE0F2"/>
    <circle cx="100" cy="28" r="14" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <circle cx="100" cy="28" r="7" fill="#5B9BD5" opacity="0.5"/>
    <line x1="88" y1="40" x2="100" y2="95" stroke="#5B9BD5" strokeWidth="1.5" strokeDasharray="3 3"/>
    {/* pencil */}
    <rect x="28" y="18" width="7" height="22" rx="3" transform="rotate(-30 28 18)" fill="#5B9BD5"/>
    <polygon points="22,36 28,40 27,33" fill="#1F4E6B"/>
  </svg>
);

const IllusMedical = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
    {/* clipboard */}
    <rect x="30" y="30" width="80" height="80" rx="8" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="1.5"/>
    <rect x="50" y="22" width="40" height="16" rx="8" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <rect x="42" y="52" width="56" height="5" rx="2.5" fill="#BFE0F2"/>
    <rect x="42" y="64" width="44" height="5" rx="2.5" fill="#BFE0F2"/>
    <rect x="42" y="76" width="50" height="5" rx="2.5" fill="#BFE0F2"/>
    {/* cross */}
    <rect x="53" y="86" width="14" height="5" rx="2" fill="#5B9BD5"/>
    <rect x="57" y="82" width="6" height="13" rx="2" fill="#5B9BD5"/>
    {/* stethoscope hint */}
    <path d="M94 60 Q105 60 105 72 Q105 84 95 84" stroke="#5B9BD5" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="95" cy="86" r="4" fill="#5B9BD5"/>
  </svg>
);

const audiences = [
  { icon: Users, title: "Phụ huynh", Illus: IllusParent, desc: "Hiểu đúng các mốc phát triển, theo dõi sức khỏe con tại nhà mà không hoang mang trước hàng trăm nguồn thông tin trái chiều." },
  { icon: GraduationCap, title: "Giáo viên mầm non", Illus: IllusTeacher, desc: "Nhận biết sớm dấu hiệu bất thường, xử trí tình huống thường gặp và phối hợp với phụ huynh hiệu quả hơn." },
  { icon: Stethoscope, title: "Nhân viên y tế", Illus: IllusMedical, desc: "Công cụ tính toán nhanh, có dẫn nguồn, hỗ trợ ra quyết định lâm sàng tại tuyến cơ sở." },
];

/* ── SVG minh hoạ bài viết ── */
const IllusNewborn = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
    <ellipse cx="60" cy="75" rx="38" ry="12" fill="#BFE0F2" opacity="0.4"/>
    <rect x="22" y="48" width="76" height="36" rx="18" fill="#BFE0F2"/>
    <circle cx="60" cy="36" r="18" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="1.5"/>
    <circle cx="54" cy="34" r="2.5" fill="#1F4E6B"/>
    <circle cx="66" cy="34" r="2.5" fill="#1F4E6B"/>
    <path d="M54 42 Q60 46 66 42" stroke="#5B9BD5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M22 58 Q14 52 16 44 Q18 38 24 40" stroke="#5B9BD5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M98 58 Q106 52 104 44 Q102 38 96 40" stroke="#5B9BD5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <text x="60" y="97" textAnchor="middle" fontSize="9" fill="#1F4E6B" fontWeight="600">Sơ sinh</text>
  </svg>
);

const IllusFood = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
    <ellipse cx="60" cy="65" rx="36" ry="11" fill="#BFE0F2" opacity="0.5"/>
    <path d="M26 58 Q26 34 60 34 Q94 34 94 58 Z" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <circle cx="44" cy="46" r="8" fill="#5B9BD5" opacity="0.5"/>
    <circle cx="60" cy="42" r="9" fill="#5B9BD5" opacity="0.7"/>
    <circle cx="76" cy="46" r="7" fill="#5B9BD5" opacity="0.5"/>
    <rect x="54" y="55" width="12" height="3" rx="1.5" fill="#5B9BD5"/>
    <line x1="60" y1="22" x2="60" y2="34" stroke="#5B9BD5" strokeWidth="1.5"/>
    <path d="M52 22 Q60 16 68 22" stroke="#5B9BD5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <text x="60" y="83" textAnchor="middle" fontSize="9" fill="#1F4E6B" fontWeight="600">Ăn dặm</text>
  </svg>
);

const IllusVaccine = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
    <rect x="50" y="18" width="20" height="44" rx="10" fill="#BFE0F2" stroke="#5B9BD5" strokeWidth="1.5"/>
    <rect x="50" y="18" width="20" height="20" rx="10" fill="#5B9BD5" opacity="0.5"/>
    <rect x="58" y="36" width="4" height="20" rx="2" fill="white" opacity="0.6"/>
    <line x1="60" y1="62" x2="60" y2="76" stroke="#5B9BD5" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="46" y1="30" x2="74" y2="30" stroke="#5B9BD5" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="46" y1="24" x2="74" y2="24" stroke="#5B9BD5" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="60" cy="80" r="4" fill="#5B9BD5"/>
    {[30,50,70].map((x,i) => (
      <g key={i}>
        <rect x={x-4} y="85" width="8" height="10" rx="2" fill="#E8F3FB" stroke="#5B9BD5" strokeWidth="1"/>
        <line x1={x} y1="85" x2={x} y2="82" stroke="#5B9BD5" strokeWidth="1"/>
      </g>
    ))}
    <text x="60" y="100" textAnchor="middle" fontSize="9" fill="#1F4E6B" fontWeight="600">Tiêm chủng 2026</text>
  </svg>
);

const articles = [
  { Illus: IllusNewborn, cat: "Sơ sinh", title: "Vàng da sơ sinh: khi nào cần lo lắng?", time: "6 phút đọc" },
  { Illus: IllusFood, cat: "Dinh dưỡng", title: "Ăn dặm kiểu Nhật và kiểu BLW: nên chọn gì?", time: "8 phút đọc" },
  { Illus: IllusVaccine, cat: "Tiêm chủng", title: "Lịch tiêm chủng mở rộng cập nhật 2026", time: "5 phút đọc" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="tvnk">
      {/* ---------- HEADER ---------- */}
      <header className="tvnk-header">
        <div className="tvnk-header-inner">
          <a href="#" className="tvnk-logo">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M2 22 C 8 22, 8 8, 14 8 S 20 22, 26 22" stroke="#5B9BD5" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
              <circle cx="14" cy="8" r="2.2" fill="#1F4E6B"/>
            </svg>
            <span className="tvnk-logo-text">Thư Viện <span>Nhi Khoa</span></span>
          </a>

          <nav className="tvnk-nav">
            <a href="#kien-thuc">Kiến thức</a>
            <a href="#cong-cu">Công cụ</a>
            <a href="#tang-truong">Theo dõi tăng trưởng</a>
            <a href="#doi-tuong">Dành cho bạn</a>
          </nav>

          <div className="tvnk-header-actions">
            <button className="tvnk-btn-ghost">Đăng nhập</button>
            <button className="tvnk-btn-primary">Bắt đầu theo dõi</button>
          </div>

          <button className="tvnk-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="tvnk-mobile-nav" style={{ display: "flex" }}>
            <a href="#kien-thuc">Kiến thức</a>
            <a href="#cong-cu">Công cụ</a>
            <a href="#tang-truong">Theo dõi tăng trưởng</a>
            <a href="#doi-tuong">Dành cho bạn</a>
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section className="tvnk-hero">
        <svg className="tvnk-hero-svg" viewBox="0 0 1200 520" preserveAspectRatio="none">
          <path d="M -20 470 C 150 470, 220 420, 300 380 S 420 260, 520 220 S 650 120, 760 90 S 950 40, 1220 30"
                stroke="#5B9BD5" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M -20 500 C 180 500, 240 460, 340 430 S 480 330, 580 300 S 720 220, 820 190 S 1000 110, 1220 90"
                stroke="#BFE0F2" strokeWidth="2" fill="none" opacity="0.7"/>
          <path d="M -20 440 C 130 440, 200 380, 280 330 S 400 200, 500 160 S 630 70, 740 45 S 940 0, 1220 -10"
                stroke="#1F4E6B" strokeWidth="2.5" fill="none" opacity="0.4"/>
          <circle cx="520" cy="220" r="5" fill="#5B9BD5"/>
          <circle cx="760" cy="90" r="5" fill="#5B9BD5"/>
        </svg>

        <div className="tvnk-hero-inner">
          <span className="tvnk-eyebrow">Kiến thức & công cụ nhi khoa</span>
          <h1 className="tvnk-h1">
            Mỗi đường cong tăng trưởng
            <br />
            <em>kể một câu chuyện</em> riêng.
          </h1>
          <p className="tvnk-lead">
            Kiến thức nhi khoa được kiểm chứng cho phụ huynh, giáo viên và nhân viên y tế —
            cùng bộ công cụ tính liều thuốc, GFR, năng lượng và theo dõi sự phát triển của trẻ, ngay trên một trang.
          </p>

          <div className="tvnk-search-row">
            <div className="tvnk-search-box">
              <Search size={18} color="#1F4E6B88" />
              <input placeholder="Tìm bài viết hoặc công cụ, ví dụ: sốt co giật…" />
            </div>
            <button className="tvnk-search-btn">Tìm kiếm</button>
          </div>

          <div className="tvnk-chip-row">
            {audiences.map((a) => (
              <span key={a.title} className="tvnk-chip">
                <a.icon size={15} color="#5B9BD5" /> {a.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TOOLS ---------- */}
      <section id="cong-cu" className="tvnk-section">
        <div className="tvnk-section-head">
          <div>
            <span className="tvnk-section-eyebrow">Công cụ y khoa</span>
            <h2 className="tvnk-section-title">Tính toán nhanh, đúng chuẩn</h2>
          </div>
          <a href="#" className="tvnk-section-link">Xem tất cả công cụ <ArrowUpRight size={16} /></a>
        </div>

        <div className="tvnk-tools-grid">
          {tools.map((t, i) => {
            const Illus = toolIllus[i];
            return (
              <a key={t.name} href="#" className="tvnk-tool-card">
                <div className="tvnk-tool-illus"><Illus /></div>
                <div className="tvnk-tool-body">
                  <div className="tvnk-tool-top">
                    <div className="tvnk-tool-icon"><t.icon size={20} /></div>
                    <span className="tvnk-tool-tag">{t.tag}</span>
                  </div>
                  <h3 className="tvnk-tool-name">{t.name}</h3>
                  <p className="tvnk-tool-desc">{t.desc}</p>
                  <span className="tvnk-tool-cta">Mở công cụ <ArrowUpRight size={14} /></span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ---------- AUDIENCE ---------- */}
      <section id="doi-tuong" className="tvnk-audience-section">
        <div className="tvnk-section">
          <span className="tvnk-section-eyebrow">Dành cho bạn</span>
          <h2 className="tvnk-section-title" style={{ marginBottom: 40 }}>Mỗi vai trò, một cách tiếp cận</h2>
          <div className="tvnk-audience-grid">
            {audiences.map((a) => (
              <div key={a.title} className="tvnk-audience-card">
                <div className="tvnk-audience-illus"><a.Illus /></div>
                <div className="tvnk-audience-body">
                  <a.icon size={22} color="#5B9BD5" />
                  <h3 className="tvnk-audience-title">{a.title}</h3>
                  <p className="tvnk-audience-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ARTICLES ---------- */}
      <section id="kien-thuc" className="tvnk-section">
        <div className="tvnk-section-head">
          <div>
            <span className="tvnk-section-eyebrow">Kiến thức nhi khoa</span>
            <h2 className="tvnk-section-title">Bài viết nổi bật</h2>
          </div>
          <a href="#" className="tvnk-section-link">Xem thư viện bài viết <ArrowUpRight size={16} /></a>
        </div>
        <div className="tvnk-articles-grid">
          {articles.map((a) => (
            <a key={a.title} href="#" className="tvnk-article-card">
              <div className="tvnk-article-illus"><a.Illus /></div>
              <div className="tvnk-article-body">
                <span className="tvnk-article-cat">{a.cat}</span>
                <h3 className="tvnk-article-title">{a.title}</h3>
                <span className="tvnk-article-time">{a.time}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- GROWTH TRACKER CTA ---------- */}
      <section id="tang-truong" className="tvnk-cta-section">
        <svg className="tvnk-cta-svg" viewBox="0 0 1200 360" preserveAspectRatio="none">
          <path d="M -20 320 C 150 320, 220 250, 320 200 S 460 90, 600 60 S 800 10, 1220 0"
                stroke="#BFE0F2" strokeWidth="2" fill="none" opacity="0.7"/>
          <circle cx="600" cy="60" r="5" fill="#BFE0F2"/>
        </svg>
        <div className="tvnk-cta-inner">
          <div>
            <h2 className="tvnk-cta-title">Lưu lại từng mốc phát triển của con</h2>
            <p className="tvnk-cta-text">
              Nhập cân nặng, chiều cao theo từng lần khám — hệ thống tự vẽ biểu đồ percentile theo chuẩn WHO
              và cảnh báo khi có dấu hiệu lệch chuẩn.
            </p>
          </div>
          <button className="tvnk-cta-btn">Tạo hồ sơ tăng trưởng miễn phí</button>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="tvnk-footer">
        <div className="tvnk-footer-logo">
          <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
            <path d="M2 22 C 8 22, 8 8, 14 8 S 20 22, 26 22" stroke="#5B9BD5" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="8" r="2.2" fill="#1F4E6B"/>
          </svg>
          Thư Viện Nhi Khoa
        </div>
        <p>© 2026 Thư Viện Nhi Khoa. Thông tin mang tính tham khảo, không thay thế chẩn đoán của bác sĩ.</p>
      </footer>
    </div>
  );
}