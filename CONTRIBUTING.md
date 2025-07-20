# Contributing to AI Career Coach

Thank you for your interest in contributing to the AI Career Coach project! We welcome contributions from developers of all experience levels.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git
- PostgreSQL database (we recommend Neon DB)
- Clerk account for authentication
- OpenAI and/or Google Gemini API keys

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/AI-Career-Coach.git
   cd AI-Career-Coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your API keys and database URL
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

### Branching Strategy
- `main` - Production-ready code
- `develop` - Development branch for integration
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Critical production fixes

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style and patterns
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint          # Check code style
   npm run build         # Ensure build works
   npm run dev           # Test functionality
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new resume analysis feature"
   ```

### Commit Message Convention

We use conventional commits for clear and consistent commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```bash
feat: add AI-powered job matching algorithm
fix: resolve resume upload issue on Safari
docs: update API documentation
style: format code with prettier
refactor: optimize database queries
test: add unit tests for resume parser
chore: update dependencies
```

### Pull Request Process

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Requirements**
   - Clear description of changes
   - Link to related issues
   - Screenshots for UI changes
   - Tests passing
   - Code review approval

## 📝 Code Guidelines

### Code Style
- Use ESLint and Prettier configurations
- Follow React/Next.js best practices
- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for complex functions

### File Organization
```
app/
├── (auth)/           # Authentication pages
├── (main)/           # Main app pages
│   ├── module/       # Feature modules
│   │   ├── page.jsx  # Main page component
│   │   └── _components/  # Module-specific components
├── api/              # API routes
└── globals.css       # Global styles

components/
├── ui/               # Reusable UI components
└── feature-specific/ # Feature-specific components

lib/                  # Utility functions
actions/              # Server actions
hooks/                # Custom React hooks
```

### Component Guidelines
- Use functional components with hooks
- Implement proper error boundaries
- Use TypeScript when possible
- Follow accessibility guidelines (WCAG)
- Implement responsive design

### Database Guidelines
- Use Prisma for database operations
- Follow proper indexing strategies
- Implement proper error handling
- Use transactions for complex operations

## 🧪 Testing

### Types of Tests
- **Unit Tests**: Test individual functions/components
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows

### Running Tests
```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Writing Tests
- Write tests for new features
- Update tests when modifying existing code
- Aim for meaningful test coverage
- Use descriptive test names

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if applicable
- Browser/OS information
- Console errors

Use our bug report template:
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

For feature requests, please:
- Check if the feature already exists
- Describe the problem you're solving
- Explain your proposed solution
- Consider alternative solutions
- Provide mockups if UI-related

## 📚 Documentation

### What to Document
- New features and APIs
- Configuration changes
- Breaking changes
- Installation/setup procedures
- Examples and tutorials

### Documentation Guidelines
- Write clear, concise explanations
- Include code examples
- Add screenshots for UI features
- Keep documentation up-to-date
- Use proper Markdown formatting

## 🏆 Recognition

Contributors will be recognized:
- In the project README
- In release notes for significant contributions
- GitHub contributor statistics
- Special recognition for long-term contributors

## 📞 Getting Help

If you need help:
- Check existing documentation
- Search through issues
- Ask questions in discussions
- Contact maintainers directly

## 📋 Project Roadmap

Check our [GitHub Projects](https://github.com/jagarapuRadhaKrishna/AI-Career-Coach/projects) for:
- Current priorities
- Planned features
- Known issues
- Release timeline

## 🤝 Code of Conduct

Please be respectful and inclusive:
- Be welcoming to newcomers
- Be respectful of differing opinions
- Focus on what's best for the community
- Show empathy towards others

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to AI Career Coach! 🎉
