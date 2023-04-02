import { Layout, Typography } from 'antd'

const { Header } = Layout
const { Title } = Typography

const AppHeader = () => {
  return (
    <Header style={{ background: 'white', marginBottom: '20px' }}>
      <Title level={3} style={{ textAlign: 'left', fontWeight: 'bold' }}>
        Today's Weather
      </Title>
    </Header>
  )
}

export default AppHeader
