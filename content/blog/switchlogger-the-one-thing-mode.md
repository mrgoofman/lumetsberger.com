---
title: "From Task Tracking to Focus: Introducing 'The One Thing' Mode in SwitchLogger"
date: "2025-10-29"
excerpt: "After weeks of successful task logging, I discovered the real challenge wasn't tracking everything—it was identifying what matters most. Here's how I evolved SwitchLogger to focus on the one thing that makes everything else easier."
---

For 2-3 weeks the switchlogger worked really well. I reflected on all tasks I did and I got an indication whether I worked on or in the business. It was interesting to see and it was also easy to use. But then (who would've guessed) I started to learn the behaviour of clicking the pop up away and eventually stopped logging.

I can't quite pinpoint why I stop using it. But I guess I was trying to focus on logging everything (consciously) instead of focusing on the one thing that has the most impact.

"The one thing" is key here, because I started reading the book "The One Thing" by Gary Keller, which inspired me to try a slightly different approach with the switchlogger.

⸻

## Building "The One Thing Mode"

On another lazy Sunday I opened up Claude Code and started narrowing down how I wanted to adjust the switch logger.

Instead of trying to track every task the goal was to track "the one thing that I should work on today that makes everything else easier or even redundant".

Thinking about implementation, I did not want to get rid of my V1 and I also did not want to implement "the one thing"-functionality into the existing UI.

So I decided to implement "the one thing mode".

It's basically a switch in the Analytics Dashboard that changes the way the application works.

![The One Thing Mode Switch](/images/blog/switch-logger-switch.png)

⸻

## Different Pop-Up Reminders

The new mode completely changes the user experience with focused reminders:

![Pop-up Stage 1](/images/blog/popup-stage-1.png) ![Pop-up Stage 2](/images/blog/popup-stage-2.png) ![Pop-up Stage 3](/images/blog/popup-stage-3.png)

⸻

## Different Analytics

The analytics dashboard also adapts to show insights focused on your one priority:

![The One Thing Analytics](/images/blog/switch-logger-the-one-thing-analytics.jpg)

⸻

## What's Next

Now it's time to use the new version.

Will keep you posted.