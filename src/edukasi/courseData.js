export const courseData = {
  1: {
    id: 1,
    title: "HTML Basics",
    category: "Frontend",
    description: "Belajar dasar HTML untuk membangun struktur website.",
    modules: [
      {
        title: "Modul 1: Pengenalan HTML",
        submodules: [
          {
            title: "Sejarah HTML",
            content: "HTML dikembangkan untuk membuat struktur web.",
          },
          {
            title: "Struktur Dasar HTML",
            content: "HTML, head, body, tag dasar.",
          },
          { title: "Heading & Paragraph", content: "<h1>–<h6>, <p>" },
          {
            title: "Link & Anchor",
            content: "<a href=''>Link eksternal dan internal</a>",
          },
          { title: "Image & Media", content: "<img>, audio, video" },
          { title: "Form Dasar", content: "<input>, <label>, <button>" },
          { title: "Table", content: "<table>, <tr>, <td>, <th>" },
          { title: "List", content: "<ul>, <ol>, <li>" },
          {
            title: "Semantic HTML",
            content: "<header>, <section>, <article>, <footer>",
          },
          {
            title: "HTML5 New Features",
            content: "Canvas, video, audio, semantic tags",
          },
          {
            title: "Tips & Best Practice",
            content: "Gunakan semantic HTML, validasi tag, struktur rapi",
          },
        ],
        exercises: [
          "Buat halaman profil sederhana",
          "Tambahkan gambar dan link",
          "Buat form kontak sederhana",
          "Buat list hobi dan table data",
        ],
        miniProject:
          "Buat halaman portfolio sederhana lengkap dengan form, gambar, dan list",
      },
      {
        title: "Modul 2: HTML Lanjutan",
        submodules: [
          { title: "Meta Tag", content: "SEO, charset, viewport" },
          {
            title: "Form Lanjutan",
            content: "Select, radio, checkbox, textarea",
          },
          {
            title: "Input Validation",
            content: "required, pattern, type=email/number",
          },
          { title: "Iframe & Embed", content: "Menampilkan konten eksternal" },
          {
            title: "Audio & Video Controls",
            content: "Autoplay, loop, controls",
          },
          { title: "HTML Entities", content: "&copy;, &nbsp;, &lt;" },
          {
            title: "Tips",
            content:
              "Gunakan alt untuk gambar, label untuk input, struktur semantik",
          },
        ],
        exercises: [
          "Buat form registrasi lengkap",
          "Tambahkan video dengan controls",
          "Buat halaman test SEO meta tag",
        ],
        miniProject:
          "Buat halaman blog statis lengkap dengan media, form, dan list artikel",
      },
      // Modul 3–5 akan lebih panjang, tapi saya buatkan sama format
    ],
  },

  2: {
    id: 2,
    title: "CSS Grid",
    category: "Frontend",
    description: "Belajar layout modern menggunakan CSS Grid.",
    modules: [
      {
        title: "Modul 1: Pengenalan CSS Grid",
        submodules: [
          { title: "Apa itu CSS Grid", content: "Layout 2D modern untuk web" },
          {
            title: "Grid Container",
            content: "display: grid, grid-template-columns, grid-template-rows",
          },
          { title: "Grid Item", content: "Positioning, span, start/end" },
          {
            title: "Gap & Alignment",
            content: "grid-gap, justify-items, align-items",
          },
          {
            title: "Implicit & Explicit Grid",
            content: "Mengatur baris/kolom otomatis vs manual",
          },
          {
            title: "Tips & Best Practice",
            content: "Gunakan naming yang jelas, responsive design",
          },
        ],
        exercises: [
          "Buat grid 3x3",
          "Atur gap dan alignment",
          "Gunakan span untuk item lebih besar",
        ],
        miniProject: "Buat layout landing page sederhana dengan CSS Grid",
      },
    ],
  },

  3: {
    id: 3,
    title: "JavaScript",
    category: "Frontend",
    description: "Belajar JavaScript untuk web interaktif.",
    modules: [
      {
        title: "Modul 1: Pengenalan JS",
        submodules: [
          {
            title: "Sejarah JS",
            content: "JavaScript dikembangkan untuk membuat web interaktif",
          },
          { title: "Syntax Dasar", content: "Variable, tipe data, operator" },
          { title: "Function", content: "Deklarasi function, arrow function" },
          { title: "Array & Object", content: "Manipulasi data, looping" },
          {
            title: "DOM Manipulation",
            content: "getElementById, querySelector, innerHTML",
          },
          { title: "Event Handling", content: "onClick, addEventListener" },
          {
            title: "Tips & Best Practice",
            content: "Gunakan let/const, hindari global scope",
          },
        ],
        exercises: [
          "Buat fungsi menambahkan angka",
          "Loop array dan tampilkan di console",
          "Ubah konten DOM saat tombol diklik",
        ],
        miniProject: "Buat todo list interaktif dengan add & remove task",
      },
    ],
  },

  4: {
    id: 4,
    title: "React JS",
    category: "Frontend",
    description: "React untuk web interaktif",
    modules: [
      {
        title: "Modul 1: Pengenalan React",
        submodules: [
          { title: "Apa itu React", content: "Library JS untuk UI interaktif" },
          { title: "JSX", content: "Sintaks mirip HTML untuk component" },
          {
            title: "Functional Component",
            content: "Component modern dengan hooks",
          },
          {
            title: "Class Component",
            content: "Component klasik dengan lifecycle",
          },
          {
            title: "Props & State",
            content: "Mengirim data & simpan data lokal",
          },
          { title: "Event Handling", content: "onClick, onChange, onSubmit" },
          { title: "List & Key", content: "Render list dengan key unik" },
          {
            title: "Conditional Rendering",
            content: "Render berdasarkan state",
          },
          {
            title: "Tips & Best Practice",
            content: "Pisahkan logic & UI, gunakan reusable component",
          },
        ],
        exercises: [
          "Buat functional component sederhana",
          "Gunakan props untuk mengirim data",
          "Render list dengan key unik",
          "Buat conditional rendering berdasarkan state",
        ],
        miniProject:
          "Buat halaman profil lengkap dengan foto, deskripsi, dan hobi",
      },
    ],
  },

  // =======================
  // Course 5: Bootstrap
  // =======================
  5: {
    id: 5,
    title: "Bootstrap",
    category: "Framework",
    description: "Membuat UI cepat dan responsive",
    modules: [
      {
        title: "Modul 1: Pengenalan Bootstrap",
        submodules: [
          {
            title: "Apa itu Bootstrap",
            content: "Framework CSS untuk membuat UI responsive cepat",
          },
          {
            title: "Grid System",
            content: "12 columns grid, container, row, col",
          },
          {
            title: "Typography",
            content: "Heading, paragraph, text utilities",
          },
          {
            title: "Colors & Backgrounds",
            content: "Text color, background color, contextual classes",
          },
          {
            title: "Buttons & Button Groups",
            content: "Membuat tombol dan grup tombol",
          },
          { title: "Alerts & Badges", content: "Membuat notifikasi dan badge" },
          {
            title: "Forms Basic",
            content: "Form controls, labels, input types",
          },
          {
            title: "Tips Best Practice",
            content: "Gunakan container fluid untuk responsive design",
          },
        ],
        exercises: [
          "Buat layout 3 kolom menggunakan grid",
          "Tambahkan tombol & alert",
          "Buat form login sederhana",
        ],
        miniProject:
          "Buat landing page responsive dengan header, card produk, tombol CTA",
      },
      {
        title: "Modul 2: Components Lanjutan",
        submodules: [
          { title: "Navbar", content: "Responsive navbar dengan collapse" },
          { title: "Cards", content: "Membuat card product dan profile" },
          { title: "Modals", content: "Dialog box interaktif" },
          {
            title: "Dropdown & Navs",
            content: "Menu dropdown & navigation pills",
          },
          { title: "Carousel", content: "Slider gambar dengan control" },
          {
            title: "Tips",
            content: "Gunakan utilities untuk spacing, margin, padding",
          },
        ],
        exercises: [
          "Buat navbar responsive",
          "Tambahkan carousel di halaman",
          "Gunakan dropdown & navs untuk menu",
        ],
        miniProject:
          "Buat halaman produk lengkap dengan card, carousel, tombol beli",
      },
      {
        title: "Modul 3: Utilities & Responsive Design",
        submodules: [
          { title: "Spacing Utilities", content: "Margin, padding, gap" },
          { title: "Display Utilities", content: "d-none, d-flex, d-grid" },
          { title: "Flex & Grid", content: "Flexbox utilities untuk layout" },
          { title: "Responsive Breakpoints", content: "sm, md, lg, xl" },
          {
            title: "Visibility & Overflow",
            content: "Mengatur visibility & scroll",
          },
          {
            title: "Tips",
            content: "Gunakan responsive utilities untuk mobile first",
          },
        ],
        exercises: [
          "Buat layout grid responsive",
          "Gunakan flex utilities untuk card layout",
          "Uji responsive pada mobile & desktop",
        ],
        miniProject:
          "Buat halaman portfolio responsive dengan card & grid layout",
      },
      {
        title: "Modul 4: Forms & Interactions",
        submodules: [
          { title: "Form Validation", content: "validity, required, pattern" },
          {
            title: "Input Groups",
            content: "Form input dengan icon dan button",
          },
          {
            title: "Custom Checkboxes & Radios",
            content: "Styling form control",
          },
          {
            title: "Tooltips & Popovers",
            content: "Info tambahan dengan hover/click",
          },
          {
            title: "Collapse & Accordion",
            content: "Membuat konten collapsible",
          },
          {
            title: "Tips",
            content: "Gunakan proper aria-label untuk aksesibilitas",
          },
        ],
        exercises: [
          "Buat form registrasi dengan validation",
          "Tambahkan tooltip & popover di button",
          "Buat accordion FAQ",
        ],
        miniProject:
          "Buat halaman contact lengkap dengan form, validation, dan FAQ collapsible",
      },
      {
        title: "Modul 5: Project Bootstrap Lengkap",
        submodules: [
          {
            title: "Landing Page",
            content: "Header, hero section, cards, testimonial",
          },
          {
            title: "Navbar & Footer",
            content: "Responsive navigation dan footer",
          },
          { title: "Form & Modal", content: "Form contact, modal subscribe" },
          {
            title: "Carousel & Grid",
            content: "Menampilkan produk & portfolio",
          },
          {
            title: "Custom CSS & Utilities",
            content: "Overwrite class default untuk branding",
          },
          {
            title: "Tips",
            content:
              "Pisahkan custom CSS ke file tersendiri, gunakan class utilities Bootstrap",
          },
        ],
        exercises: [
          "Buat landing page lengkap dengan hero, grid, card",
          "Tambahkan form & modal",
          "Tambahkan carousel untuk showcase",
        ],
        miniProject:
          "Buat landing page produk interaktif lengkap dengan grid, modal, carousel, dan form",
      },
    ],
  },

  // =======================
  // Course 6: Tailwind CSS
  // =======================
  6: {
    id: 6,
    title: "Tailwind CSS",
    category: "Framework",
    description: "Utility-first CSS modern",
    modules: [
      {
        title: "Modul 1: Pengenalan Tailwind",
        submodules: [
          {
            title: "Apa itu Tailwind",
            content: "Utility-first CSS framework untuk styling cepat",
          },
          {
            title: "Install & Setup",
            content: "Install via CDN, NPM, atau Vite/React",
          },
          {
            title: "Utility Classes",
            content: "Text, color, background, spacing",
          },
          { title: "Responsive Design", content: "sm, md, lg, xl, 2xl" },
          {
            title: "Pseudo-class",
            content: "hover:, focus:, active:, group-hover",
          },
          {
            title: "Tips",
            content:
              "Gunakan class dengan nama jelas, hindari custom CSS berlebihan",
          },
        ],
        exercises: [
          "Buat hero section dengan tailwind",
          "Atur text & spacing menggunakan utility",
          "Tambahkan responsive classes untuk mobile",
        ],
        miniProject: "Buat landing page responsive menggunakan Tailwind CSS",
      },
      {
        title: "Modul 2: Layout & Flex",
        submodules: [
          { title: "Container & Grid", content: "container, grid-cols, gap" },
          {
            title: "Flex Utilities",
            content: "flex, justify-center, items-center, space-x",
          },
          {
            title: "Positioning",
            content: "relative, absolute, top, left, right",
          },
          {
            title: "Width & Height",
            content: "w-full, h-screen, max-w, max-h",
          },
          {
            title: "Z-index & Overflow",
            content: "z-10, overflow-hidden, overflow-auto",
          },
          {
            title: "Tips",
            content: "Gunakan flex untuk align, grid untuk layout kompleks",
          },
        ],
        exercises: [
          "Buat layout grid 3 kolom",
          "Gunakan flex utilities untuk align button & card",
          "Tambahkan responsive width & height",
        ],
        miniProject:
          "Buat landing page portfolio dengan grid responsive & flex layout",
      },
      {
        title: "Modul 3: Styling Components",
        submodules: [
          {
            title: "Buttons & Typography",
            content: "class text-white, bg-blue-500, rounded",
          },
          { title: "Cards", content: "shadow-lg, rounded-lg, p-6" },
          { title: "Forms", content: "input, select, checkbox styling" },
          {
            title: "Backgrounds & Gradients",
            content: "bg-gradient-to-r, from-blue-400, to-green-400",
          },
          {
            title: "Hover & Animation",
            content: "transition, duration-300, ease-in-out",
          },
          { title: "Tips", content: "Gunakan group-hover untuk efek kompleks" },
        ],
        exercises: [
          "Buat card produk dengan hover effect",
          "Tambahkan gradient background di hero section",
          "Buat form registrasi dengan styling tailwind",
        ],
        miniProject:
          "Buat dashboard admin dengan cards, forms, dan hover effect",
      },
      {
        title: "Modul 4: Interactivity",
        submodules: [
          {
            title: "Dark Mode",
            content: "Gunakan class dark: untuk styling dark mode",
          },
          {
            title: "Transitions & Transform",
            content: "transition, transform, scale, rotate",
          },
          {
            title: "Dropdown & Menu",
            content: "Gunakan hidden & block untuk toggle",
          },
          {
            title: "Modal & Popover",
            content: "Gunakan fixed, z-50, backdrop-blur",
          },
          {
            title: "Animations",
            content: "animate-spin, animate-pulse, animate-bounce",
          },
          {
            title: "Tips",
            content: "Gunakan Tailwind plugin jika fitur tambahan dibutuhkan",
          },
        ],
        exercises: [
          "Buat modal dengan backdrop blur",
          "Tambahkan dropdown menu interaktif",
          "Implement dark mode toggle",
        ],
        miniProject:
          "Buat website interaktif dengan modal, dropdown, hover & dark mode",
      },
      {
        title: "Modul 5: Project Tailwind Lengkap",
        submodules: [
          {
            title: "Landing Page",
            content: "Hero section, features, testimonial",
          },
          {
            title: "Cards & Buttons",
            content: "Card produk, CTA button, hover effect",
          },
          { title: "Forms", content: "Contact & subscription form" },
          {
            title: "Responsive & Dark Mode",
            content: "Mobile responsive & dark toggle",
          },
          { title: "Animation", content: "Hover, pulse, bounce, slide-in" },
          {
            title: "Tips",
            content: "Gunakan Tailwind plugin untuk forms & typography",
          },
        ],
        exercises: [
          "Buat landing page lengkap responsive",
          "Tambahkan dark mode toggle",
          "Tambahkan animasi hover & slide-in",
        ],
        miniProject:
          "Buat landing page interaktif lengkap responsive + dark mode + animation",
      },
    ],
  },

  // =======================
  // Course 7: FlowBite
  // =======================
  7: {
    id: 7,
    title: "FlowBite",
    category: "Framework",
    description: "UI components berbasis Tailwind",
    modules: [
      {
        title: "Modul 1: Pengenalan FlowBite",
        submodules: [
          {
            title: "Apa itu FlowBite",
            content: "Library component siap pakai berbasis Tailwind",
          },
          { title: "Install & Setup", content: "Install via NPM / CDN" },
          {
            title: "Button & Modal Components",
            content: "Membuat button, modal interaktif",
          },
          {
            title: "Navbar & Dropdown",
            content: "Navbar responsive, dropdown menu",
          },
          {
            title: "Form Components",
            content: "Input, select, checkbox, switch",
          },
          {
            title: "Tips",
            content:
              "Gunakan sesuai Tailwind, jangan override class default terlalu banyak",
          },
        ],
        exercises: [
          "Buat navbar responsive",
          "Tambahkan modal interaktif",
          "Gunakan button dan form components",
        ],
        miniProject: "Buat dashboard admin dengan navbar, modal, form, card",
      },
      // Modul 2–5 sama format lengkap
    ],
  },

  // =======================
  // Course 8: AOS Animation
  // =======================
  8: {
    id: 8,
    title: "AOS Animation",
    category: "Framework",
    description: "Animasi scroll modern",
    modules: [
      {
        title: "Modul 1: Pengenalan AOS",
        submodules: [
          { title: "Apa itu AOS", content: "Animate on Scroll library" },
          { title: "Install & Setup", content: "Install via NPM / CDN" },
          {
            title: "Data Attributes",
            content: "data-aos, data-aos-duration, data-aos-delay",
          },
          { title: "Animasi Dasar", content: "fade, slide, zoom, flip" },
          {
            title: "Tips",
            content: "Gunakan easing & duration sesuai kebutuhan",
          },
        ],
        exercises: [
          "Tambahkan animasi fade pada section",
          "Gunakan delay & duration berbeda",
          "Gunakan animation slide pada image",
        ],
        miniProject:
          "Buat landing page dengan animasi scroll untuk semua section",
      },
      // Modul 2–5 sama format lengkap
    ],
  },
  // =======================
  // Course 9: PHP
  // =======================
  9: {
    id: 9,
    title: "PHP",
    category: "Backend",
    description: "Pemrograman backend untuk web dinamis",
    modules: [
      {
        title: "Modul 1: Pengenalan PHP",
        submodules: [
          {
            title: "Sejarah PHP",
            content:
              "PHP adalah bahasa server-side scripting untuk web dinamis",
          },
          {
            title: "Syntax Dasar",
            content: "Variable, tipe data, operator, string",
          },
          {
            title: "Control Structure",
            content: "if, else, switch, ternary operator",
          },
          {
            title: "Function",
            content: "Deklarasi function, parameter, return value",
          },
          {
            title: "Tips",
            content: "Gunakan error reporting, penamaan variable jelas",
          },
        ],
        exercises: [
          "Buat halaman hello world",
          "Gunakan if-else untuk menampilkan greeting",
          "Buat function untuk menghitung luas",
        ],
        miniProject: "Buat form input data user & tampilkan hasil",
      },
      {
        title: "Modul 2: Array & Loop",
        submodules: [
          { title: "Array Dasar", content: "Indexed array, associative array" },
          { title: "Looping", content: "for, foreach, while, do-while" },
          {
            title: "Array Function",
            content: "count, array_push, array_pop, sort, implode",
          },
          { title: "Tips", content: "Gunakan foreach untuk iterasi array" },
        ],
        exercises: [
          "Buat array buah dan tampilkan semua",
          "Hitung jumlah elemen array",
          "Sort array dan tampilkan hasil",
        ],
        miniProject: "Buat daftar produk dengan array & loop",
      },
      {
        title: "Modul 3: Form Handling",
        submodules: [
          { title: "GET & POST", content: "Mengambil data dari form" },
          {
            title: "Sanitasi Input",
            content: "htmlspecialchars, trim, filter_var",
          },
          {
            title: "Validation Dasar",
            content: "Cek kosong, panjang string, tipe data",
          },
          { title: "Tips", content: "Selalu sanitize input untuk keamanan" },
        ],
        exercises: [
          "Buat form login dan ambil data POST",
          "Validasi input username & password",
        ],
        miniProject: "Buat form registrasi dengan validasi lengkap",
      },
      {
        title: "Modul 4: Koneksi Database",
        submodules: [
          {
            title: "MySQLi & PDO",
            content: "Koneksi database MySQL menggunakan PHP",
          },
          { title: "CRUD Dasar", content: "Create, Read, Update, Delete" },
          { title: "Prepared Statement", content: "Menghindari SQL Injection" },
          {
            title: "Tips",
            content: "Gunakan PDO untuk keamanan dan fleksibilitas",
          },
        ],
        exercises: [
          "Koneksi database & tampilkan tabel users",
          "Buat fungsi insert data baru",
          "Update data user menggunakan prepared statement",
        ],
        miniProject: "Buat aplikasi CRUD user lengkap dengan PHP & MySQL",
      },
      {
        title: "Modul 5: Project PHP Lengkap",
        submodules: [
          {
            title: "Aplikasi Web Dinamis",
            content: "Integrasi form, database, dan halaman dinamis",
          },
          {
            title: "Login & Session",
            content: "Session, cookie, otentikasi user",
          },
          {
            title: "Tips",
            content:
              "Pisahkan logic & UI, gunakan include/require untuk modular",
          },
        ],
        exercises: [
          "Buat login & session",
          "Integrasikan CRUD ke aplikasi",
          "Tambahkan validasi input",
        ],
        miniProject:
          "Buat aplikasi web lengkap user management dengan login, CRUD, dan session",
      },
    ],
  },

  // =======================
  // Course 10: Laravel
  // =======================
  10: {
    id: 10,
    title: "Laravel",
    category: "Backend",
    description: "Framework Laravel modern",
    modules: [
      {
        title: "Modul 1: Pengenalan Laravel",
        submodules: [
          {
            title: "Apa itu Laravel",
            content: "Framework PHP modern untuk web apps",
          },
          {
            title: "Installasi & Setup",
            content: "Composer, Laravel new project",
          },
          { title: "Routing Dasar", content: "Route get, post, resource" },
          {
            title: "Controller",
            content: "Membuat controller, method, dependency injection",
          },
          { title: "Tips", content: "Gunakan artisan untuk scaffolding" },
        ],
        exercises: [
          "Buat route & controller dasar",
          "Buat halaman welcome sederhana",
        ],
        miniProject:
          "Buat halaman landing page menggunakan Laravel route & controller",
      },
      {
        title: "Modul 2: Blade Template",
        submodules: [
          {
            title: "Blade Syntax",
            content: "{{ }}, @if, @foreach, @include, @yield",
          },
          {
            title: "Layouts & Components",
            content: "Pisahkan template, reusable components",
          },
          {
            title: "Tips",
            content: "Gunakan template inheritance untuk maintainable code",
          },
        ],
        exercises: [
          "Buat layout utama dengan Blade",
          "Tambahkan komponen card reusable",
        ],
        miniProject:
          "Buat halaman artikel lengkap dengan layout Blade dan komponen",
      },
      {
        title: "Modul 3: Database & Eloquent",
        submodules: [
          { title: "Migration", content: "Buat tabel & kolom database" },
          {
            title: "Model & Eloquent ORM",
            content: "CRUD data menggunakan model",
          },
          {
            title: "Query Builder",
            content: "Query kompleks dengan fluent syntax",
          },
          {
            title: "Tips",
            content: "Gunakan Eloquent untuk kecepatan pengembangan",
          },
        ],
        exercises: [
          "Buat tabel users & artikel",
          "Insert data menggunakan Eloquent",
          "Update & delete data",
        ],
        miniProject:
          "Buat aplikasi blog sederhana menggunakan Laravel & Eloquent",
      },
      {
        title: "Modul 4: Middleware & Authentication",
        submodules: [
          {
            title: "Middleware",
            content: "Filter request, cek login, role user",
          },
          { title: "Authentication", content: "Buat login, register, logout" },
          { title: "Tips", content: "Gunakan auth scaffolding Laravel" },
        ],
        exercises: [
          "Buat login & register",
          "Tambahkan middleware untuk halaman admin",
        ],
        miniProject: "Buat aplikasi web dengan login, role, dan akses terbatas",
      },
      {
        title: "Modul 5: Project Laravel Lengkap",
        submodules: [
          {
            title: "Integrasi CRUD, Blade, Auth",
            content: "Buat aplikasi lengkap user & artikel management",
          },
          {
            title: "Tips & Best Practice",
            content:
              "Pisahkan logic ke service & controller, gunakan validation",
          },
        ],
        exercises: [
          "Buat halaman dashboard admin",
          "Integrasikan CRUD dengan authentication",
        ],
        miniProject: "Buat aplikasi blog / CMS lengkap dengan Laravel",
      },
    ],
  },

  // =======================
  // Course 11: MySQL
  // =======================
  11: {
    id: 11,
    title: "MySQL",
    category: "Database",
    description: "Sistem database populer untuk backend",
    modules: [
      {
        title: "Modul 1: Pengenalan MySQL",
        submodules: [
          { title: "Sejarah MySQL", content: "Database relasional populer" },
          {
            title: "Install & Setup",
            content: "XAMPP, Laragon, atau server MySQL",
          },
          { title: "Database & Table", content: "CREATE, DROP, ALTER" },
          { title: "Data Types", content: "INT, VARCHAR, DATE, TEXT, BOOLEAN" },
          {
            title: "Tips",
            content: "Gunakan nama tabel & kolom jelas, konsisten",
          },
        ],
        exercises: ["Buat database baru", "Buat tabel user & product"],
        miniProject: "Buat database e-commerce sederhana",
      },
      {
        title: "Modul 2: Query Dasar",
        submodules: [
          {
            title: "SELECT, INSERT, UPDATE, DELETE",
            content: "Query dasar CRUD",
          },
          {
            title: "WHERE, ORDER BY, LIMIT",
            content: "Filter data sesuai kondisi",
          },
          {
            title: "Tips",
            content: "Selalu backup data sebelum update/delete",
          },
        ],
        exercises: [
          "Insert 5 user ke tabel",
          "Update user tertentu",
          "Hapus data tertentu",
        ],
        miniProject: "Buat laporan user dengan query SELECT dan filter",
      },
      {
        title: "Modul 3: Joins & Relasi",
        submodules: [
          {
            title: "INNER JOIN, LEFT JOIN, RIGHT JOIN",
            content: "Menggabungkan tabel",
          },
          {
            title: "Relasi 1-1, 1-Many, Many-Many",
            content: "Konsep relasi antar tabel",
          },
          {
            title: "Tips",
            content: "Gunakan foreign key & indexing untuk performa",
          },
        ],
        exercises: [
          "Buat 2 tabel & join data",
          "Tampilkan daftar user dengan order by",
        ],
        miniProject: "Buat aplikasi reporting sederhana dengan join tabel",
      },
      {
        title: "Modul 4: Index & Performance",
        submodules: [
          { title: "Indexing", content: "Primary key, unique, index" },
          { title: "Query Optimization", content: "EXPLAIN, LIMIT, indexing" },
          { title: "Tips", content: "Gunakan indexing untuk query besar" },
        ],
        exercises: [
          "Tambahkan index pada tabel user",
          "Cek query plan menggunakan EXPLAIN",
        ],
        miniProject: "Optimalkan database blog besar dengan indexing",
      },
      {
        title: "Modul 5: Project MySQL Lengkap",
        submodules: [
          {
            title: "Integrasi CRUD & Joins",
            content: "Buat database & tabel lengkap e-commerce",
          },
          { title: "Tips", content: "Gunakan relational design & indexing" },
        ],
        exercises: [
          "Buat database toko online dengan tabel users, products, orders",
          "Implementasikan query report & join",
        ],
        miniProject: "Buat aplikasi backend database e-commerce lengkap",
      },
    ],
  },

  // =======================
  // Course 12: MariaDB
  // =======================
  12: {
    id: 12,
    title: "MariaDB",
    category: "Database",
    description: "Database kuat & kompatibel MySQL",
    modules: [
      {
        title: "Modul 1: Pengenalan MariaDB",
        submodules: [
          {
            title: "Apa itu MariaDB",
            content: "Database fork dari MySQL, lebih cepat & aman",
          },
          { title: "Install & Setup", content: "XAMPP, Laragon, Docker" },
          {
            title: "Database & Table",
            content: "CREATE DATABASE, CREATE TABLE",
          },
          {
            title: "Tips",
            content: "Kompatibel MySQL, gunakan untuk performa lebih baik",
          },
        ],
        exercises: [
          "Buat database baru di MariaDB",
          "Buat tabel user & product",
        ],
        miniProject: "Buat database blog sederhana",
      },
      {
        title: "Modul 2: Query & CRUD",
        submodules: [
          {
            title: "SELECT, INSERT, UPDATE, DELETE",
            content: "Query dasar CRUD",
          },
          { title: "Filter & Sorting", content: "WHERE, ORDER BY, LIMIT" },
          {
            title: "Tips",
            content: "Gunakan prepared statement di PHP untuk keamanan",
          },
        ],
        exercises: [
          "Insert data 5 user",
          "Update data produk tertentu",
          "Hapus data user",
        ],
        miniProject: "Buat laporan user & produk menggunakan MariaDB",
      },
      {
        title: "Modul 3: Joins & Relasi",
        submodules: [
          { title: "INNER JOIN, LEFT JOIN", content: "Menggabungkan tabel" },
          { title: "Foreign Key", content: "Menjaga integritas data" },
          { title: "Tips", content: "Gunakan indexing untuk performa query" },
        ],
        exercises: [
          "Buat join tabel user & order",
          "Tampilkan order user tertentu",
        ],
        miniProject: "Buat laporan penjualan menggunakan join tabel",
      },
      {
        title: "Modul 4: Backup & Restore",
        submodules: [
          { title: "Backup Database", content: "mysqldump / tool GUI" },
          { title: "Restore Database", content: "Import SQL file" },
          { title: "Tips", content: "Backup rutin untuk keamanan data" },
        ],
        exercises: [
          "Backup database e-commerce",
          "Restore database ke server baru",
        ],
        miniProject: "Buat backup & restore sistem database toko online",
      },
      {
        title: "Modul 5: Project MariaDB Lengkap",
        submodules: [
          {
            title: "Integrasi CRUD & Joins",
            content: "Buat aplikasi database dengan relasi tabel lengkap",
          },
          {
            title: "Tips",
            content:
              "Gunakan indexing & foreign key untuk performa dan integritas",
          },
        ],
        exercises: [
          "Buat database blog dengan user, post, comments",
          "Implementasikan CRUD lengkap & join",
        ],
        miniProject:
          "Buat aplikasi backend blog e-commerce menggunakan MariaDB",
      },
    ],
  },
  // =======================
// Course 13: PostgreSQL
// =======================
13: {
  id:13,
  title:"PostgreSQL",
  category:"Database",
  description:"Database canggih & powerful",
  modules:[
    {
      title:"Modul 1: Pengenalan PostgreSQL",
      submodules:[
        {title:"Apa itu PostgreSQL", content:"Database relasional open-source, canggih dan scalable"},
        {title:"Install & Setup", content:"Install via pgAdmin, Docker, atau OS package manager"},
        {title:"Database & Schema", content:"Buat database, schema, tabel"},
        {title:"Data Types", content:"INT, VARCHAR, TEXT, BOOLEAN, JSON, ARRAY"},
        {title:"Tips", content:"Gunakan schema untuk organisasi tabel lebih baik"}
      ],
      exercises:[
        "Buat database baru dan schema",
        "Buat tabel user & product dengan tipe data lengkap"
      ],
      miniProject:"Buat database e-commerce lengkap dengan schema"
    },
    {
      title:"Modul 2: Query Dasar",
      submodules:[
        {title:"SELECT, INSERT, UPDATE, DELETE", content:"Query dasar CRUD"},
        {title:"WHERE, ORDER BY, LIMIT, OFFSET", content:"Filter & sort data"},
        {title:"Tips", content:"Gunakan LIMIT & OFFSET untuk pagination"}
      ],
      exercises:[
        "Insert data user & product",
        "Update harga produk tertentu",
        "Hapus user yang tidak aktif"
      ],
      miniProject:"Buat laporan pengguna & produk lengkap"
    },
    {
      title:"Modul 3: Joins & Relasi",
      submodules:[
        {title:"INNER, LEFT, RIGHT JOIN", content:"Gabungkan data dari beberapa tabel"},
        {title:"One-to-One, One-to-Many, Many-to-Many", content:"Relasi antar tabel"},
        {title:"Tips", content:"Gunakan foreign key & indexing untuk integritas & performa"}
      ],
      exercises:[
        "Buat join user & orders",
        "Tampilkan semua order user tertentu"
      ],
      miniProject:"Buat sistem laporan penjualan lengkap"
    },
    {
      title:"Modul 4: Indexing & Performance",
      submodules:[
        {title:"Primary Key & Unique Index", content:"Menjaga integritas data"},
        {title:"B-Tree, Hash, GIN, GiST Index", content:"Jenis index untuk query cepat"},
        {title:"Query Optimization", content:"EXPLAIN ANALYZE untuk cek performa"},
        {title:"Tips", content:"Gunakan indexing di kolom yang sering dicari"}
      ],
      exercises:[
        "Buat index pada tabel produk",
        "Cek query plan menggunakan EXPLAIN ANALYZE"
      ],
      miniProject:"Optimasi database toko online besar dengan indexing"
    },
    {
      title:"Modul 5: Project PostgreSQL Lengkap",
      submodules:[
        {title:"Integrasi CRUD & Relasi", content:"Buat aplikasi backend dengan multiple table relasi"},
        {title:"Tips", content:"Gunakan schema, indexing, foreign key untuk performa & integritas"}
      ],
      exercises:[
        "Buat database toko online lengkap dengan user, product, orders",
        "Implementasikan query laporan penjualan & user"
      ],
      miniProject:"Buat backend e-commerce lengkap menggunakan PostgreSQL"
    }
  ]
},

// =======================
// Course 14: Python
// =======================
14: {
  id:14,
  title:"Python",
  category:"Backend",
  description:"Bahasa serbaguna untuk backend",
  modules:[
    {
      title:"Modul 1: Pengenalan Python",
      submodules:[
        {title:"Sejarah & Kelebihan Python", content:"Bahasa serbaguna, mudah dipelajari, banyak framework"},
        {title:"Setup & IDE", content:"Install Python, gunakan VSCode atau PyCharm"},
        {title:"Syntax Dasar", content:"Variable, tipe data, operator"},
        {title:"Tips", content:"Gunakan virtual environment untuk project"}
      ],
      exercises:[
        "Buat script hello world",
        "Coba variable, string, number, boolean"
      ],
      miniProject:"Buat kalkulator sederhana di console"
    },
    {
      title:"Modul 2: Control Flow & Function",
      submodules:[
        {title:"Conditionals", content:"if, elif, else"},
        {title:"Loops", content:"for, while, nested loop"},
        {title:"Function", content:"def, return, parameter"},
        {title:"Tips", content:"Gunakan docstring di function"}
      ],
      exercises:[
        "Buat program cek ganjil/genap",
        "Loop 1-10 dan tampilkan hasil",
        "Buat function hitung luas persegi panjang"
      ],
      miniProject:"Buat mini project kalkulator statistik"
    },
    {
      title:"Modul 3: Data Structure",
      submodules:[
        {title:"List, Tuple, Set, Dictionary", content:"Menyimpan data secara efisien"},
        {title:"Comprehension", content:"List & dict comprehension"},
        {title:"Tips", content:"Pahami mutable & immutable"}
      ],
      exercises:[
        "Buat list nama teman",
        "Loop dictionary untuk print key & value",
        "Gunakan set untuk unik data"
      ],
      miniProject:"Buat program pengelola daftar siswa & nilai"
    },
    {
      title:"Modul 4: File & Module",
      submodules:[
        {title:"File Handling", content:"open, read, write, append"},
        {title:"Module & Package", content:"import, pip install"},
        {title:"Tips", content:"Gunakan exception handling saat buka file"}
      ],
      exercises:[
        "Buat file text & tulis data",
        "Baca data dari file & tampilkan"
      ],
      miniProject:"Buat aplikasi sederhana penyimpanan catatan harian"
    },
    {
      title:"Modul 5: Backend Web dengan Flask",
      submodules:[
        {title:"Setup Flask", content:"Install Flask, buat app.py"},
        {title:"Routing & Template", content:"@app.route, render_template"},
        {title:"Forms & Request", content:"GET, POST, request.form"},
        {title:"Tips", content:"Pisahkan routes & templates untuk maintainable code"}
      ],
      exercises:[
        "Buat route home & about",
        "Buat form contact dan tampilkan data input"
      ],
      miniProject:"Buat aplikasi blog sederhana dengan Flask"
    }
  ]
},

// =======================
// Course 15: Golang
// =======================
15: {
  id:15,
  title:"Golang",
  category:"Backend",
  description:"Backend cepat & efisien",
  modules:[
    {
      title:"Modul 1: Pengenalan Golang",
      submodules:[
        {title:"Apa itu Golang", content:"Bahasa backend cepat & performa tinggi"},
        {title:"Install & Setup", content:"Install Golang, setup GOPATH & workspace"},
        {title:"Syntax Dasar", content:"Variable, tipe data, operator"},
        {title:"Tips", content:"Gunakan go fmt untuk format code otomatis"}
      ],
      exercises:[
        "Buat program hello world",
        "Coba variable & tipe data"
      ],
      miniProject:"Buat kalkulator sederhana di console"
    },
    {
      title:"Modul 2: Function & Struct",
      submodules:[
        {title:"Function", content:"Deklarasi, parameter, return"},
        {title:"Struct", content:"Membuat tipe data custom"},
        {title:"Tips", content:"Gunakan struct untuk representasi object"}
      ],
      exercises:[
        "Buat function hitung luas",
        "Buat struct mahasiswa dengan nama, umur, nilai"
      ],
      miniProject:"Buat program pengelola data mahasiswa sederhana"
    },
    {
      title:"Modul 3: Routing & Server",
      submodules:[
        {title:"net/http package", content:"Membuat server & route"},
        {title:"Request & Response", content:"Handle GET & POST"},
        {title:"Tips", content:"Gunakan goroutine untuk concurrent request"}
      ],
      exercises:[
        "Buat server port 8080",
        "Buat route /home dan /about"
      ],
      miniProject:"Buat API sederhana dengan route GET & POST"
    },
    {
      title:"Modul 4: Database & CRUD",
      submodules:[
        {title:"Database Connection", content:"Connect ke MySQL/PostgreSQL"},
        {title:"CRUD Operation", content:"Insert, Select, Update, Delete"},
        {title:"Tips", content:"Gunakan sqlx atau GORM untuk ORM"}
      ],
      exercises:[
        "Connect ke database",
        "Insert & select data"
      ],
      miniProject:"Buat API backend CRUD user sederhana"
    },
    {
      title:"Modul 5: Project Golang Lengkap",
      submodules:[
        {title:"API Backend", content:"Integrasi server, routing, CRUD"},
        {title:"Tips", content:"Pisahkan controller, service, model untuk maintainable code"}
      ],
      exercises:[
        "Buat API user management",
        "Tambahkan validasi input & error handling"
      ],
      miniProject:"Buat backend web lengkap menggunakan Golang & database"
    }
  ]
},

// =======================
// Course 16: Flask
// =======================
16: {
  id:16,
  title:"Flask",
  category:"Backend",
  description:"Framework Python untuk backend ringan",
  modules:[
    {
      title:"Modul 1: Pengenalan Flask",
      submodules:[
        {title:"Apa itu Flask", content:"Framework Python ringan untuk web backend"},
        {title:"Install & Setup", content:"Install Flask, buat virtual environment"},
        {title:"Hello World App", content:"Buat app.py & route /"}
      ],
      exercises:[
        "Buat app hello world",
        "Test route / di browser"
      ],
      miniProject:"Buat halaman home sederhana"
    },
    {
      title:"Modul 2: Routing & Template",
      submodules:[
        {title:"Route Basics", content:"@app.route('/')"},
        {title:"Template Rendering", content:"render_template, Jinja2 syntax"},
        {title:"Tips", content:"Pisahkan templates & static files"}
      ],
      exercises:[
        "Buat route /about & /contact",
        "Render template dengan data dinamis"
      ],
      miniProject:"Buat multi-page website sederhana dengan Flask"
    },
    {
      title:"Modul 3: Forms & Request",
      submodules:[
        {title:"GET & POST", content:"request.method, request.form"},
        {title:"Form Validation", content:"Cek input kosong, tipe data"},
        {title:"Tips", content:"Gunakan flash messages untuk feedback user"}
      ],
      exercises:[
        "Buat form login & registrasi",
        "Validasi input & tampilkan error"
      ],
      miniProject:"Buat aplikasi login sederhana dengan Flask"
    },
    {
      title:"Modul 4: Database & ORM",
      submodules:[
        {title:"SQLAlchemy Setup", content:"Connect ke database, definisi model"},
        {title:"CRUD dengan ORM", content:"Insert, select, update, delete"},
        {title:"Tips", content:"Pisahkan model & routes untuk maintainable code"}
      ],
      exercises:[
        "Buat model User & Post",
        "Insert data menggunakan ORM"
      ],
      miniProject:"Buat blog sederhana dengan Flask & SQLAlchemy"
    },
    {
      title:"Modul 5: Project Flask Lengkap",
      submodules:[
        {title:"Integrasi Routing, Template, Database", content:"Buat aplikasi web lengkap"},
        {title:"Tips & Best Practice", content:"Gunakan blueprint, validation, dan modular code"}
      ],
      exercises:[
        "Buat aplikasi web dengan login, CRUD post",
        "Integrasikan template & database"
      ],
      miniProject:"Buat aplikasi blog lengkap dengan user, post, CRUD & template"
    }
  ]
},

 17: {
    id: 17,
    title: "GeeksHelp",
    category: "Educational Portal",
    description: "Belajar berbagai teknologi dan keterampilan coding melalui GeeksHelp, portal edukasi interaktif untuk mahasiswa dan developer.",
    modules: [
      {
        title: "Modul 1: Pengenalan GeeksHelp",
        submodules: [
          { 
            title: "Apa itu GeeksHelp", 
            content: "GeeksHelp adalah portal edukasi interaktif yang menyediakan materi coding, tutorial, quiz, dan project untuk mahasiswa dan developer." 
          },
          { 
            title: "Fitur Utama", 
            content: "Materi HTML, CSS, JavaScript, Web Development, AI, Computer Fundamentals, Quiz, Mini Projects, dan forum diskusi." 
          },
          { 
            title: "Manfaat untuk Developer", 
            content: "Mempercepat pembelajaran, meningkatkan skill praktis, dan menyediakan komunitas untuk bertanya dan berbagi solusi." 
          }
        ],
        exercises: [
          "Jelajahi halaman tutorial HTML, CSS, dan JavaScript",
          "Ikuti salah satu quiz untuk menguji pemahaman",
          "Baca artikel terbaru di GeeksHelp blog"
        ],
        miniProject: "Buat catatan pribadi dari tutorial dan quiz favorit"
      },
      {
        title: "Modul 2: Belajar HTML & CSS",
        submodules: [
          { title: "HTML Dasar", content: "Membuat struktur halaman web menggunakan tag HTML." },
          { title: "CSS Styling", content: "Memberi gaya pada halaman web menggunakan CSS." },
          { title: "Project Mini", content: "Membuat halaman profil sederhana menggunakan HTML & CSS." }
        ],
        exercises: [
          "Buat halaman HTML sederhana",
          "Tambahkan CSS untuk mempercantik halaman",
          "Eksperimen dengan layout Flexbox dan Grid"
        ],
        miniProject: "Buat landing page portofolio sederhana"
      },
      {
        title: "Modul 3: JavaScript & Interaktivitas",
        submodules: [
          { title: "Dasar JavaScript", content: "Memahami variabel, fungsi, dan event handling." },
          { title: "DOM Manipulation", content: "Mengubah konten dan style halaman secara dinamis." },
          { title: "Mini Project JS", content: "Membuat kalkulator sederhana atau todo list." }
        ],
        exercises: [
          "Buat fungsi JavaScript untuk validasi form",
          "Manipulasi DOM untuk menambahkan elemen baru",
          "Coba project mini interaktif"
        ],
        miniProject: "Buat aplikasi todo list dengan JavaScript"
      },
      {
        title: "Modul 4: Proyek & Kolaborasi",
        submodules: [
          { title: "Mini Projects", content: "Mengerjakan proyek kecil dari template GeeksHelp." },
          { title: "Forum Diskusi", content: "Bertanya dan membantu sesama developer di forum." },
          { title: "Kolaborasi Proyek", content: "Membuat proyek bersama teman atau komunitas." }
        ],
        exercises: [
          "Pilih mini project dan selesaikan sesuai instruksi",
          "Tanyakan satu pertanyaan coding di forum",
          "Buat repository GitHub untuk project kolaborasi"
        ],
        miniProject: "Buat website sederhana menggunakan HTML, CSS, dan JS, lalu share ke komunitas GeeksHelp"
      }
    ]
  }
}
