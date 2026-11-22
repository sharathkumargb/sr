# CodeWithSharu — website project

A responsive student learning website containing:
- CodeWithSharu branding and generated logo
- Short resume for Sharath Kumar GB
- 12 Git experiments transcribed from the supplied `Git Experiments.pdf`
- 20 Java console programs
- C DSA examples grouped into linear and non-linear structures
- Medicine expiry tracker (browser-local storage)
- Private-registration integration template using Firebase
- Number sliding puzzle

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use VS Code Live Server.
4. No Java server is required for this static learning site.

## Publish free with GitHub Pages
1. Create a GitHub repository, e.g. `codewithsharu`.
2. Upload the contents of this folder (keep `index.html` at repository root).
3. Open repository Settings → Pages.
4. Under Build and deployment, select Deploy from a branch, choose `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Important: private registration setup
A static GitHub Pages site cannot securely keep a private list of registrations by itself. The form is intentionally not pretending to save data until a backend is configured.

To enable private registrations:
1. Create a Firebase project at https://console.firebase.google.com/
2. Add a Web App and copy its config into a copy of `firebase-config.example.js` named `firebase-config.js`.
3. Enable Cloud Firestore.
4. Enable Firebase Authentication → Sign-in method → Email/Password. Create your owner account.
5. Copy your owner UID from Firebase Authentication → Users.
6. In `firestore.rules`, replace `REPLACE_WITH_OWNER_UID` with your owner UID and publish the rules.
7. Set `OWNER_UID` in `firebase-config.js` if you later add the owner-only admin page.
8. In `index.html`, uncomment:
   `<script type="module" src="firebase-register.js"></script>`
9. Remove the demo registration submit handler from `app.js` (the `registerForm` listener near the bottom), so only the Firebase handler processes registration.
10. Add `firebase-config.js` to `.gitignore` if you prefer not to publish your project configuration. Firebase web config is not a secret, but the Firestore rules are the actual access control. Never publish service-account keys.

**Viewing registrations:** Sign into Firebase Console → Firestore Database → `registrations`. Only the owner UID allowed by the Firestore rules can read these records. Do not create a public read rule.

## Medicine tracker limitations
Medicine records are stored in the current browser's localStorage, not synced across devices. This version calculates expired / expiring within 30 days when the page is opened. It does not guarantee background push notifications. The tracker is not medical advice.

## Content note
The Git section reflects the 12 experiments in the supplied PDF. Branch names and examples such as `master`, `main`, and sample commit hashes are retained as examples from the source. Use the commit hash from your own `git log` output when practising.
