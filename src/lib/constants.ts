// Countries Data
export const COUNTRIES = [
  { id: "uk", name: "United Kingdom", icon: "🇬🇧", regions: ["England", "Scotland", "Wales", "Northern Ireland"] },
  { id: "usa", name: "United States", icon: "🇺🇸", regions: ["New York", "California", "Texas", "Florida"] },
  { id: "canada", name: "Canada", icon: "🇨🇦", regions: ["Ontario", "British Columbia", "Alberta", "Quebec"] },
  { id: "australia", name: "Australia", icon: "🇦🇺", regions: ["New South Wales", "Victoria", "Queensland", "Western Australia"] },
  { id: "nz", name: "New Zealand", icon: "🇳🇿", regions: ["North Island", "South Island"] },
  { id: "germany", name: "Germany", icon: "🇩🇪", regions: ["Bavaria", "Berlin", "North Rhine-Westphalia", "Hamburg"] },
  { id: "netherlands", name: "Netherlands", icon: "🇳🇱", regions: ["Amsterdam", "Rotterdam", "Utrecht", "Groningen"] },
  { id: "france", name: "France", icon: "🇫🇷", regions: ["Île-de-France", "Auvergne-Rhône-Alpes", "Provence", "Brittany"] },
];

// Services Data
export const SERVICES = [
  {
    id: "study-abroad",
    name: "Study Abroad",
    description: "Get admitted to top universities worldwide",
    icon: "GraduationCap",
  },
  {
    id: "visa-services",
    name: "Visa Services",
    description: "Complete visa processing and documentation support",
    icon: "Passport",
  },
  {
    id: "test-preparation",
    name: "Test Preparation",
    description: "IELTS, TOEFL, GRE, GMAT preparation courses",
    icon: "BookOpen",
  },
];

// Universities Data
export const UNIVERSITIES = [
  {
    id: 1,
    name: "University of Oxford",
    country: "uk",
    ranking: 1,
    location: "Oxford, England",
    intakes: ["January", "September"],
  },
  {
    id: 2,
    name: "University of Cambridge",
    country: "uk",
    ranking: 2,
    location: "Cambridge, England",
    intakes: ["January", "September"],
  },
  {
    id: 3,
    name: "Harvard University",
    country: "usa",
    ranking: 3,
    location: "Cambridge, Massachusetts",
    intakes: ["August"],
  },
  {
    id: 4,
    name: "Stanford University",
    country: "usa",
    ranking: 4,
    location: "Stanford, California",
    intakes: ["September"],
  },
  {
    id: 5,
    name: "University of Toronto",
    country: "canada",
    ranking: 5,
    location: "Toronto, Ontario",
    intakes: ["January", "September"],
  },
  {
    id: 6,
    name: "University of Melbourne",
    country: "australia",
    ranking: 6,
    location: "Melbourne, Victoria",
    intakes: ["February", "July"],
  },
  {
    id: 7,
    name: "University of Auckland",
    country: "nz",
    ranking: 7,
    location: "Auckland, North Island",
    intakes: ["February", "July"],
  },
  {
    id: 8,
    name: "Heidelberg University",
    country: "germany",
    ranking: 8,
    location: "Heidelberg, Bavaria",
    intakes: ["October", "April"],
  },
];

// Application Status Options
export const APPLICATION_STATUSES = [
  { value: "draft", label: "Draft", color: "gray" },
  { value: "submitted", label: "Submitted", color: "blue" },
  { value: "under-review", label: "Under Review", color: "yellow" },
  { value: "shortlisted", label: "Shortlisted", color: "green" },
  { value: "accepted", label: "Accepted", color: "emerald" },
  { value: "rejected", label: "Rejected", color: "red" },
];

// Visa Status Options
export const VISA_STATUSES = [
  { value: "not-started", label: "Not Started", color: "gray" },
  { value: "in-progress", label: "In Progress", color: "blue" },
  { value: "documents-pending", label: "Documents Pending", color: "yellow" },
  { value: "submitted", label: "Submitted", color: "orange" },
  { value: "approved", label: "Approved", color: "emerald" },
  { value: "rejected", label: "Rejected", color: "red" },
];

// Intake Options
export const INTAKES = [
  { value: "january", label: "January Intake" },
  { value: "february", label: "February Intake" },
  { value: "april", label: "April Intake" },
  { value: "july", label: "July Intake" },
  { value: "august", label: "August Intake" },
  { value: "september", label: "September Intake" },
  { value: "october", label: "October Intake" },
];

// Mock User Data
export const MOCK_USER = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  role: "student",
};

// Mock Applications Data
export const MOCK_APPLICATIONS = [
  {
    id: "app-1",
    studentId: "user-1",
    universityId: 1,
    universityName: "University of Oxford",
    program: "Master of Science in Computer Science",
    country: "United Kingdom",
    status: "accepted",
    appliedDate: "2024-01-15",
    deadline: "2024-03-31",
    decision: "Accepted",
    decisionDate: "2024-02-28",
    intakeSemester: "September 2024",
  },
  {
    id: "app-2",
    studentId: "user-1",
    universityId: 3,
    universityName: "Harvard University",
    program: "Master of Business Administration",
    country: "United States",
    status: "under-review",
    appliedDate: "2024-01-20",
    deadline: "2024-04-30",
    decision: null,
    decisionDate: null,
    intakeSemester: "August 2024",
  },
  {
    id: "app-3",
    studentId: "user-1",
    universityId: 5,
    universityName: "University of Toronto",
    program: "Master of Engineering",
    country: "Canada",
    status: "submitted",
    appliedDate: "2024-02-01",
    deadline: "2024-05-31",
    decision: null,
    decisionDate: null,
    intakeSemester: "September 2024",
  },
];

// Mock Visa Data
export const MOCK_VISA = {
  studentId: "user-1",
  country: "United Kingdom",
  visaType: "Student Visa",
  status: "documents-pending",
  startDate: "2024-02-01",
  expectedApprovalDate: "2024-06-15",
  passportNumber: "A12345678",
  passportExpiry: "2029-05-20",
  documents: [
    { id: 1, name: "Passport", status: "uploaded", uploadedDate: "2024-02-05" },
    { id: 2, name: "Acceptance Letter", status: "pending", uploadedDate: null },
    { id: 3, name: "Financial Documents", status: "pending", uploadedDate: null },
    { id: 4, name: "Medical Certificate", status: "in-review", uploadedDate: "2024-02-10" },
  ],
};

// Mock Appointments Data
export const MOCK_APPOINTMENTS = [
  {
    id: "apt-1",
    studentId: "user-1",
    type: "Visa Consultation",
    date: "2024-03-15",
    time: "10:00 AM",
    advisor: "Sarah Johnson",
    status: "scheduled",
    location: "Online",
  },
  {
    id: "apt-2",
    studentId: "user-1",
    type: "Document Review",
    date: "2024-03-20",
    time: "2:00 PM",
    advisor: "Michael Chen",
    status: "completed",
    location: "Office - Room 101",
  },
];

// Mock Messages Data
export const MOCK_MESSAGES = [
  {
    id: "msg-1",
    senderId: "advisor-1",
    senderName: "Sarah Johnson",
    studentId: "user-1",
    content: "Hi John, I have reviewed your application. Everything looks good!",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: "msg-2",
    senderId: "user-1",
    senderName: "You",
    studentId: "user-1",
    content: "Thank you Sarah! When can we schedule the next meeting?",
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    read: true,
  },
];
