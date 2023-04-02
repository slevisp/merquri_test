import { List, Typography } from 'antd'
import store from '../../../middleware/store'
import { Button } from '../../common'
import { deleteHistory } from '../../../middleware/features/historySlice'
import { searchWeather } from '../../../middleware/features/boardSlice'
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons'
const { Item } = List
const { Meta } = Item
const { Text } = Typography

interface HistoryItemProps {
  order: number
  city: string
  country: string
  timestamp: string
}
const HistoryItem = (props: HistoryItemProps) => {
  const dispatch = store.dispatch
  const { order, city, country, timestamp } = props

  const onDeleteClicked = () => {
    dispatch(deleteHistory({ timestamp }))
  }
  const onSearchClicked = () => {
    dispatch(searchWeather({ city, type: 'history' }))
  }
  return (
    <Item
      actions={[
        <Text>{timestamp}</Text>,
        <Button
          onClick={onSearchClicked}
          shape='circle'
          icon={<SearchOutlined />}
        />,
        <Button
          onClick={onDeleteClicked}
          danger
          shape='circle'
          icon={<DeleteOutlined />}
        />,
      ]}
    >
      <Meta title={<Text>{`${order}. ${city}, ${country}`}</Text>} />
    </Item>
  )
}

export default HistoryItem
