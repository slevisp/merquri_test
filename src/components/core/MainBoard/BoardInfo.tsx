import { Typography, Row, Col } from 'antd'

const { Text } = Typography

interface BoardInfoProps {
  label: string
  detail: string
}
const BoardInfo = (props: BoardInfoProps) => {
  const { label, detail } = props

  return (
    <Row>
      <Col span={3}>
        <Text type='secondary'>{label}</Text>
      </Col>
      <Col span={21}>
        <Text>{detail}</Text>
      </Col>
    </Row>
  )
}

export default BoardInfo
