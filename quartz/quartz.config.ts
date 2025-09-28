import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Kintsugi Zuihitsu Configuration
 * William Fayers' Digital Garden
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "kintsugi zuihitsu",
    pageTitleSuffix: " - William Fayers",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "williamfayers.com", // Update this with your actual domain
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Spectral",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f6f6f6",
          gray: "#ababab",
          darkgray: "#5c5c5c",
          dark: "#222222",
          secondary: "#7852ee",
          tertiary: "#08b94e",
          highlight: "rgba(120, 82, 238, 0.15)",
          textHighlight: "#eeb66280",
        },
        darkMode: {
          light: "#1e1e1e",
          lightgray: "#262626",
          gray: "#666666",
          darkgray: "#b3b3b3",
          dark: "#dadada",
          secondary: "#a882ff",
          tertiary: "#44cf6e",
          highlight: "rgba(168, 130, 255, 0.15)",
          textHighlight: "#7fcae680",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
