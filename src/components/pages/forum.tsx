import PostPreview from "../ui/PostPreview"

const examplePost = {
  title: "Cambio de fórmula en leche Delactomy",
  summary: "It is a long established fact that a reader will be distracted...",
  content: "Contenido completo del post sobre el cambio de fórmula...",
  author: "Kristen.V",
  comments: [
    { user: "Evelyn", text: "Muy buena información", date: "28/04" },
    { user: "Charlie", text: "Ay más mejores. Dios los bendiga.", date: "28/04", liked: true }
  ]
}

export default function ForumPage() {
  return (
    <div className="max-w-md mx-auto bg-[#FFF7EC] min-h-screen flex flex-col">
      <main className="p-4 space-y-4 flex-grow">
        <PostPreview {...examplePost} />
        <PostPreview {...examplePost} />
        <PostPreview {...examplePost} />
      </main>
    </div>
  )
}
