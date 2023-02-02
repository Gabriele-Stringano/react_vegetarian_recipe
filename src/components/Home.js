import TextHome from './TextHome';
//imported style
import StyleCSS from './modules/Home.module.css';

export function Home () {
    return(
        <div className= {StyleCSS.box}>
            <TextHome/>
        </div>
    )
}