import { forwardRef } from 'react'
import {
  Typography,
  Input as AntdInput,
  Space,
  InputRef,
  InputProps,
} from 'antd'

interface SearchInputProps extends InputProps {
  label: string
}

const { Text } = Typography

const Input = forwardRef<InputRef, SearchInputProps>((props, ref) => {
  const { label, ...others } = props
  return (
    <Space>
      <Text strong>{label}</Text>
      <AntdInput {...others} ref={ref} />
    </Space>
  )
})

export default Input
