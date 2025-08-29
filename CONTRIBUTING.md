# Contributing to FlowTab

Thank you for your interest in contributing to FlowTab! We welcome contributions from everyone.

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming environment for all contributors

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear description** of the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Browser version** and operating system
- **Screenshots** if applicable

### Suggesting Features

Feature suggestions are welcome! Please:

- Check existing issues for similar suggestions
- Clearly describe the feature and its benefits
- Consider how it aligns with FlowTab's privacy-first approach
- Provide mockups or examples if helpful

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Development Guidelines

#### Code Style
- Use consistent indentation (2 spaces)
- Write clear, descriptive variable names
- Add comments for complex logic
- Follow existing code patterns

#### Privacy First
- Never add tracking or analytics
- Keep all data local to the user's device
- Avoid external dependencies when possible
- Document any new permissions needed

#### Testing
- Test in multiple browsers (Chrome, Edge, Brave)
- Verify functionality works offline
- Check responsive design on different screen sizes
- Test with various user scenarios

### Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update the README** if adding features
5. **Request review** from maintainers

### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/FlowTab---2.git
cd FlowTab---2

# Load in Chrome for testing
# 1. Open chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select the FlowTab---2 directory
```

### File Structure

When adding new files, follow this structure:

```
FlowTab---2/
├── manifest.json          # Extension configuration
├── newtab.html            # Main interface
├── script.js              # Core functionality
├── background.js          # Background script
├── popup.html             # Extension popup
├── popup.js               # Popup functionality
├── welcome.html           # Onboarding
├── welcome.js             # Welcome logic
├── icons/                 # Extension icons
├── docs/                  # Documentation
└── tests/                 # Test files
```

### Commit Message Guidelines

Use clear, descriptive commit messages:

- `feat: add dark mode toggle`
- `fix: resolve timer notification bug`
- `docs: update installation instructions`
- `style: improve button hover effects`
- `refactor: simplify quote rotation logic`

### Questions?

If you have questions about contributing:

- Check the [README](README.md) for basic information
- Look through existing [issues](https://github.com/haarmanh/FlowTab---2/issues)
- Create a new issue with the "question" label
- Email: haarmanh@gmail.com

Thank you for helping make FlowTab better! 🚀
