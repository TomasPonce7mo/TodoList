interface Props {
    width: string,
    height: string,
    cx: string, 
    cy: string,
    r: string,
    stroke?: string,
    strokewidth?: string,
    fill?: string
    svgclass?: string,
    circleclass?: string,
    svgid?: string,
    circleid?: string
}

const defaultProps = {
    stroke: '',
    strokewidth: '',
    fill: '', 
    svgclass: '',
    circleclass: '',
    svgid: '',
    circleid: '',
    divclass: '',
}

export const Circle = (propsIn:Props) => {
    const props = {...defaultProps, ...propsIn};
    
  return (
    <svg width={props.width} height={props.height} className={props.svgclass} id={props.svgid}>
  <circle cx={props.cx} cy={props.cy} r={props.r} stroke={props.stroke} strokeWidth={props.strokewidth} 
  fill={props.fill} className={props.circleclass} id={props.circleid} />
    </svg>
  )
}
