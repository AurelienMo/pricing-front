interface ImagePropsI {
    source: string,
    width: number,
    alt: string,
    height?: number,
    className?: string
}

const Image = (props: ImagePropsI) => {
    return (
        <img src={props.source} width={props.width} alt={props.alt} height={props.height ?? 'auto'} className={props.className ?? ''}/>
    )
}

export default Image;
