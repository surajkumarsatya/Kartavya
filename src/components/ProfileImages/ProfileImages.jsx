const ProfileImages =  ({images}) => {
    return(
        <div className="flex">
            {images.map((img) => {
                return(
                    <div key={img.id}>
                        <img className="w-[2rem] rounded-full" src={img.imgUrl} alt={`Profile ${img.id}`}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileImages

