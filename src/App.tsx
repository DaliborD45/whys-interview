import { useEffect, useState } from "react"
import Comments from "./src/Comments"
import { CommentT } from "./types/comment"
import Article from "./src/Article"

function App() {
  const [comments, setComments] = useState<CommentT[] | undefined>(undefined)
  const [isButtonOnScreen, setIsButtonOnScreen] = useState(true)
  const [isFetchingMoreComments, setIsFetchingMoreComments] = useState(false)
  const [articleData, setArticleData] = useState<ArticleT | undefined>(
    undefined
  )

  const fetchComments = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error -> this is a fake data
        resolve(setComments(document.__comments))
      }, 1000)
    })
  }

  const fetchMoreComments = () => {
    setIsFetchingMoreComments(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-expect-error -> this is a fake data
          setComments((prevState) => [...prevState, ...document.__moreComments])
        )
        setIsButtonOnScreen(false)
        setIsFetchingMoreComments(false)
      }, 2000)
    })
  }
  const fetchArticle = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error -> this is a fake data
        resolve(setArticleData(document.__article))
      }, 2000)
    })
  }

  useEffect(() => {
    fetchArticle().then(() => {
      fetchComments()
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-pink-400 flex flex-col items-center h-full px-5 md:px-0 pb-10">
      <div className="max-w-3xl w-full mt-24">
        <Article articleData={articleData} />
        <Comments commentsData={comments} />
      </div>
      {isButtonOnScreen && comments && (
        <div className="flex justify-center">
          <button
            className={`text-sm py-2 px-3 rounded-lg mt-12 transition-all duration-300 ease-in-out hover:scale-105 flex justify-center text-white bg-gradient-to-r from-blue-500 to-pink-500 bg-[length:200%_auto] hover:bg-right ${
              isFetchingMoreComments && "opacity-50"
            }`}
            onClick={isFetchingMoreComments ? () => {} : fetchMoreComments}
          >
            {isFetchingMoreComments ? "Fetching..." : "Load more comments"}
          </button>
        </div>
      )}
    </div>
  )
}

export default App
