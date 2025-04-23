# karvaamokuja menu ravintola maple street [https://cgi.ravintolapalvelut.iss.fi/ravintola]

A web project for displaying a weekly restaurant menu with a modern UI. Includes both a standard and a 3D version.

## Features
- Fetches and displays the weekly menu from `menu.json`.
- Beautiful, animated UI using Tailwind CSS (`index.html`).
- 3D visualization of the menu using Three.js (`/threejs/index.html`).
- Automated menu updates via GitHub Actions.

## Usage

### 1. Standard Version
Open `index.html` in your browser to view the regular menu UI.

### 2. 3D Version
Open `threejs/index.html` in your browser for a 3D visualization of the same menu using Three.js.

### 3. Updating the Menu
- The menu is fetched from the ISS Palvelut website and saved to `menu.json`.
- To update manually:
  - Install dependencies: `npm install` (requires Node.js)
  - Run: `node menu.js`
- Or use the provided GitHub Actions workflow for automatic updates.

### 4. Python Scraper (Alternative)
You can also use `menu.py` (requires `requests` and `beautifulsoup4`):

```sh
pip install requests beautifulsoup4
python menu.py
```

## Directory Structure
- `index.html` – Main menu UI
- `threejs/index.html` – 3D menu UI (Three.js)
- `menu.json` – Menu data (auto-generated)
- `menu.js` – Node.js scraper
- `menu.py` – Python scraper (optional)

---

**Note:** The 3D version (`threejs/index.html`) loads the same `menu.json` as the main UI, so keep it up to date for both versions.
