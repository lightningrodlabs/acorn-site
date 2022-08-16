import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Acorn | Open Source P2P Project Management for Software Teams`,
    description: `Powered by Holochain, Acorn is designed and built as a scrum-alternative, Agile Development Pattern for distributed software development teams.`,
    // image for social sharing
    // make sure there is a copy of it in 'static' folder
    image: `/acorn-social-sharing-preview.png`,
    siteUrl: `https://www.acorn.software`,
    keywords: ["Holochain", "project management"],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // react svg plugin
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};

export default config;
