import { CommentT } from "../types/comment"
interface CommentsI {
  commentsData: CommentT[] | undefined
}

export default function Comments({ commentsData }: CommentsI) {
  //could be optimized by using useMemo, but it's not necessary for this case
  const sortedComments = commentsData?.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <>
      <div className="mt-16 flex flex-col gap-5">
        {sortedComments ? (
          sortedComments.map((comment, index) => (
            <div
              key={index}
              className="bg-slate-100 p-3 rounded-lg flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <h2 className="text-md font-medium">{comment.author}</h2>
                <p className="text-xs text-slate-500">{comment.date}</p>
              </div>
              <p className="text-slate-700">{comment.text}</p>
            </div>
          ))
        ) : (
          <div className="bg-slate-100 p-3 rounded-lg flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="w-[10rem] h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
              <div className="w-[10rem] h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
            </div>
            <div className="w-full h-2 bg-gray-400 rounded-full dark:bg-gray-700  mb-2.5 animate-pulse"></div>
          </div>
        )}
      </div>
    </>
  )
}
