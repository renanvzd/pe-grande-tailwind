const Video = ({ titleYoutube, embedId, text }: {
  titleYoutube: string,
  embedId: string,
  text?: string
}) => {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center bg-primary-background">
      <div className="pb-8">
        <p className="text-2xl md:text-4xl font-bold px-3 text-center">{titleYoutube}</p>
      </div>
      <div>
        <iframe className="h-[50vh] aspect-video w-full"
          src={`https://www.youtube.com/embed/${embedId}`}>
        </iframe>
      </div>
    </div>
  )
}

export { Video };