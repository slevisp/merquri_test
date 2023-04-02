import { Typography } from 'antd'
import { useSelector } from 'react-redux'
import BoardInfo from './BoardInfo'

const { Title } = Typography

const MainBoard = () => {
  const {
    isInited,
    city,
    country,
    title,
    description,
    temperature,
    humidity,
    timestamp,
  } = useSelector((state: any) => state.board)
  return (
    <>
      {isInited ? (
        <>
          <Title type='secondary' level={5}>
            {city ?? ''}, {country ?? ''}
          </Title>
          <Title level={2}>{title}</Title>
          <BoardInfo label='Description:' detail={description} />
          <BoardInfo label='Temperature:' detail={temperature} />
          <BoardInfo label='Humidity:' detail={humidity} />
          <BoardInfo label='Time:' detail={timestamp} />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default MainBoard
