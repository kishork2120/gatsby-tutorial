module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Tutorial",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "PlaceAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "placeapi",
        // Url to query from
        url: "https://countries.trevorblades.com/",
      },
    },
  ],
};
