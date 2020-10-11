import React from 'react'
import { HistoryLocation, useLocation } from "@reach/router"
import queryString from 'query-string';
import { Typography } from '@material-ui/core'
import Layout from '../layout'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import ConditionalLoader from '../components/conditional-loader';

enum ProgrammingLanguages {
  java = "java",
  csharp = "csharp",
  react = "react",
  js = "js",
  ts = "ts",
  ue4 = "ue4",
  node = "node",
  css = "css",
  html = "html"
}

interface IBlogProps {
  location: HistoryLocation
}

interface BlogUrlParameter {
  language?: ProgrammingLanguages;
  name?: string
}
interface BlogArticle {}

const extractUrl = (query?: string) => {
  const result = {
    language: undefined,
    name: undefined
  };
  if(!query) return result;
  return queryString.parse(query) as BlogUrlParameter;
};

export default function Blog({ location }: IBlogProps){

  const [article, setArticle] = React.useState<BlogArticle | null>(null);

  React.useEffect(() => {
    // Params existence handling
    if(!location.search) window.location.assign("/404")
    const params = extractUrl(location.search)
    if(!params) window.location.assign("/404")

    // Wrong params handling
    if(params.language && !(params.language in ProgrammingLanguages))
      window.location.assign(`/blog-languages`)
    // TODO Should render a list of languages (like /blog-languages) to redirect to selected language blogs
    if(!params.name) console.log("no article name passed");
    // TODO Should render a list of article for language to redirect to a correct article
    
    const article: BlogArticle = {};
    // TODO convert .template from /static/blog/{languages}/{articleName} and set it
    setArticle(article);
  }, [])

  return (
    <Layout>
      <Typography>Blog</Typography>
      <ConditionalLoader 
        variable={article}
        ComponentBuilder={(article: BlogArticle) => <Typography variant="caption">Article loaded</Typography>}
      />
    </Layout>
  )
}
