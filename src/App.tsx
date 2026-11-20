import { useMemo, useState, type FormEvent, type ReactNode } from "react";

type IconName =
  | "home"
  | "briefcase"
  | "calendar"
  | "file"
  | "user"
  | "book"
  | "search"
  | "bell"
  | "arrow"
  | "clock"
  | "pin"
  | "chevron"
  | "upload"
  | "check"
  | "filter"
  | "menu"
  | "close"
  | "bookmark"
  | "logout";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9M9 20v-6h6v6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 12h6M9 16h6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H11v17H6.5A2.5 2.5 0 0 0 4 21.5zM20 4.5A2.5 2.5 0 0 0 17.5 2H13v17h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  upload: (
    <>
      <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  filter: <path d="M4 6h16M7 12h10M10 18h4" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  bookmark: <path d="M6 3h12v18l-6-4-6 4z" />,
  logout: (
    <>
      <path d="M10 4H5v16h5M14 8l4 4-4 4M18 12H9" />
    </>
  ),
};

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const applications = [
  {
    role: "Product Designer",
    company: "Northstar Labs",
    date: "May 22, 2025",
    status: "Interview",
    stage: 3,
  },
  {
    role: "UX Researcher",
    company: "Helio Health",
    date: "May 18, 2025",
    status: "In review",
    stage: 2,
  },
  {
    role: "Senior UX Designer",
    company: "Canopy Finance",
    date: "May 12, 2025",
    status: "Assessment",
    stage: 2,
  },
];

const jobs = [
  {
    id: 1,
    role: "Senior Product Designer",
    company: "Nimble Studio",
    location: "New York, NY",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$128k – $156k",
    age: "2h ago",
    initials: "NS",
    color: "#002d74",
    description: "Shape end-to-end product experiences for a fast-growing collaboration platform.",
  },
  {
    id: 2,
    role: "UX Researcher",
    company: "Arcwell Health",
    location: "Remote, US",
    mode: "Remote",
    type: "Full-time",
    salary: "$105k – $132k",
    age: "5h ago",
    initials: "AH",
    color: "#00a6ce",
    description: "Lead generative and evaluative research across our digital health products.",
  },
  {
    id: 3,
    role: "Product Designer II",
    company: "Beacon Financial",
    location: "Chicago, IL",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$112k – $140k",
    age: "1d ago",
    initials: "BF",
    color: "#2d6a9f",
    description: "Create trusted, accessible tools that make everyday finances feel simpler.",
  },
  {
    id: 4,
    role: "UX/UI Designer",
    company: "Common Thread",
    location: "Austin, TX",
    mode: "On-site",
    type: "Contract",
    salary: "$72 – $88/hr",
    age: "2d ago",
    initials: "CT",
    color: "#536fa4",
    description: "Join a focused design team building a new marketplace from the ground up.",
  },
];

const documents = [
  { name: "Jordan_Lee_Resume.pdf", type: "Resume", date: "May 20, 2025", status: "Verified" },
  { name: "Design_Portfolio.pdf", type: "Portfolio", date: "May 20, 2025", status: "Verified" },
  {
    name: "Product_Certificate.pdf",
    type: "Certification",
    date: "Apr 02, 2025",
    status: "Uploaded",
  },
];

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: "dashboard", label: "Overview", icon: "home" },
  { id: "applications", label: "Applications", icon: "briefcase" },
  { id: "schedule", label: "Interviews & exams", icon: "calendar" },
  { id: "documents", label: "Documents", icon: "file" },
  { id: "profile", label: "My profile", icon: "user" },
  { id: "resources", label: "Resources", icon: "book" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      <img
        src={`${import.meta.env.BASE_URL}techignite-logo.png`}
        alt="TechIgnite"
      />
    </div>
  );
}

function Pill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "cyan" | "amber" | "green" | "gray";
}) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}

function EmptyApiNote() {
  return (
    <span className="api-note">
      <span className="api-dot" /> Placeholder API data
    </span>
  );
}

function Dashboard({ navigate }: { navigate: (page: string) => void }) {
  return (
    <>
      <section className="welcome">
        <div>
          <p className="eyebrow">Tuesday, May 27</p>
          <h1>Good morning, Jordan.</h1>
          <p>Here’s what’s happening with your job search.</p>
        </div>
        <button className="primary-btn" onClick={() => navigate("jobs")}>
          <Icon name="search" size={18} /> Find your next role
        </button>
      </section>
      <div className="stat-grid">
        <article className="stat-card">
          <div className="stat-icon">
            <Icon name="briefcase" />
          </div>
          <div>
            <span>Active applications</span>
            <strong>3</strong>
            <small>
              <b>+1</b> this week
            </small>
          </div>
        </article>
        <article className="stat-card">
          <div className="stat-icon cyan">
            <Icon name="calendar" />
          </div>
          <div>
            <span>Upcoming events</span>
            <strong>2</strong>
            <small>Next in 2 days</small>
          </div>
        </article>
        <article className="stat-card">
          <div className="stat-icon pale">
            <Icon name="user" />
          </div>
          <div>
            <span>Profile strength</span>
            <strong>82%</strong>
            <small>
              <b>Almost there</b>
            </small>
          </div>
        </article>
      </div>
      <div className="dashboard-grid">
        <section className="card applications-card">
          <div className="card-head">
            <div>
              <h2>Current applications</h2>
              <p>Track your recent opportunities</p>
            </div>
            <button className="text-btn" onClick={() => navigate("applications")}>
              View all <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="application-list">
            {applications.map((app) => (
              <div className="application-row" key={app.role}>
                <div className="company-logo">
                  {app.company
                    .split(" ")
                    .map((x) => x[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="app-title">
                  <strong>{app.role}</strong>
                  <span>
                    {app.company} · Applied {app.date}
                  </span>
                </div>
                <Pill
                  tone={
                    app.status === "Interview"
                      ? "green"
                      : app.status === "Assessment"
                        ? "amber"
                        : "blue"
                  }
                >
                  {app.status}
                </Pill>
                <button
                  className="icon-btn"
                  aria-label={`Open ${app.role}`}
                  onClick={() => navigate("applications")}
                >
                  <Icon name="chevron" size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="card upcoming-card">
          <div className="card-head">
            <div>
              <h2>Coming up</h2>
              <p>Your next scheduled activities</p>
            </div>
            <button className="more-btn" aria-label="More options">
              •••
            </button>
          </div>
          <div className="event">
            <div className="date-block">
              <span>MAY</span>
              <b>29</b>
            </div>
            <div>
              <Pill tone="green">Interview</Pill>
              <h3>Product Designer</h3>
              <p>Nimble Studio · Video call</p>
              <span className="event-time">
                <Icon name="clock" size={15} /> 10:30 – 11:15 AM
              </span>
            </div>
          </div>
          <div className="event">
            <div className="date-block alt">
              <span>JUN</span>
              <b>02</b>
            </div>
            <div>
              <Pill tone="amber">Assessment</Pill>
              <h3>Design exercise</h3>
              <p>Canopy Finance · Online</p>
              <span className="event-time">
                <Icon name="clock" size={15} /> Due by 5:00 PM
              </span>
            </div>
          </div>
        </section>
        <section className="card checklist-card">
          <div className="card-head">
            <div>
              <h2>Strengthen your profile</h2>
              <p>A few quick steps can help you stand out.</p>
            </div>
            <div className="progress-ring">
              82<small>%</small>
            </div>
          </div>
          <div className="check-row done">
            <span>
              <Icon name="check" size={15} />
            </span>
            <div>
              <strong>Contact information</strong>
              <p>Complete and verified</p>
            </div>
            <b>Done</b>
          </div>
          <div className="check-row">
            <span>1</span>
            <div>
              <strong>Add your work preferences</strong>
              <p>Help us personalize your recommendations</p>
            </div>
            <button onClick={() => navigate("profile")}>Add now</button>
          </div>
        </section>
        <section className="card resource-mini">
          <span className="resource-symbol">
            <Icon name="book" size={27} />
          </span>
          <div>
            <p className="eyebrow">Featured guide</p>
            <h2>Prepare for your next interview</h2>
            <p>Practical prompts and a 15-minute prep checklist.</p>
            <button className="text-btn" onClick={() => navigate("resources")}>
              Read the guide <Icon name="arrow" size={16} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

function ApplicationsPage() {
  return (
    <Page title="My applications" subtitle="Track every opportunity from submission to decision.">
      <div className="toolbar">
        <div className="search-field">
          <Icon name="search" size={18} />
          <input aria-label="Search applications" placeholder="Search applications" />
        </div>
        <button className="outline-btn">
          <Icon name="filter" size={17} /> Filter
        </button>
      </div>
      <section className="card table-card">
        {applications.map((app) => (
          <article className="application-detail" key={app.role}>
            <div className="company-logo large">
              {app.company
                .split(" ")
                .map((x) => x[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="detail-main">
              <div className="detail-title">
                <div>
                  <h3>{app.role}</h3>
                  <p>
                    {app.company} · Applied {app.date}
                  </p>
                </div>
                <Pill
                  tone={
                    app.status === "Interview"
                      ? "green"
                      : app.status === "Assessment"
                        ? "amber"
                        : "blue"
                  }
                >
                  {app.status}
                </Pill>
              </div>
              <div className="stage-line">
                {["Submitted", "Review", "Interview", "Decision"].map((stage, i) => (
                  <div className={i < app.stage ? "active" : ""} key={stage}>
                    <span>{i < app.stage - 1 ? <Icon name="check" size={12} /> : i + 1}</span>
                    <small>{stage}</small>
                  </div>
                ))}
              </div>
            </div>
            <button className="outline-btn compact">View details</button>
          </article>
        ))}
      </section>
    </Page>
  );
}

function SchedulePage() {
  return (
    <Page
      title="Interviews & exams"
      subtitle="Stay on top of upcoming conversations and assessments."
    >
      <div className="schedule-layout">
        <section className="card schedule-list">
          <div className="card-head">
            <div>
              <h2>Upcoming</h2>
              <p>2 scheduled activities</p>
            </div>
          </div>
          <div className="schedule-event featured">
            <div className="date-block">
              <span>MAY</span>
              <b>29</b>
            </div>
            <div className="grow">
              <Pill tone="green">Video interview</Pill>
              <h3>Product Designer · Nimble Studio</h3>
              <p>With Maya Chen, Design Director</p>
              <span className="event-time">
                <Icon name="clock" size={15} /> 10:30 – 11:15 AM · Zoom
              </span>
            </div>
            <button className="primary-btn small">Join call</button>
          </div>
          <div className="schedule-event">
            <div className="date-block alt">
              <span>JUN</span>
              <b>02</b>
            </div>
            <div className="grow">
              <Pill tone="amber">Take-home exam</Pill>
              <h3>Design exercise · Canopy Finance</h3>
              <p>Estimated time: 90 minutes</p>
              <span className="event-time">
                <Icon name="clock" size={15} /> Due by 5:00 PM
              </span>
            </div>
            <button className="outline-btn compact">View brief</button>
          </div>
        </section>
        <aside className="card prep-card">
          <span className="resource-symbol">
            <Icon name="calendar" size={26} />
          </span>
          <h2>Ready for Thursday?</h2>
          <p>Review the role and prepare a few examples that show your product thinking.</p>
          <div>
            <Icon name="check" size={16} /> Test your camera and audio
          </div>
          <div>
            <Icon name="check" size={16} /> Prepare 2–3 case studies
          </div>
          <div>
            <Icon name="check" size={16} /> Bring questions for the team
          </div>
          <button className="outline-btn">Open prep guide</button>
        </aside>
      </div>
    </Page>
  );
}

function DocumentsPage() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <Page
      title="My documents"
      subtitle="Keep your application materials current and ready to share."
    >
      <section className="upload-zone" onClick={() => setUploaded(true)} role="button" tabIndex={0}>
        <span>
          <Icon name={uploaded ? "check" : "upload"} size={22} />
        </span>
        <div>
          <strong>{uploaded ? "Document ready to upload" : "Upload a new document"}</strong>
          <p>
            {uploaded
              ? "New_Document.pdf · Click again to replace"
              : "PDF, DOCX, PNG or JPG · Maximum 10 MB"}
          </p>
        </div>
        <button className="outline-btn">{uploaded ? "Confirm upload" : "Choose file"}</button>
      </section>
      <section className="card table-card">
        <div className="card-head padded">
          <div>
            <h2>Your files</h2>
            <p>{documents.length + (uploaded ? 1 : 0)} documents</p>
          </div>
        </div>
        {[
          ...(uploaded
            ? [{ name: "New_Document.pdf", type: "Other", date: "Just now", status: "Uploaded" }]
            : []),
          ...documents,
        ].map((doc) => (
          <div className="document-row" key={doc.name}>
            <div className="file-icon">PDF</div>
            <div className="grow">
              <strong>{doc.name}</strong>
              <span>
                {doc.type} · {doc.date}
              </span>
            </div>
            <Pill tone={doc.status === "Verified" ? "green" : "gray"}>{doc.status}</Pill>
            <button className="more-btn">•••</button>
          </div>
        ))}
      </section>
    </Page>
  );
}

function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const save = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return (
    <Page
      title="My profile"
      subtitle="Keep your information accurate so employers see your best self."
    >
      <div className="profile-layout">
        <aside className="card profile-summary">
          <div className="avatar large-avatar">JL</div>
          <h2>Jordan Lee</h2>
          <p>Product Designer</p>
          <div className="completion">
            <span>
              <b>82%</b> complete
            </span>
            <div>
              <i />
            </div>
          </div>
          <small>Complete your preferences to strengthen your profile.</small>
        </aside>
        <form className="card profile-form" onSubmit={save}>
          <div className="card-head">
            <div>
              <h2>Personal information</h2>
              <p>Visible to employers when you apply</p>
            </div>
          </div>
          <div className="form-grid">
            <label>
              First name
              <input defaultValue="Jordan" />
            </label>
            <label>
              Last name
              <input defaultValue="Lee" />
            </label>
            <label>
              Email address
              <input type="email" defaultValue="jordan.lee@example.com" />
            </label>
            <label>
              Phone number
              <input defaultValue="+1 (555) 204-8831" />
            </label>
            <label className="full">
              Professional headline
              <input defaultValue="Product Designer focused on thoughtful, accessible experiences" />
            </label>
            <label className="full">
              About
              <textarea defaultValue="I’m a product designer with 6 years of experience turning complex workflows into clear, useful products." />
            </label>
            <label>
              Preferred work setup
              <select defaultValue="">
                <option value="" disabled>
                  Select preference
                </option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </label>
            <label>
              Preferred location
              <input placeholder="City or region" />
            </label>
          </div>
          <div className="form-actions">
            <span>
              {saved && (
                <>
                  <Icon name="check" size={16} /> Changes saved
                </>
              )}
            </span>
            <button className="primary-btn" type="submit">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
}

function ResourcesPage() {
  const resources = [
    [
      "Interview toolkit",
      "Prepare stories, questions, and a confident introduction.",
      "8 min read",
      "book",
    ],
    [
      "Resume checklist",
      "A practical guide to making every line work harder.",
      "5 min read",
      "file",
    ],
    [
      "Understanding assessments",
      "What to expect from common pre-employment exams.",
      "6 min read",
      "calendar",
    ],
    [
      "Salary conversations",
      "Research, frame, and negotiate your next offer.",
      "10 min read",
      "briefcase",
    ],
  ] as const;
  return (
    <Page
      title="Career resources"
      subtitle="Guides and tools to help you move forward with confidence."
    >
      <section className="featured-resource">
        <div>
          <Pill tone="cyan">New guide</Pill>
          <h2>Turn your experience into a story employers remember.</h2>
          <p>Use our simple STAR framework workbook to prepare stronger interview answers.</p>
          <button className="primary-btn">
            Explore the workbook <Icon name="arrow" size={17} />
          </button>
        </div>
        <div className="abstract-art">
          <i />
          <i />
          <span>
            <Icon name="book" size={44} />
          </span>
        </div>
      </section>
      <div className="resource-grid">
        {resources.map(([title, desc, time, icon]) => (
          <article className="card resource-card" key={title}>
            <span>
              <Icon name={icon} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <small>{time}</small>
            </div>
            <button className="icon-btn">
              <Icon name="arrow" size={18} />
            </button>
          </article>
        ))}
      </div>
    </Page>
  );
}

function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-title">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <EmptyApiNote />
      </section>
      {children}
    </>
  );
}

function AuthPage({
  onAuthenticated,
  onBrowseJobs,
}: {
  onAuthenticated: () => void;
  onBrowseJobs: () => void;
}) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState("");

  const switchMode = (nextMode: "signin" | "signup") => {
    setMode(nextMode);
    setNotice("");
    setShowPassword(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice("");
    window.setTimeout(() => {
      setIsSubmitting(false);
      onAuthenticated();
    }, 650);
  };

  return (
    <main className="auth-page">
      <section className="auth-story">
        <div className="auth-story-top">
          <Logo light />
          <button onClick={onBrowseJobs}>
            Browse open roles <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="auth-story-content">
          <p className="eyebrow">Your career, clearly organized</p>
          <h1>
            The next chapter of your career <em>starts here.</em>
          </h1>
          <p>
            Discover relevant roles, track every application, and show up prepared for what comes
            next.
          </p>
          <div className="auth-benefits">
            <div>
              <span>
                <Icon name="briefcase" size={19} />
              </span>
              <p>
                <strong>One clear view</strong>
                Applications, interviews, and exams in one place.
              </p>
            </div>
            <div>
              <span>
                <Icon name="check" size={19} />
              </span>
              <p>
                <strong>Always prepared</strong>
                Keep documents current and never miss a deadline.
              </p>
            </div>
          </div>
        </div>
        <div className="auth-proof">
          <div className="proof-avatars">
            <span>MK</span>
            <span>AR</span>
            <span>JD</span>
          </div>
          <p>
            <strong>2,400+ applicants</strong>
            are building their next move with TechIgnite
          </p>
        </div>
        <div className="auth-orbit orbit-one" />
        <div className="auth-orbit orbit-two" />
      </section>

      <section className="auth-panel">
        <div className="auth-mobile-brand">
          <Logo />
          <button onClick={onBrowseJobs}>Browse jobs</button>
        </div>
        <div className="auth-box">
          <div className="auth-heading">
            <p className="eyebrow">{mode === "signin" ? "Welcome back" : "Join TechIgnite"}</p>
            <h2>
              {mode === "signin" ? "Sign in to your account" : "Create your applicant profile"}
            </h2>
            <p>
              {mode === "signin"
                ? "Continue managing your applications and opportunities."
                : "Start applying and keep your entire job search organized."}
            </p>
          </div>

          <div className="auth-tabs" role="tablist" aria-label="Authentication options">
            <button
              role="tab"
              aria-selected={mode === "signin"}
              className={mode === "signin" ? "active" : ""}
              onClick={() => switchMode("signin")}
            >
              Sign in
            </button>
            <button
              role="tab"
              aria-selected={mode === "signup"}
              className={mode === "signup" ? "active" : ""}
              onClick={() => switchMode("signup")}
            >
              Create account
            </button>
          </div>

          <form className="auth-form" onSubmit={submit}>
            {mode === "signup" && (
              <div className="auth-name-row">
                <label>
                  First name
                  <input name="firstName" autoComplete="given-name" placeholder="Jordan" required />
                </label>
                <label>
                  Last name
                  <input name="lastName" autoComplete="family-name" placeholder="Lee" required />
                </label>
              </div>
            )}
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span className="auth-label-row">
                Password
                {mode === "signin" && (
                  <button
                    type="button"
                    onClick={() =>
                      setNotice(
                        "A password reset link would be sent through your authentication API.",
                      )
                    }
                  >
                    Forgot password?
                  </button>
                )}
              </span>
              <span className="password-field">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  placeholder={mode === "signin" ? "Enter your password" : "At least 8 characters"}
                  minLength={8}
                  required
                />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>
            {mode === "signup" && (
              <label className="auth-consent">
                <input type="checkbox" required />
                <span>
                  I agree to the <button type="button">Terms of Use</button> and{" "}
                  <button type="button">Privacy Policy</button>.
                </span>
              </label>
            )}
            {notice && <p className="auth-notice">{notice}</p>}
            <button className="auth-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Please wait..."
                : mode === "signin"
                  ? "Sign in to dashboard"
                  : "Create my account"}
              {!isSubmitting && <Icon name="arrow" size={17} />}
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>
          <div className="social-login">
            <button onClick={onAuthenticated}>
              <b>G</b> Google
            </button>
            <button onClick={onAuthenticated}>
              <b>in</b> LinkedIn
            </button>
          </div>
          <p className="auth-switch">
            {mode === "signin" ? "New to TechIgnite?" : "Already have an account?"}{" "}
            <button onClick={() => switchMode(mode === "signin" ? "signup" : "signin")}>
              {mode === "signin" ? "Create an account" : "Sign in instead"}
            </button>
          </p>
          <p className="auth-placeholder">
            <span className="api-dot" /> Demo authentication · Ready for API connection
          </p>
        </div>
      </section>
    </main>
  );
}

function PublicJobs({ onDashboard }: { onDashboard: () => void }) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All roles");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState(jobs[0]);
  const filtered = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (j.role + j.company + j.location).toLowerCase().includes(query.toLowerCase()) &&
          (mode === "All roles" || j.mode === mode),
      ),
    [query, mode],
  );
  return (
    <div className="jobs-page">
      <header className="public-header">
        <Logo />
        <nav>
          <a href="#openings">Find jobs</a>
          <a href="#how">How it works</a>
          <a href="#resources">Career resources</a>
        </nav>
        <div>
          <button className="text-login" onClick={onDashboard}>
            Sign in
          </button>
          <button className="primary-btn" onClick={onDashboard}>
            Applicant dashboard
          </button>
        </div>
      </header>
      <section className="jobs-hero">
        <p className="eyebrow">Build what comes next</p>
        <h1>
          Find work that feels
          <br />
          <em>worth showing up for.</em>
        </h1>
        <p>
          Explore thoughtful opportunities from teams that care about people, progress, and great
          work.
        </p>
        <div className="hero-search">
          <label>
            <Icon name="search" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, skill, or company"
            />
          </label>
          <span />
          <label>
            <Icon name="pin" />
            <input placeholder="City, state, or remote" />
          </label>
          <button
            onClick={() =>
              document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Search jobs <Icon name="arrow" size={18} />
          </button>
        </div>
        <div className="hero-tags">
          <span>Popular:</span>
          {["Product design", "Engineering", "Operations", "Marketing"].map((t) => (
            <button key={t} onClick={() => setQuery(t)}>
              {t}
            </button>
          ))}
        </div>
      </section>
      <main className="job-main" id="openings">
        <div className="jobs-heading">
          <div>
            <p className="eyebrow">Fresh opportunities</p>
            <h2>Roles you might love</h2>
            <p>{filtered.length} opportunities based on your search</p>
          </div>
          <div className="segmented">
            {["All roles", "Remote", "Hybrid"].map((x) => (
              <button className={mode === x ? "active" : ""} onClick={() => setMode(x)} key={x}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="jobs-layout">
          <div className="job-list">
            {filtered.map((job) => (
              <article
                className={`job-card ${selected.id === job.id ? "selected" : ""}`}
                onClick={() => setSelected(job)}
                key={job.id}
              >
                <div className="company-logo job-logo" style={{ background: job.color }}>
                  {job.initials}
                </div>
                <div className="job-card-main">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <button
                    className={`save-btn ${saved.includes(job.id) ? "saved" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSaved((s) =>
                        s.includes(job.id) ? s.filter((i) => i !== job.id) : [...s, job.id],
                      );
                    }}
                    aria-label="Save job"
                  >
                    <Icon name="bookmark" size={19} />
                  </button>
                  <div className="job-meta">
                    <span>
                      <Icon name="pin" size={15} />
                      {job.location}
                    </span>
                    <span>{job.mode}</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="job-bottom">
                    <strong>{job.salary}</strong>
                    <span>{job.age}</span>
                  </div>
                </div>
              </article>
            ))}
            {!filtered.length && (
              <div className="no-results">
                <Icon name="search" size={28} />
                <h3>No matching roles yet</h3>
                <p>Try a broader keyword or view all roles.</p>
                <button
                  onClick={() => {
                    setQuery("");
                    setMode("All roles");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
          <aside className="job-preview card">
            <div className="preview-top">
              <div className="company-logo job-logo" style={{ background: selected.color }}>
                {selected.initials}
              </div>
              <button
                className={`save-btn ${saved.includes(selected.id) ? "saved" : ""}`}
                onClick={() =>
                  setSaved((s) =>
                    s.includes(selected.id)
                      ? s.filter((i) => i !== selected.id)
                      : [...s, selected.id],
                  )
                }
              >
                <Icon name="bookmark" />
              </button>
            </div>
            <p className="eyebrow">{selected.company}</p>
            <h2>{selected.role}</h2>
            <div className="job-meta">
              <span>
                <Icon name="pin" size={15} />
                {selected.location}
              </span>
              <span>{selected.mode}</span>
            </div>
            <button className="primary-btn full">
              Apply for this role <Icon name="arrow" size={17} />
            </button>
            <hr />
            <h3>About the role</h3>
            <p>{selected.description}</p>
            <h3>What you’ll bring</h3>
            <ul>
              <li>4+ years designing digital products</li>
              <li>Strong systems and interaction thinking</li>
              <li>Clear communication and collaboration</li>
            </ul>
            <button className="text-btn">
              View full job description <Icon name="arrow" size={16} />
            </button>
          </aside>
        </div>
      </main>
      <section className="jobs-cta" id="how">
        <p className="eyebrow">Your next move</p>
        <h2>One profile. Better applications.</h2>
        <p>Keep your documents, interviews, and opportunities organized in one calm place.</p>
        <button className="light-btn" onClick={onDashboard}>
          Create your applicant profile <Icon name="arrow" size={17} />
        </button>
      </section>
      <footer>
        <Logo light />
        <span>Placeholder opportunities for API integration</span>
        <span>© 2026 TechIgnite</span>
      </footer>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("auth");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (page === "auth")
    return (
      <AuthPage
        onAuthenticated={() => {
          setIsAuthenticated(true);
          setPage("dashboard");
        }}
        onBrowseJobs={() => setPage("jobs")}
      />
    );
  if (page === "jobs")
    return <PublicJobs onDashboard={() => setPage(isAuthenticated ? "dashboard" : "auth")} />;
  const titles: Record<string, string> = {
    dashboard: "Overview",
    applications: "Applications",
    schedule: "Interviews & exams",
    documents: "Documents",
    profile: "My profile",
    resources: "Resources",
  };
  const navigate = (id: string) => {
    setPage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <Logo />
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <nav>
          {navItems.map((item) => (
            <button
              className={page === item.id ? "active" : ""}
              onClick={() => navigate(item.id)}
              key={item.id}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="support-box">
            <span>
              <Icon name="book" size={18} />
            </span>
            <strong>Need a hand?</strong>
            <p>Visit our applicant help center.</p>
            <button onClick={() => navigate("resources")}>Get support</button>
          </div>
          <button
            className="signout"
            onClick={() => {
              setIsAuthenticated(false);
              navigate("auth");
            }}
          >
            <Icon name="logout" /> Sign out
          </button>
        </div>
      </aside>
      {mobileOpen && (
        <button className="scrim" aria-label="Close menu" onClick={() => setMobileOpen(false)} />
      )}
      <div className="app-main">
        <header className="topbar">
          <div>
            <button className="menu-btn" onClick={() => setMobileOpen(true)}>
              <Icon name="menu" />
            </button>
            <span>{titles[page]}</span>
          </div>
          <div className="top-actions">
            <button className="jobs-link" onClick={() => navigate("jobs")}>
              <Icon name="search" size={17} /> Browse jobs
            </button>
            <button className="notification">
              <Icon name="bell" />
              <i />
            </button>
            <div className="user-chip">
              <div className="avatar">JL</div>
              <span>
                <strong>Jordan Lee</strong>
                <small>Applicant</small>
              </span>
              <Icon name="chevron" size={16} />
            </div>
          </div>
        </header>
        <main className="content">
          {page === "dashboard" ? (
            <Dashboard navigate={navigate} />
          ) : page === "applications" ? (
            <ApplicationsPage />
          ) : page === "schedule" ? (
            <SchedulePage />
          ) : page === "documents" ? (
            <DocumentsPage />
          ) : page === "profile" ? (
            <ProfilePage />
          ) : (
            <ResourcesPage />
          )}
        </main>
      </div>
    </div>
  );
}
