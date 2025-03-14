export default function Title(props){
    const {mainhead,subhead} = props
    return(
        <div className="mainTitle main">
            <h2><span>{mainhead[0]}</span>{mainhead[1]}</h2>
            <p><span>{subhead}</span></p>
        </div>
    )
}