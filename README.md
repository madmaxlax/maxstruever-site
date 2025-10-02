# Max Struever Personal Website

A personal portfolio and blog website for Maxwell (Max) Struever, built with React and TypeScript.

🌐 **Live Site**: [maxstruever.com](https://maxstruever.com)  
📱 **Netlify Dashboard**: [app.netlify.com/projects/maxstruever/overview](https://app.netlify.com/projects/maxstruever/overview)  
🐙 **GitHub Repo**: [github.com/madmaxlax/maxstruever-site](https://github.com/madmaxlax/maxstruever-site)

## 🚀 Quick Start

### Prerequisites
- **Node.js 17** (use nvm to manage versions)
- **Yarn** package manager
- **Git**

### Local Development Setup

1. **Set up Node.js version** (if using nvm):
   ```bash
   # Install and use Node 17 (as specified in yarn.lock)
   nvm install 17
   nvm use 17
   
   # Create .nvmrc file for automatic version switching
   echo "17" > .nvmrc
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Start development server**:
   ```bash
   yarn start
   ```
   The site will be available at `http://localhost:3000`

### Available Scripts

- `yarn start` - Runs the app in development mode (port 3000)
- `yarn build` - Builds the app for production to the `build` folder
- `yarn test` - Launches the test runner
- `yarn lint` - Runs ESLint to fix code style issues
- `yarn clean` - Removes node_modules and yarn.lock (use with caution!)

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI v4 (Material Kit React)
- **Routing**: React Router DOM v5
- **Styling**: SCSS + Material-UI styles
- **Build Tool**: Create React App (react-scripts)
- **Package Manager**: Yarn
- **Node Version**: 17 (as determined from yarn.lock)

## 📁 Site Structure

The site is a single-page application with multiple routes:

- **`/`** - Main profile page (homepage)
- **`/city-recs`** - City travel recommendations (embedded Google Docs)
- **`/referrals`** - Referral links and discounts (pulls from Trello API)
- **`/all-components-examples`** - Material-UI component showcase
- **`/404-not-found`** - Error page

### Key Components

- **ProfilePage** - Main homepage with personal info, social links, and interactive tabs
- **CityRecsPage** - Travel recommendations embedded from Google Drive
- **ReferralsPage** - Dynamic referral links loaded from Trello board
- **HeaderLinks** - Navigation menu with social media links

## 🌐 Deployment

### Netlify Configuration
- **Production Branch**: `main` (auto-deploys on merge)
- **Preview Branch**: `develop` (deploy previews)
- **Deploy Previews**: Any PR against `main` or `develop`

### Build Process
1. Netlify automatically builds on push to `main`
2. Uses `yarn build` to create production build
3. Serves static files from `build/` directory

## 🐳 Docker Support

The project includes Docker configuration for containerized development:

```bash
# Using Docker Compose
docker-compose up

# Or build and run manually
docker build -t maxstruever-site .
docker run -p 3000:3000 maxstruever-site
```

## 📝 Content Management

### Personal Information
- Profile details are hardcoded in `src/views/ProfilePage/ProfilePage.tsx`
- Social media links in `src/components/Header/HeaderLinks.tsx`
- Resume and portfolio links point to external sites

### Dynamic Content
- **City Recommendations**: Embedded Google Drive folder
- **Referral Links**: Fetched from Trello board API (`https://trello.com/b/sYeK1UkI/max-struever-referral-links.json`)

## 🔧 Development Notes

### Code Style
- Uses ESLint + Prettier for code formatting
- Pre-commit hooks run linting automatically (via Husky)
- TypeScript strict mode enabled

### Dependencies
- Material-UI v4 (legacy version - consider upgrading to v5)
- React 18 with modern hooks and functional components
- Moment.js for date handling
- Various Material-UI icons and components

### Browser Support
- Modern browsers (Chrome, Firefox, Safari)
- Mobile responsive design
- Progressive Web App capabilities

## 🚨 Common Issues & Solutions

1. **Node Version Mismatch**: Always use Node 17 (check with `node --version`)
2. **Yarn Install Fails**: Try `yarn install --network-timeout 900000` (large Material-UI icons package)
3. **Build Errors**: Run `yarn clean && yarn install` to reset dependencies
4. **Port Conflicts**: Change port in `package.json` scripts if 3000 is occupied

## 📞 Contact & Links

- **Portfolio**: [portfolio.maxstruever.com](http://portfolio.maxstruever.com)
- **Resume**: [resume.maxstruever.com](http://resume.maxstruever.com)
- **GitHub**: [github.com/madmaxlax](https://github.com/madmaxlax)
- **LinkedIn**: [linkedin.com/in/maxstruever](https://www.linkedin.com/in/maxstruever/)

---

*Last updated: $(date)*