import react, { useState, useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js"

const alanKey = "c91f310fad260be93199b16debd9bb6d2e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsKey = "05ff573cee154427bfcf5a5e427aa246";

const App = () => {

  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.png" className={classes.alanLogo} alt="alan logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

export default App;