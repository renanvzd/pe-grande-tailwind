export default function Video() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center bg-primary-background">
      <div className="pb-8">
        <p className="text-2xl md:text-4xl font-bold px-3 text-center">Moradas do Pé Grande & Tramandaí</p>
      </div>
      <div>
        <iframe className="h-[50vh] aspect-video w-full"
          src={"https://www.youtube.com/embed/FM3zxdSJX5g"}>
        </iframe>
      </div>
    </div>
  )
}