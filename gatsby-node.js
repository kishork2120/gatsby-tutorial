exports.createPages = async ({ actions, graphql })=>{
  const {data} = await graphql(`
    {
      placeapi{
        countries{
          code
        }
      }
    }
  `);
  data.placeapi.countries.forEach(((value) => {
    actions.createPage({
      path: value.code,
      component: require.resolve(`./src/templates/country.template.js`),
      context:{ code: value.code }
    })
  }))
}