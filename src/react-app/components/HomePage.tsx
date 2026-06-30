import { useState } from "react";
import {
  Search, Syringe, Activity, Flame, Ruler, LineChart, Apple,
  Users, GraduationCap, Stethoscope, ArrowUpRight, Menu, X
} from "lucide-react";
import "./HomePage.css";

const tools = [
  { icon: Syringe, name: "Tính liều thuốc", desc: "Liều theo cân nặng, theo mg/kg và khoảng an toàn", tag: "Lâm sàng" },
  { icon: Activity, name: "Tính GFR ước tính", desc: "Đánh giá chức năng thận theo công thức Schwartz", tag: "Lâm sàng" },
  { icon: Flame, name: "Nhu cầu năng lượng", desc: "Calo khuyến nghị theo tuổi, cân nặng, mức hoạt động", tag: "Dinh dưỡng" },
  { icon: Apple, name: "Dinh dưỡng theo giai đoạn", desc: "Khẩu phần ăn gợi ý từ sơ sinh đến tuổi học đường", tag: "Dinh dưỡng" },
  { icon: Ruler, name: "Chỉ số nhân trắc", desc: "BMI, cân nặng/chiều cao theo chuẩn WHO", tag: "Đánh giá" },
  { icon: LineChart, name: "Theo dõi tăng trưởng", desc: "Vẽ và lưu biểu đồ phát triển của trẻ theo thời gian", tag: "Theo dõi" },
];

const audiences = [
  { icon: Users, title: "Phụ huynh", desc: "Hiểu đúng các mốc phát triển, theo dõi sức khỏe con tại nhà mà không hoang mang trước hàng trăm nguồn thông tin trái chiều." },
  { icon: GraduationCap, title: "Giáo viên mầm non", desc: "Nhận biết sớm dấu hiệu bất thường, xử trí tình huống thường gặp và phối hợp với phụ huynh hiệu quả hơn." },
  { icon: Stethoscope, title: "Nhân viên y tế", desc: "Công cụ tính toán nhanh, có dẫn nguồn, hỗ trợ ra quyết định lâm sàng tại tuyến cơ sở." },
];

const articles = [
  { cat: "Sơ sinh", title: "Vàng da sơ sinh: khi nào cần lo lắng?", time: "6 phút đọc" },
  { cat: "Dinh dưỡng", title: "Ăn dặm kiểu Nhật và kiểu BLW: nên chọn gì?", time: "8 phút đọc" },
  { cat: "Tiêm chủng", title: "Lịch tiêm chủng mở rộng cập nhật 2026", time: "5 phút đọc" },
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
          {tools.map((t) => (
            <a key={t.name} href="#" className="tvnk-tool-card">
              <div className="tvnk-tool-top">
                <div className="tvnk-tool-icon"><t.icon size={20} /></div>
                <span className="tvnk-tool-tag">{t.tag}</span>
              </div>
              <h3 className="tvnk-tool-name">{t.name}</h3>
              <p className="tvnk-tool-desc">{t.desc}</p>
              <span className="tvnk-tool-cta">Mở công cụ <ArrowUpRight size={14} /></span>
            </a>
          ))}
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
                <a.icon size={24} color="#5B9BD5" />
                <h3 className="tvnk-audience-title">{a.title}</h3>
                <p className="tvnk-audience-desc">{a.desc}</p>
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
              <span className="tvnk-article-cat">{a.cat}</span>
              <h3 className="tvnk-article-title">{a.title}</h3>
              <span className="tvnk-article-time">{a.time}</span>
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