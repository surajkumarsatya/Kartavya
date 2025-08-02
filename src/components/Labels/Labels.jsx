const Labels = ({bgColor, icons, label, fontColor, fontSize}) => {
    return(
        <div className={`${bgColor} ${fontColor} ${fontSize} flex gap-2 items-center justify-center w-fit px-3 py-1 italic rounded-full`}>{icons}{label}</div>
    )
}

export default Labels