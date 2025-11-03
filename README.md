# Volunteer Card

## About the Task

This project is a practical assignment for Sobbatical Impact Travel, where the goal is to design a reusable and responsive Volunteer Card component. The card highlights volunteer opportunities, making it easy for users to find meaningful ways to make a social impact. It demonstrates the ability to translate design requirements into a clean, modular user interface, with attention to usability and maintainability.

## Solution Approach

- **Structure:**
  The project uses vanilla JavaScript (ES6 modules) with a modular file structure:
  - `index.html`: Page layout and card container
  - `script.js`: Main logic, component rendering, interactivity (like/heart, modal window)
  - `styles.css`: Responsive card and modal styling
  - Static dummy data is defined directly in the JS, simulating a typical API response.

* **UI / Features:**
  - Card displays organization name, location, impact area, description, and interactive heart (“like”) button.
  - "Apply Now" button opens a modal form to submit name, surname, and email.
  - Liked cards are visually tracked, and the UI highlights which cards are liked/saved.
  - On hover, cards slightly zoom with a color-shadow transition for visual feedback.
  - All components are styled to work on both desktop and mobile screens, with accessible font sizes and touch-friendly UI elements.
* **Reasoning:**
  While React.js and Tailwind were recommended, I chose plain ES6 and CSS for maximum transparency, ease of review, and because the required interactivity is straightforward. Adapting this to React or another SPA framework would be easy given the code's separation of UI logic and data.

---

## What I’d Improve with More Time

- **Framework migration:** Move to React with TypeScript and Tailwind CSS for type safety, prop validation, and easier scalability.
- **Persistent state:** Save liked cards using localStorage.
- **API integration:** Replace static data with a mock fetch from a local JSON file or API endpoint.
- **Form validation:** Add improved validation and error feedback for the modal form (e.g., highlight invalid email).
- **Accessibility:** Ensure the modal is fully keyboard accessible, and add ARIA labels for screen readers.
- **Testing:** Add basic UI and functional tests for the card logic and modal interactions.

---

## Assumptions & Creative Decisions

- The project is implemented using ES6 modules and standard CSS for fast prototyping and review.
- Form submissions in the modal just simulate an application; no backend integration is present.
- Liked/saved state is maintained only for the session and not persisted beyond reload.
- Styles are custom, inspired by Tailwind's look, but written in plain CSS for this exercise.

---

## Setup & Running

1. **Clone or download this repository.**
2. Open `index.html` directly in your browser – no build step required.
3. If using a module-friendly web server (recommended for full ES6 features), run:

   <pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded font-mono text-sm font-normal bg-subtler"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end md:sticky md:top-[100px]"><div class="overflow-hidden rounded-full border-subtlest ring-subtlest divide-subtlest bg-base"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtler"></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-subtle py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div><span><code><span><span>npx serve .
   </span></span><span></span></code></span></div></div></div></pre>

   and visit the provided localhost URL.

---

## Live Demo

GitHub Link: https://anastasiia-trofymenko.github.io/volunteer-card/

\*also pinned in About section on repository page

Netlify Link: https://stalwart-torte-e57415.netlify.app/
