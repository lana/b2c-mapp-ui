import CSS from './styles.css'

export default function Wrapper({type, children}) {
  const classType = type === 'modal' ? CSS.wrapperModal : CSS.wrapperContent
  return (
    <div className={`${classType} ${CSS.wrapper}`}>{children}</div>
  )
}
