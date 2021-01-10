module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addHandlebarsHelper("curDate", function(type = 1) {
	  if(type == 1){
		return (new Date()).toString();
	  }else{
		return (new Date()).toLocaleString();
	  }
  });
  eleventyConfig.addHandlebarsHelper("curUnixTime", function(type = 1) {
	  return (Date.now());
  });
};