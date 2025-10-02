# AI Agent Context - Max Struever Personal Website

This document provides essential context for AI agents working on this personal website project.

## 🎯 Project Overview

**Project**: Personal portfolio website for Maxwell (Max) Struever  
**Domain**: [maxstruever.com](https://maxstruever.com)  
**Purpose**: Personal branding, portfolio showcase, and content sharing  
**Deployment**: Netlify with GitHub integration  

## 🏗️ Technical Stack & Architecture

### Core Technologies
- **Frontend**: React 18 with TypeScript
- **UI Framework**: Material-UI v4 (Material Kit React) - **LEGACY VERSION**
- **Routing**: React Router DOM v5
- **Styling**: SCSS + Material-UI withStyles HOC pattern
- **Build Tool**: Create React App (react-scripts v5)
- **Package Manager**: **Yarn** (not npm)
- **Node Version**: 17 (specified in yarn.lock)

### Key Dependencies
- `@material-ui/core`: ^4.12.4 (legacy version)
- `@material-ui/icons`: ^4.11.3
- `react`: ^18.0.0
- `react-router-dom`: ^5.3.0
- `typescript`: ^4.6.3
- `moment`: ^2.29.4

## 📁 Project Structure

```
src/
├── assets/
│   ├── css/           # Compiled CSS files
│   ├── img/           # Static images and assets
│   ├── jss/           # Material-UI style definitions
│   └── scss/          # Source SCSS files
├── components/        # Reusable UI components
│   ├── Header/        # Navigation and header components
│   ├── CustomButtons/ # Custom button implementations
│   ├── Footer/        # Site footer
│   └── ...           # Other Material-UI components
└── views/            # Page-level components
    ├── ProfilePage/   # Main homepage (default route)
    ├── CityRecsPage/  # Travel recommendations
    ├── ReferralsPage/ # Referral links
    └── Components/    # Material-UI showcase
```

## 🚀 Development Workflow

### Package Management
- **Always use Yarn** - never npm
- Commands: `yarn install`, `yarn start`, `yarn build`, `yarn test`
- Lock file: `yarn.lock` (committed to repo)

### Local Development
```bash
# Set Node version (if using nvm)
nvm use 17

# Install dependencies
yarn install

# Start development server
yarn start  # Runs on http://localhost:3000
```

### Code Style & Quality
- **ESLint + Prettier** for code formatting
- **TypeScript strict mode** enabled
- **Pre-commit hooks** via Husky (runs linting)
- **Functional components** preferred over class components
- **Material-UI withStyles HOC** pattern for styling

## 🎨 UI/UX Patterns

### Material-UI v4 Conventions
- Uses `withStyles` HOC for component styling
- Style objects defined in separate files under `assets/jss/`
- Components follow Material-UI v4 patterns (legacy)
- Custom components extend Material-UI base components

### Component Structure
```typescript
// Typical component pattern
import withStyles from '@material-ui/core/styles/withStyles';
import { WithStyles } from '@material-ui/styles';

type ComponentProps = WithStyles<typeof componentStyle>;

class Component extends React.Component<ComponentProps> {
  render() {
    const { classes, ...rest } = this.props;
    // Component implementation
  }
}

export default withStyles(componentStyle)(Component);
```

### Styling Approach
- SCSS files in `assets/scss/`
- Material-UI theme customization
- Responsive design with Material-UI Grid system
- Custom CSS classes for specific styling needs

## 🌐 Routing & Navigation

### Route Structure
- `/` - ProfilePage (homepage)
- `/city-recs` - CityRecsPage (travel recommendations)
- `/referrals` - ReferralsPage (referral links)
- `/all-components-examples` - Components (Material-UI showcase)
- `/*` - ErrorNotFoundPage (404 handler)

### Navigation
- Header component with dropdown menu
- Social media links in header
- Responsive mobile navigation

## 📊 Data & Content Management

### Static Content
- Personal information hardcoded in ProfilePage
- Social media links in HeaderLinks component
- Resume/portfolio links point to external domains

### Dynamic Content
- **City Recommendations**: Embedded Google Drive folder
- **Referral Links**: Fetched from Trello API
  - API: `https://trello.com/b/sYeK1UkI/max-struever-referral-links.json`
  - Real-time filtering and search functionality

## 🚀 Deployment & CI/CD

### Netlify Configuration
- **Production**: `main` branch (auto-deploy)
- **Preview**: `develop` branch (deploy previews)
- **PR Previews**: Any PR against `main` or `develop`
- **Build Command**: `yarn build`
- **Publish Directory**: `build/`

### Build Process
1. Netlify detects push to `main`
2. Runs `yarn install` and `yarn build`
3. Deploys static files from `build/` directory
4. Custom domain: `maxstruever.com`

## 🔧 Common Patterns & Conventions

### File Naming
- Components: PascalCase (`ProfilePage.tsx`)
- Styles: camelCase (`profilePageStyle.ts`)
- Images: kebab-case (`nyc-bg.jpg`)

### Import Organization
```typescript
// External libraries
import React from 'react';
import { Typography } from '@material-ui/core';

// Internal components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Styles and assets
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage';
```

### State Management
- Local component state with `useState` hooks
- No global state management (Redux/Context)
- Props drilling for data passing

## ⚠️ Important Notes for AI Agents

### Legacy Dependencies
- **Material-UI v4 is deprecated** - consider upgrading to v5
- **React Router v5** - newer versions available
- **Moment.js** - consider migrating to date-fns or dayjs

### Development Constraints
- Must maintain compatibility with Material-UI v4
- TypeScript strict mode - all props must be typed
- ESLint rules enforced via pre-commit hooks
- Mobile-first responsive design required

### Performance Considerations
- Large Material-UI icons package (slow installs)
- External API calls for referral data
- Image optimization needed for Google Drive embeds

## 🐛 Common Issues & Solutions

1. **Node Version**: Always use Node 17 (check yarn.lock)
2. **Yarn Timeouts**: Use `--network-timeout 900000` for large packages
3. **Build Failures**: Run `yarn clean && yarn install` to reset
4. **TypeScript Errors**: Ensure all props are properly typed
5. **Material-UI Styling**: Use withStyles HOC pattern, not styled-components

## 📞 Project Contacts

- **Developer**: Maxwell (Max) Struever
- **GitHub**: [madmaxlax](https://github.com/madmaxlax)
- **Portfolio**: [portfolio.maxstruever.com](http://portfolio.maxstruever.com)

---

*This file should be updated when significant changes are made to the project structure or dependencies.*
