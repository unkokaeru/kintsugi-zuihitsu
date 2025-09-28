# Kintsugi Zuihitsu - William Fayers' Digital Garden

A minimalized Quartz setup for publishing William Fayers' digital garden "kintsugi zuihitsu".

## Theme & Customization

This setup uses:

- **Typomagical Theme**: Beautiful typography with Playfair Display headings and Spectral body text
- **Sunlit Plugin**: Animated light effects inspired by daylight computer

## Quick Customization Guide

### Updating Theme Colors

Edit `quartz.config.ts` theme colors section to change the site's color scheme.

### Modifying Typography

Update the typography section in `quartz.config.ts`:

- `header`: Heading font family
- `body`: Body text font family  
- `code`: Code block font family

### Sunlit Effects

The Sunlit component is automatically included. Users can press spacebar or click to toggle day/night mode.

### Adding Content

Place your markdown files in the `content/` directory. The home page should be `kintsugi zuihitsu.md`.

## Build Commands

```bash
npx quartz build       # Build the site
npx quartz serve       # Serve locally
npx quartz sync        # Sync with hosting
```

---

## Credits

Built with [Quartz v4](https://quartz.jzhao.xyz/) by Jacky Zhao - a set of tools that helps you publish your digital garden and notes as a website for free.

*This customized setup features the Typomagical theme and Sunlit plugin integration.*
