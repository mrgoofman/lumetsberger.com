---
title: "From Chaos to Clarity: How I Built a Chrome Plugin to Save References (in Just 2 Hours)"
date: "2025-10-02"
excerpt: "Learn how I built a custom Chrome extension in 2 hours to solve reference chaos across Instagram, YouTube, and LinkedIn. From Firebase integration to team collaboration - a complete breakdown of building productivity tools that actually work."
---

# From Chaos to Clarity: How I Built a Chrome Plugin to Save References (in Just 2 Hours)

Do you know that moment when you remember a specific reference you need for a pitch, or to show to someone — but no matter how hard you dig, you can't find it? I've had this countless times. A few weeks ago it happened again, and I decided enough was enough. That was the spark for my new vibecode project.

Everyone knows the chaos of saving references. No matter which platform you're on — Instagram, LinkedIn, Pinterest, YouTube — the "Save" functionality usually sends things into a black hole of folders you'll never revisit.

Some people copy-paste into Google Sheets, Notion, or other tools. I tried them too. But for me (and especially for us at FOOH.com, where collecting references is part of the daily routine) it simply didn't work. Why? It just took too long. I'd have to open an app, find the right sheet, scroll… it was just too much friction. Sometimes it even made me reconsider saving the reference at all.

⸻

## Reference Workflow Analysis

When I looked at my workflow, I realized most of the references I was saving were for FOOH. So the question became: how can I make something useful not just for me, but for the whole team?

We needed something simple, fast, and collaborative. Existing solutions were either overpriced or didn't fit our workflow. So I decided to build my own with a little help from my good ol' buddy Claude Code.

⸻

## Building the Plugin

I'd never built a Chrome plugin before, but within 2 hours I had a working version.

![Chrome Plugin Interface](save-reference-chrome-plugin.jpeg)

My quick analysis gave me a starting point:

* Every platform we use runs in the browser.
* We all use Google Chrome.
* All references should land in the same destination.

That pointed to a Chrome plugin.

Next, I listed the information I wanted to capture:

* Title
* Category (fooh, dooh, fooh_ai, etc.)
* Notes
* URL

Since every platform works differently, I added platform-specific rules. For example:

* On YouTube, the plugin grabs the URL from the address bar.
* On Instagram, it takes the link from the clipboard.

At first, I tried saving directly to Google Sheets, but authentication didn't work without publishing the plugin on the Chrome Store — which I didn't want. After some brainstorming with ChatGPT, I found a workaround: Firebase.

So the final tech stack became:

1. Plugin collects info (title, category, notes, URL).
2. Data is sent to Firebase.
3. Firebase syncs everything into a shared Google Sheet.

⸻

## Benefits & Outcomes

Now, everyone on the team has the plugin installed in their Chrome browser. Whenever someone sees a relevant reference, it takes seconds to save it to the unified database. From there, it can be further processed or annotated by the person responsible.

The biggest benefit is simple: time saved.

References are categorized right away, notes make them searchable, and everything lands in one central sheet. What used to be scattered chaos is now a clean, shared library.

⸻

## Next Steps

Next up I want to add a Telegram bot. The idea: when you find a reference on your phone, you share it into a Telegram group. The bot forwards it to Firebase, which syncs it to the Google Sheet. Mobile reference-saving solved.

⸻

## Takeaway

It's insane what's possible today. I had never developed a Chrome plugin before. But by asking the right questions to ChatGPT and handing execution to Claude Code, I built the whole thing in just about 2 hours.

The ROI was probably reached in the first week, since the whole team now uses it daily.

My takeaway: if something slows you down daily, don't wait for the perfect SaaS. Sometimes it's faster (and way more fun) to build the tool yourself.

--
*Moritz*