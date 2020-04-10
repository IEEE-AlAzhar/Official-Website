import React ,{ useEffect , useRef} from "react"
import "./IEEEAZAHARSec.css"
import IEEEAZALogo from "./../../../../../../../assets/IEEE-pub-logo.jpg"
function IEEEAZAHARSec(){
    const AZAlogo = useRef()
    useEffect(()=>{
       console.log(AZAlogo.current.innerHTML)
    const observer = new IntersectionObserver(([entry]) =>{
        if(entry.isIntersecting===true) { AZAlogo.current.innerHTML = `<img src=${IEEEAZALogo} / >`}
    })
    observer.observe(AZAlogo.current)
})
    return(
        <>
            <section className="AZA-IEEE-sec">
                <h2>IEEE-AZAHAR</h2>
                <div className="content-AZAIEEE">
                    <div className="IEEEAZApara">
                        <p>
                            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.elitelitelitLorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.elitelitelit
                        </p>
                    </div>
                    <div className="IEEEAZALogo" ref={AZAlogo}>
                    
                    </div>
                </div>
            </section>


        </>
    )
}
export default IEEEAZAHARSec