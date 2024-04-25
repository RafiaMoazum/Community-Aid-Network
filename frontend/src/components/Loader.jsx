import loaderStyle from "./loader.module.css"


const Loader = () => {
    return (
<div className={loaderStyle.loading_main_div}>
        <div className={loaderStyle.loading_center_div} >
            <div className={loaderStyle.rot}></div>
            <p className={loaderStyle.loading}>Loading</p>
        </div>
        </div>   
      );
}
 
export default Loader;