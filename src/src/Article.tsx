interface ArticleI {
  articleData: ArticleT | undefined
}

export default function Article({ articleData }: ArticleI) {
  return (
    <div className="p-5 bg-slate-100 rounded-lg">
      {articleData ? (
        <>
          <h1 className="text-blue-500 font-bold text-3xl mb-1">
            Heading of the article
          </h1>
          <div className="flex gap-3">
            <p className="text-xs text-slate-600">{articleData.author}</p>
            <p className="text-xs text-slate-500">
              {new Date(articleData.date).toLocaleString()}
            </p>
          </div>
          <div className="mt-4">{articleData.text}</div>
        </>
      ) : (
        <>
          <div className="max-w-[50%] h-4 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>

          <div className="max-w-[50%] h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
          <div className="flex flex-col gap-3 mt-12">
            <div className="w-full h-4 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
          </div>
        </>
      )}
    </div>
  )
}
