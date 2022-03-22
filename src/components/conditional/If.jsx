export default (props) => {
    if(props.condition && props.children){
        return props.children
    }else{
        return false
    }
}