const AuthButtons = ({label, bgColor, textColor}) => {
    return(
        <div>
            <button type="button" className={`${bgColor} ${textColor} px-4 py-1 border-1 rounded-3xl`}>{label}</button>
        </div>
    )
}

export default AuthButtons