import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'

interface ButtonProps extends AntdButtonProps {
  debounce?: boolean
}
// todo implement debounce click
const Button = (props: ButtonProps) => {
  const { debounce, children, ...others } = props
  return <AntdButton {...others}>{children}</AntdButton>
}

export default Button
