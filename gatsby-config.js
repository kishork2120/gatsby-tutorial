module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Tutorial",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PlaceAPI",
        fieldName: "placeapi",
        url: "https://countries.trevorblades.com/",
      },
    },
  ],
};
