---
layout: ../../layouts/project.astro
title: Subway UI
client: Self
published_at: 2021-10-16
img: /assets/blog/wayfinding0.jpg
description: |
  It's a story about a guy who was drinking and wanted to make something.
tags:
  - SubwayUI
char: 3,631
---
I don't know what I was thinking, but that night after drinking, I suddenly felt the urge to create something.
Drinking, watching movies, and coding are the main ways I spend my weekends.
For a long time, I have wanted to create a user interface with a lot of my own ideas, from design to coding.
I've always had the ambition to create my own modern frameworks such as tailwind css and material ui. However, the documentation and examples of these major OSS are very carefully made.<br>
This time, I was starting out on my own, and I had no intention of competing with them. The scale of this project is about the same as [98.css](https://github.com/jdan/98.css), and I want to make it small but rich in ideas.
Finally, with the help of alcohol, I started the project.

I live in Tokyo and take the train most of the time when I go out, but I often lose track of where I'm going when I change trains.
That's when I check the wayfinding system.
Wayfinding systems are an excellent way for most people to quickly see and confirm their destination.<br>
Important letters and icons are designed in such a way that they are large enough for the eye to see and keep walking without stopping.<br>

<figure>
  <img
    src="/assets/blog/wayfinding0.jpg"
    alt="wayfinding-0"
    title="wayfinding-0"
    style="
      object-fit: cover;
      width: 100%;
      height: 50px;
      object-position: 0 30%">
  <figcaption>Quote:<cite>unsplash.com</cite></figcaption>
</figure>

<figure>
  <img
    src="/assets/blog/wayfinding1.jpg"
    alt="wayfinding-1"
    title="wayfinding-1"
    style="
      object-fit: cover;
      width: 100%;
      height: 220px;
      object-position: 0 40%">
  <figcaption>Quote:<cite>https://www.flickr.com/photos/bking/2086967678/</cite></figcaption>
</figure>

<figure>
  <img
    src="/assets/blog/wayfinding2.jpg"
    alt="wayfinding-2"
    title="wayfinding-2"
    style="
      object-fit: cover;
      width: 100%;
      height: 150px;
      object-position: 0 40%">
  <figcaption>Quote:<cite><a>https://www.kyotostation.com/kyoßto-station-map-finding-your-way/</a></cite></figcaption>
</figure>

I thought that if I could bring these really sophisticated designs to the web world, I could visually guide people to their destinations without any inconvenience. However, I don't have any technical knowledge, so I'm going to make it look like that, but I'm going to update the UI itself frequently during prototyping. (I'm going to keep updating the UI during prototyping until I find a genius who can give me some feedback...

<figure>
  <img
    src="/assets/blog/wayfinding3.png"
    alt="wayfinding-3"
    title="wayfinding-3"
    style="
      width: 100%;
      height: auto;">
  <figcaption>Quote:<cite>From figma</cite></figcaption>
</figure>

I don't know how many more components will be added to figma in the future, but I'm working on figuring out the minimum number of components needed and giving them approximate class names.<br>
I'm guessing that the details of margin, padding, and string placement will be fine-tuned during the coding process, but at this point I have zero confidence that it will work.<br>
By the way, figma is always in a public state.[(Figma(Prototyping))](https://www.figma.com/file/5jOfkehBg8VJEITcPdMYKG/subwayUI-Project?node-id=0%3A1)

The general flow is as follows.

1. Prototyping
2. CodeSandBox
3. Document creation

It's very rough, but it's my limit.
The first prototyping is already breaking my heart, but I'm thinking of using codesandbox as an example to document afterwards. I'm trying to use MaterialUI as a reference for this. I thought it would be a good tutorial to actually see and touch the code.

At the end of this article, I summarized the tools I use as follows

- [Route23/SubwayUI](https://github.com/Route23/SubwayUI)
- [Issues](https://github.com/Route23/SubwayUI/issues)
- Blog(here)
- Docs(in preparation)
- [CodeSandbox(Components .e.g.)](https://codesandbox.io/dashboard/home?workspace=5ef0e7c4-4e77-4f35-9597-5d67b7934597)
- [Figma(Prototyping)](https://www.figma.com/file/5jOfkehBg8VJEITcPdMYKG/subwayUI-Project?node-id=0%3A1)
- [Whimsical](https://whimsical.com/subwayui-8RfsJ1ngcmbMsw8rr9XfsK)
- [Zenn(Scraps)](https://zenn.dev/ocat/scraps/1a049790273f86)
- [Inter Font](https://rsms.me/inter/)

I'll try to keep blogs like this one on a regular basis.
Thanks for reading to the end.

PS:
I'm always looking for contributors, but I don't know if there's anywhere I can touch right now...
