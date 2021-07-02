module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.setTemplateFormats(["md", "njk"]);
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      include: "_includes",
    },
  };
};
