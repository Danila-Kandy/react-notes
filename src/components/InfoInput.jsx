function InfoInput({
  title,
  type1,
  type2,
  type3,
  onChange1,
  onChange2,
  onChange3,
  placeholder1,
  placeholder2,
  placeholder3,
  value1,
  value2,
  value3,
}) {
  const STYLE = {
    1: 'text-4xl mt-16 font-medium text-[#E85A4F] my-3',
    2: 'bg-[#EAE7DC] focus:outline-none focus:ring focus:ring-[#E98074] font-[400]  text-[#8E8D8A] text-2xl border-4 border-[#E85A4F]/50 w-[400px] py-3 px-4 rounded-lg',
    3: 'flex flex-col items-center mt-4 gap-4',
  }
  if (type2 === 'name') {
    return (
      <div className={STYLE[3]}>
        <div className={STYLE[1]}>{title}</div>
        <div>
          <input
            type={type1}
            className={STYLE[2]}
            placeholder={placeholder1}
            value={value1}
            onChange={onChange1}
          />
        </div>
        <div>
          <input
            className={STYLE[2]}
            placeholder={placeholder2}
            type={type2}
            value={value2}
            onChange={onChange2}
          />
        </div>
        <div>
          <input
            className={STYLE[2]}
            placeholder={placeholder3}
            type={type3}
            value={value3}
            onChange={onChange3}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className={STYLE[3]}>
        <div className={STYLE[1]}>{title}</div>
        <div>
          <input
            type={type1}
            className={STYLE[2]}
            placeholder={placeholder1}
            value={value1}
            onChange={onChange1}
          />
        </div>
        <div>
          <input
            className={STYLE[2]}
            placeholder={placeholder3}
            type={type3}
            value={value3}
            onChange={onChange3}
          />
        </div>
      </div>
    )
  }
}

export default InfoInput
