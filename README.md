Overview

X AutoComment is a lightweight Chrome extension that assists users in drafting replies on X (formerly Twitter).
When viewing a post, the extension allows you to insert a randomized, pre-written reply draft into the reply box with a single click.

Important:
This extension does not automatically post replies. The user must manually review and submit each reply. This design ensures human control and reduces the risk of violating X’s automation and spam policies.

Key Features

Detects when you open an individual X post (/status/ URLs)

Displays a floating “Insert draft reply” button

Inserts a randomized reply into the active reply textbox

Works with X’s single-page application (SPA) navigation

No login handling, no API usage, no auto-submission

Intended Use Cases

This extension is useful for:

Social media managers engaging manually with many posts

Community managers drafting polite, neutral replies quickly

Users who want reply templates without repetitive typing

Semi-automated workflows where human approval is required

Example Scenarios

Drafting courteous acknowledgments on industry posts

Quickly responding during live discussions or events

Reducing typing friction while keeping replies manual

Non-Goals (Explicitly Not Supported)

This extension does NOT:

Automatically post or submit replies

Bypass X rate limits or safeguards

Perform background automation

Scrape data or collect user credentials

Any attempt to modify it for full automation may violate platform policies and is strongly discouraged.

Installation
Prerequisites

Google Chrome (or Chromium-based browser)

Developer mode enabled for extensions

Step-by-Step Installation

Clone or download this repository:

git clone https://github.com/your-username/Chrome-Extension-X-AutoComment.git


Open Chrome and navigate to:

chrome://extensions


Enable Developer mode (top-right corner)

Click Load unpacked

Select the root folder of this repository

The extension will now appear in your extensions list and activate automatically on x.com.

How to Use

Navigate to https://x.com

Open any individual post (URL contains /status/)

Click Reply to open the reply editor

Click the floating “Insert draft reply” button

A randomized reply will be inserted into the textbox

Review or edit the text as needed

Manually click Post

Example Draft Replies

The extension randomly selects from predefined replies such as:

“Interesting perspective — thanks for sharing.”

“This is helpful, appreciate the insight.”

“Good point. Curious to see how this develops.”

“Thanks for posting this.”

“Well said. Looking forward to more.”

These can be fully customized in content.js.

Customization
Modify Reply Texts

Edit the replies array in content.js:

const replies = [
  "Interesting perspective — thanks for sharing.",
  "Appreciate this insight.",
  "This aligns with what I’ve been seeing as well."
];

Styling the Button

The floating button can be customized via styles.css, including:

Position

Color

Size

Border radius

Technical Details

Built using Manifest V3

Uses MutationObserver to handle X’s dynamic DOM

No external dependencies

Runs entirely as a content script

Compliance & Responsibility

This extension is intentionally designed to:

Require explicit user interaction

Avoid repetitive auto-posting

Preserve user intent and control

Users are responsible for ensuring their activity complies with:

X Terms of Service

X Automation and Spam Policies

Applicable laws and regulations

Known Limitations

X DOM structure changes may require selector updates

Only works on individual post pages (/status/)

Does not support replies in timelines or notifications without opening the post

Future Enhancements (Optional)

Potential improvements include:

Context-aware reply generation

CSV-based personalization

Daily usage limits

Confirmation dialog before insertion

Multiple reply tone profiles

License

MIT License
Use, modify, and distribute responsibly.
