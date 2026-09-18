import { useContext } from "react"
import ErrorComponent from "../component/ErrorComponent"
import LoadingComponent from "../component/LoadingComponent"


export const withFetchStateHOC = (WrappedComponent,context,dataKey,reTrykey) => {
    const NewComponent = (props) => {
        const contextData = useContext(context)
        const data = contextData[dataKey]
        const reTry = contextData[reTrykey]
        if(data.loading) return(<LoadingComponent/>)
        if(data.error) return(<ErrorComponent reTry={reTry}/>)
        return <WrappedComponent {...props}/>
    }
    return NewComponent
}