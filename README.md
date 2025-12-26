# The Study

A personal blog with a dark editorial aesthetic—walnut, leather, and warmth. Like reading by lamplight in a private library.

## Features

- **Pure HTML/CSS/JS** - No build step, no frameworks, no dependencies
- **Warm syntax highlighting** - Custom Prism.js theme that fits the aesthetic
- **Image lightbox** - Click any image to view full-screen
- **SSH-only access** - nginx serves on localhost, accessible via SSH tunnel

## Structure

```
blog/
├── index.html          # Homepage with post stream
├── about.html          # About page
├── posts/              # Blog posts
├── css/
│   ├── style.css       # Main styles
│   └── prism-warm.css  # Syntax highlighting theme
├── js/
│   └── lightbox.js     # Image lightbox
└── assets/
    ├── fonts/
    └── images/
```

## Local Development

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Production (SSH-secured)

nginx is configured to listen only on `127.0.0.1:8888`. Access via SSH tunnel:

```bash
ssh -L 8080:localhost:8888 your-server
# Open http://localhost:8080
```

## Adding a New Post

1. Copy an existing post from `posts/` as a template
2. Update the date, title, and content
3. Add an entry to `index.html`

## Design

- **Colors**: Deep walnut (`#1a1410`), warm cream (`#f5efe6`), burnished gold (`#c9a227`)
- **Fonts**: Cormorant Garamond (headings), Literata (body), JetBrains Mono (code)
- **Textures**: Subtle wood grain overlay, soft vignette
