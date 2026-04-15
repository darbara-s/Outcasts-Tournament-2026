# Cricket Tournament Management App - PRD

**Tournament Dates:**
- **First Weekend:** Saturday, July 5 - Sunday, July 6, 2025
- **Second Weekend:** Saturday, July 12 - Sunday, July 13, 2025

**Tournament Overview:**
- **Team Count:** 8-16 teams
- **Winner Prize:** €1,000
- **Entry Fee:** €250 per team
- **Total Prize Pool:** €1,000 (adjustable based on final team count)

---

## 1. Product Vision

A **modern, native mobile app experience** for cricket tournament management and team registration. The app combines **high-energy cricket competition vibes** (inspired by IPL T20 and ICC tournaments) with functional team management, sponsor visibility, and seamless registration workflows.

**Design Aesthetic:** Modern sports tech with bold typography, dynamic animations, card-based layouts, and vibrant accent colors. The UI should feel premium, energetic, and immediately recognizable as a cricket competition platform.

---

## 2. Core Features & Specifications

### 2.1 Navigation Structure (Bottom Tab Navigation)

**Native Mobile App UX Pattern:** Bottom navigation bar with 4 main sections:

1. **Home** - Tournament information & overview
2. **Teams** - Browse participating teams
3. **Sponsors** - Sponsor showcase & partnership opportunities
4. **My Team** - Team registration & member management (authenticated)

---

### 2.2 Feature 1: Home Page (Tournament Overview)

**Purpose:** Showcase tournament excitement with key info and registration CTAs.

#### Layout & Content:

**Hero Section:**
- Large, eye-catching header with tournament name/logo
- Cricket-themed background animation (flying ball, dynamic particle effects, or gradient mesh)
- Event dates prominently displayed (July 5-6 & 12-13, 2025)
- Quick stat cards in a horizontal scroll: Prize Money (€1,000), Team Capacity (8-16), Entry Fee (€250)

**Tournament Info Card:**
- Tournament format (e.g., "T20 Cricket League - Double Round Robin")
- Dates & venue information
- Tournament rules/highlights section with collapsible accordion

**Call-to-Action Section:**
- **Primary CTA Button:** "Register Team" → Opens registration form modal
- **Secondary CTA Button:** "Contact via WhatsApp" → Opens WhatsApp contact link
- Both buttons have hover animations and icon indicators

**Registration Form Modal (Opens on "Register Team"):**
- Fields:
  - Team Name (text input, required)
  - Team Captain Name (text input, required)
  - Contact Number (phone input, required, must be validated)
  - Email (email input, required)
  - Additional Notes (optional textarea)
- Submit button with loading state animation
- On submit:
  - Send email notification to tournament admin
  - Add entry to Google Sheets (tournament_registrations sheet)
  - Show success confirmation modal
  - Generate unique team code for captain

**Animations & Interactions:**
- Page load: Staggered reveal of hero, cards, and CTA sections
- Stat cards: Floating/pulsing animations on numbers
- Buttons: Smooth color transition, scale effect on hover/press
- Form inputs: Smooth focus states with color underline animation

**Colors & Typography:**
- Use bold, energetic color palette (reference IPL: navy, gold/orange accents, electric blue)
- Display font for headings (e.g., Playfair Display, Space Grotesk Bold)
- Clean, modern sans-serif for body text

---

### 2.3 Feature 2: Teams Page (Participating Teams Directory)

**Purpose:** Display all registered teams with detailed information.

#### Layout & Content:

**Page Header:**
- "Participating Teams" title with animated counter showing total teams (e.g., "12/16 Teams Registered")
- Search bar to filter teams by name

**Empty State (Initial):**
- Creative animated illustration (e.g., cricket bat + ball with subtle motion, or silhouetted team figures appearing)
- Headline: "Teams are loading for the game..."
- Subtext: "Check back soon to see registered teams"
- Soft background animation (gradient shift or floating particles)

**Teams List (After Admin Enables):**
- Each team displayed as a **collapsible card** with:
  - Team name & logo placeholder
  - Team captain name with small avatar/initial circle
  - Win record (if applicable) / Seeding rank
  - Quick stats: Wins-Losses-Draws (T-W-L format)
  - "View Full Team" button or tap to expand

**Team Detail Modal/Expanded View:**
- Team name, captain, contact info
- Full team roster (up to 13 members)
  - Player name, role (batsman/bowler/all-rounder), jersey number
- Team colors/badge
- Match statistics (if tournament started)
- Close button or swipe to dismiss

**Animations & Interactions:**
- Empty state: Subtle floating motion on illustration elements
- Cards appear with staggered animation as teams load
- Tap to expand: Smooth card elevation and content reveal
- Team member list scrolls horizontally or in a grid

---

### 2.4 Feature 3: Sponsors Page (Partner Showcase)

**Purpose:** Display sponsors and provide partnership CTAs.

#### Layout & Content:

**Page Header:**
- "Tournament Sponsors" with motivational tagline
- Subtext explaining sponsorship benefits

**Sponsor Grid/List:**
- Each sponsor displayed as a **branded card** with:
  - Sponsor logo (prominent, centered)
  - Sponsor name
  - Sponsor category/type (e.g., "Official Title Sponsor", "Equipment Partner")
  - Short description (1-2 lines)
  - Website link button (opens in new tab)
  - Location/address (if applicable)

**Become a Sponsor Section:**
- Headline: "Partner With Us"
- CTA buttons:
  - **WhatsApp Button:** Opens WhatsApp chat to tournament admin
  - **Email Button:** Opens email client with pre-filled subject "Sponsorship Inquiry"
- Optional: "Benefits of Sponsorship" accordion with tiers (Platinum, Gold, Silver, Bronze)

**Animations & Interactions:**
- Sponsor cards scale slightly on hover with shadow elevation
- Logo images fade in as page loads
- CTA buttons have smooth transitions and icon animations

**Design Notes:**
- Use clean, minimal card layout to let sponsor branding shine
- Maintain consistent spacing and grid alignment
- Dark or light background depending on sponsor logo contrast

---

### 2.5 Feature 4: My Team Page (Authenticated Section)

**Purpose:** Allow team captains to register/manage team members.

**Authentication:**
- **Login Screen** (appears first visit):
  - Username field (case-sensitive)
  - Password field (masked input)
  - "Login" button
  - Error messaging for invalid credentials
  - Session persistence (local storage with secure flag)
  
**Pre-Defined Credentials:**
- 16 unique username/password pairs (one per team captain)
- Format example: `team_001 / password123` through `team_016 / password123`
- Credentials list provided separately to team captains

**Post-Login: Team Management Screen:**

#### Section 1: Team Overview Card
- Team Name (read-only or editable, displays during registration)
- Team Code (unique identifier, copy-to-clipboard functionality)
- Entry Status: "Registered" / "Pending Review" with status badge
- Total Members: Counter (e.g., "8/13 members registered")

#### Section 2: Add Team Members Form
- Player Name (text input, required)
- Player Role (dropdown: Batsman / Bowler / All-rounder / Wicket-Keeper, required)
- Jersey Number (numeric input 1-99, required, must be unique per team)
- Add Member button
- Loading state animation on submit

#### Section 3: Team Roster List
- List of added team members (scrollable)
- Each member card shows: Name, Role, Jersey #
- Edit button (pencil icon) - allows updating member details
- Delete button (trash icon) - removes member with confirmation
- Drag-to-reorder functionality (optional, for batting order)
- Empty state: "No members added yet. Add your first player!"

#### Section 4: Logout
- Simple logout button at bottom with confirmation modal

**Animations & Interactions:**
- Page load: Smooth fade-in of team overview and roster sections
- Form submission: Button loading spinner, success toast notification
- Member added: New member slides in from bottom with stagger animation
- Member deleted: Slide-out animation with confirmation first
- Error states: Shake animation on input fields with red border

**Validation:**
- Player names: Min 2 chars, max 50 chars, alphanumeric + spaces
- Jersey numbers: 1-99, must be unique within team
- Role: Must be selected from dropdown
- Max 13 members per team (disable add button once limit reached)

**Data Persistence:**
- All team member data stored locally and synced to Google Sheets on each update
- Google Sheet columns: Team Code, Player Name, Role, Jersey Number, Timestamp

---

## 3. Technical Specifications

### 3.1 Tech Stack
- **Frontend Framework:** React.js (functional components + hooks)
- **Styling:** Tailwind CSS + custom CSS for animations
- **Forms:** React Hook Form or similar for validation
- **Animations:** Framer Motion or CSS keyframes
- **Backend:** Node.js + Express (lightweight API for form submissions)
- **Database:** Google Sheets API (for storing registrations & team rosters)
- **Email Service:** Nodemailer or SendGrid (for registration notifications)
- **Hosting:** Vercel or Netlify

### 3.2 Mobile-First Design Constraints
- **Viewport:** Design for 375px (iPhone SE) up to 768px (iPad)
- **Safe Areas:** Account for notches and bottom safe area on iOS
- **Touch Targets:** Minimum 48x48px for buttons and interactive elements
- **Performance:** Lazy load images, optimize animations for 60fps
- **Responsive:** Single-column layout on mobile, 2-column on tablets

### 3.3 Responsive Breakpoints
- Mobile: 320px - 480px (primary target)
- Tablet: 481px - 768px
- Desktop: 769px+ (secondary, not primary focus)

### 3.4 External Integrations

**Google Sheets API:**
- Sheet 1: `tournament_registrations` - Team registration data
- Sheet 2: `team_rosters` - Team member data (Team Code, Player Name, Role, Jersey #)
- Authentication: Service account or OAuth 2.0

**Email Service:**
- Send confirmation emails to admin on new team registration
- Send receipt to team captain with unique team code
- Template-based emails with tournament branding

**WhatsApp Integration:**
- WhatsApp Web link with pre-filled messages
- Format: `https://wa.me/{phoneNumber}?text={encodedMessage}`
- Pre-filled messages for "Register Team" and "Become Sponsor" CTAs

---

## 4. Authentication & Security

- **Login:** Session-based with localStorage (token stored securely)
- **Logout:** Clear session, redirect to login
- **Protected Routes:** My Team section requires valid login
- **HTTPS Only:** All API calls over HTTPS
- **Input Validation:** Server-side validation for all form submissions
- **Rate Limiting:** Prevent brute force attacks on login endpoint

---

## 5. User Flows

### Flow 1: New Team Registration (Visitor)
1. Visitor lands on Home page
2. Clicks "Register Team" CTA
3. Form modal opens
4. Fills team name, captain name, contact number, email
5. Submits form
6. Email sent to admin + entry in Google Sheets
7. Success modal with team code displayed
8. Visitor shares team code with captain

### Flow 2: Team Captain Adds Members (Authenticated)
1. Team captain receives team code via email
2. Opens app, navigates to My Team
3. Prompted to login with credentials provided
4. After login, sees empty roster
5. Clicks "Add Member" form
6. Enters player details (name, role, jersey #)
7. Member appears in roster below form
8. Repeats until all members added (max 13)
9. Logs out or navigates elsewhere

### Flow 3: Browse Teams (Any User)
1. User navigates to Teams tab
2. Sees empty state animation initially
3. As admin enables teams, they appear in list
4. User taps a team to see full roster
5. Returns to list via back/close button

### Flow 4: Sponsor Inquiry
1. User navigates to Sponsors page
2. Sees sponsor grid with contact CTAs
3. Clicks "Become Sponsor" WhatsApp button
4. WhatsApp opens with pre-filled message to admin
5. Or clicks email button to send inquiry via email

---

## 6. Admin Features (Backend - Not in App UI)

**Admin Dashboard (separate interface):**
- List of registered teams
- Toggle to "enable/disable" team visibility in Teams page
- View and manage sponsor list
- Monitor team roster submissions
- Export data (teams, rosters, sponsors) as CSV/Excel
- Email templates editor
- WhatsApp contact settings

---

## 7. Color Palette & Design System

**Primary Colors:**
- **Deep Navy:** `#0A1428` (backgrounds, headers)
- **Vibrant Orange:** `#FF8C00` (primary CTA, accents) - IPL vibes
- **Electric Blue:** `#00D4FF` (secondary accent, animations)
- **White/Off-White:** `#F8FAFB` (cards, body background)

**Accent Colors:**
- **Green:** `#00D98E` (success states)
- **Red:** `#FF3B3B` (error states, delete actions)
- **Amber:** `#FFC107` (warnings, info badges)

**Typography:**
- **Display Font:** Space Grotesk Bold (headings, hero text)
- **Body Font:** Inter or DM Sans (body text, forms)
- **Monospace (optional):** JetBrains Mono (team codes, stats)

**Spacing System:** 4px base unit (4, 8, 12, 16, 24, 32, 48px)

---

## 8. Animations & Micro-Interactions

**Page Load Animations:**
- Staggered fade-in of sections (0.3s delay between each)
- Hero image slides down with fade
- Stat cards bounce in from sides
- CTA buttons scale up with opacity

**Form Interactions:**
- Input focus: Bottom border animates to primary color (300ms)
- Input error: Shake animation + red border
- Submit button: Loading spinner animation (looping dots)
- Success: Checkmark animation + toast notification slides up

**Navigation:**
- Tab bar icons scale on tap (0.1s press animation)
- Page transitions: Smooth fade or slide (200ms)
- Back button: Scale down on press

**Card Interactions:**
- Hover/press: Scale 1.02 + slight shadow elevation
- Expand animation: Max-height animation from 0 to full height
- Delete confirmation: Modal scales in from center

**Empty States:**
- Illustration floats with 3px vertical translation (2s loop)
- Particles or shapes move subtly in background
- Gradient background animates (20s linear loop)

---

## 9. Success Metrics & Analytics

**Tracking (Optional):**
- Page views per section
- Form submission rate
- Registration completion time
- Team member addition rate
- Button click rates (CTAs)

---

## 10. Constraints & Assumptions

- Maximum 16 teams (pre-defined usernames)
- Maximum 13 members per team
- Single team per login session
- Tournament dates: July 5-6 & 12-13, 2025
- Admin controls visibility of teams (not real-time)
- Google Sheets integration via API
- Email notifications required for admin oversight

---

## 11. Future Enhancements (Post-MVP)

- Live scoring and match updates
- Team rankings and leaderboard
- Match schedule with calendar integration
- Player performance statistics
- Push notifications for match alerts
- Social sharing (Twitter, Instagram)
- Payment integration (€250 entry fee collection)
- Team chat/messaging feature
- Photo gallery from matches

---

## 12. Design References

**Visual Inspiration:**
- IPL T20 Cricket League: `https://www.iplt20.com/` - Bold colors, dynamic layouts, energetic vibe
- ICC Cricket: `https://www.icc-cricket.com/` - Premium branding, clear information hierarchy

**Aesthetic Direction:**
- **Tone:** Energy, excitement, premium sports tech
- **Layout:** Modern card-based, generous spacing, asymmetrical accents
- **Motion:** High-impact page loads, subtle hover states, celebratory interactions
- **Feel:** Native mobile app experience with bottom nav, smooth transitions

---

## 13. Deliverables Checklist

- [ ] Figma design mockups (mobile & tablet)
- [ ] React component library (reusable UI kit)
- [ ] Fully functional web app (desktop/mobile responsive)
- [ ] Google Sheets API integration
- [ ] Email notification system
- [ ] Admin dashboard (separate interface)
- [ ] Deployment on Vercel/Netlify
- [ ] Documentation & setup guide
- [ ] Testing (unit, integration, E2E)

---

## 14. Timeline Estimate

- **Design & Setup:** 3-5 days
- **Frontend Development:** 7-10 days
- **Backend & Integrations:** 5-7 days
- **Testing & QA:** 3-5 days
- **Deployment & Launch:** 2-3 days

**Total Estimate:** 20-30 days from start to production launch

---

## 15. Success Criteria

- App loads in <2 seconds on 4G network
- All forms submit successfully to Google Sheets
- Email notifications received by admin
- Team captains can add up to 13 members without errors
- Bottom navigation smooth and responsive
- Mobile animations run at 60fps
- No console errors in production
- Cross-browser compatibility (Chrome, Safari, Firefox)

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Status:** Ready for Development
