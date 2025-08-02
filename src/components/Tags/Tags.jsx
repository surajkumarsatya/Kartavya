const Tags = ({tags, bgColor, fontColor}) => {
    return(
        <div className={`border rounded-full px-3 py-2 ${bgColor} ${fontColor} w-fit text-xs hover:bg-black hover:text-white`}>
            {tags + ''}
        </div>
    )
}

export default Tags