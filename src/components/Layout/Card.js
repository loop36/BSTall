const Card = (props) => {
    const classElement ="flex justify-center self-center p-3 text-center   shadow-2xl text-primaryColor rounded-lg  tracking-wide "+props.class
    return (
        <div className={classElement}>
            {props.children}
        </div>
    )
}

export default Card

