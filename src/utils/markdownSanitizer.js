const marked = require('marked');
const sanitize_html = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent) {
    const turndownService = new TurndownService(); // turndown object to convert html to md

    // convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    // sanitize html content
    const sanitizedHtmlContent = sanitize_html(convertedHtml, {
        allowedTags : sanitize_html.defaults.allowedTags,
    });
    
    // convert the sanitize html back to markdown
    const sanitizedMarkdownContent = turndownService.turndown(sanitizedHtmlContent);
    return sanitizedMarkdownContent;
}

module.exports = sanitizeMarkdown;