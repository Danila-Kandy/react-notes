function AboutMe({ text, info }) {
  return (
    <div className="flex flex-row mt-4 gap-1">
      <p className="text-2xl font-medium text-[#E85A4F]">{text}</p>
      <p className="font-medium text-2xl text-[#8E8D8A]"> {info}</p>
    </div>
  )
}
export default AboutMe;
