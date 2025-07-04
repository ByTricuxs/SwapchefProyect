


interface CommentProps {
  user: string
  text: string
  date: string
  liked?: boolean
}

interface PostProps {
  title: string
  summary: string
  content: string
  author: string
  comments: CommentProps[]
}

export default function PostPreview({ title, summary, content, author, comments }: PostProps) {
  return (
    <details className="bg-[#F9EFE3] rounded-xl shadow-md overflow-hidden transition-all duration-300 group">
      <summary className="px-4 py-4 cursor-pointer list-none">
        <h2 className="text-base font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{summary}</p>

        <div className="flex justify-between items-center mt-4 group-open:hidden">
          <div className="flex items-center gap-2">
            <img src="/ruta/imagenPerfil.png" className="w-5 h-5" />
            <p className="text-sm font-semibold text-gray-700">{author}</p>
          </div>
          <img src="comentario.png" className="w-5 h-5" />
        </div>
      </summary>

      <div className="px-4 pb-4 text-sm text-gray-700">
        <p className="mt-2">{content}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <img src="/ruta/imagenPerfil.png" className="w-5 h-5" />
            <p className="text-sm font-semibold text-gray-700">{author}</p>
          </div>
          <img src="comentario.png" className="w-5 h-5" />
        </div>

        {comments.map((c, i) => (
          <div key={i} className="mt-4 border-t border-gray-300 pt-2">
            <div className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <img src="" className="w-4 h-4 rounded-full" />
                <span className="font-medium">{c.user}</span>
                <span className="text-xs text-gray-500">- {c.date}</span>
              </div>
              <img
                src={c.liked ? "..src/assets/corazonR.svg" : "..src/assets/corazonVacio.svg"}
                className="w-4 h-4"
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{c.text}</p>
          </div>
        ))}
      </div>
    </details>
  )
}
